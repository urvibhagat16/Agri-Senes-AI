import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
function Products() {
  const [form, setForm] = useState({
    product_name: "",
    category: "",
    quantity: "",
    price: "",
    status: "",
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error.message);
    } else {
      setProducts(data);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setForm({
      product_name: item.product_name,
      category: item.category,
      quantity: item.quantity,
      price: item.price,
      status: item.status,
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;
const result = await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to recover this product!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#dc2626",
  cancelButtonColor: "#6b7280",
  confirmButtonText: "Yes, Delete!",
});

if (!result.isConfirmed) return;
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

Swal.fire({
  icon: "success",
  title: "Deleted!",
  text: "Product deleted successfully.",
  confirmButtonColor: "#dc2626",
});    
fetchProducts();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.product_name ||
      !form.category ||
      !form.quantity ||
      !form.price ||
      !form.status
    ) {
      alert("Please fill all fields.");
      return;
    }

    let error;

    if (editId) {
      const result = await supabase
        .from("products")
        .update({
          product_name: form.product_name,
          category: form.category,
          quantity: Number(form.quantity),
          price: Number(form.price),
          status: form.status,
        })
        .eq("id", editId);

      error = result.error;
    } else {
      const result = await supabase
        .from("products")
        .insert([
          {
            product_name: form.product_name,
            category: form.category,
            quantity: Number(form.quantity),
            price: Number(form.price),
            status: form.status,
          },
        ]);

      error = result.error;
    }

    if (error) {
      alert(error.message);
      return;
    }

    Swal.fire({
  icon: "success",
  title: editId ? "Product Updated!" : "Product Added!",
  text: editId
    ? "Product updated successfully."
    : "Product added successfully.",
  confirmButtonColor: "#16a34a",
});

    setForm({
      product_name: "",
      category: "",
      quantity: "",
      price: "",
      status: "",
    });

    setEditId(null);
    fetchProducts();
  };

  
  return (
        <div className="mt-10">
  <h2 className="text-2xl font-bold mb-5">Product List</h2>

  {/* Search */}
  <input
    type="text"
    placeholder="🔍 Search Product..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border p-3 rounded-lg mb-4"
  />

  {/* Category Filter */}
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="w-full border p-3 rounded-lg mb-4"
  >
    <option value="All">All Categories</option>
    <option value="Fruits">Fruits</option>
    <option value="Vegetables">Vegetables</option>
    <option value="Dairy">Dairy</option>
    <option value="Bakery">Bakery</option>
  </select>

  <table className="w-full border border-gray-300">
    <thead>
      <tr className="bg-green-100">
        <th className="border p-3">Name</th>
        <th className="border p-3">Category</th>
        <th className="border p-3">Quantity</th>
        <th className="border p-3">Price</th>
        <th className="border p-3">Status</th>
        <th className="border p-3">Action</th>
      </tr>
    </thead>

    <tbody>
      {products
        .filter((item) =>
          item.product_name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .filter((item) =>
          filter === "All" ? true : item.category === filter
        )
        .map((item) => (
          <tr key={item.id}>
            <td className="border p-3">{item.product_name}</td>
            <td className="border p-3">{item.category}</td>
            <td className="border p-3">{item.quantity}</td>
            <td className="border p-3">₹{item.price}</td>
            <td className="border p-3">{item.status}</td>

            <td className="border p-3 text-center">
              <button
  type="button"
  onClick={() => handleEdit(item)}
  className="bg-blue-600 text-white px-3 py-2 rounded-lg mr-2 hover:bg-blue-700 flex items-center gap-2"
>
  <FaEdit />
  Edit
</button>

              <button
  type="button"
  onClick={() => handleDelete(item.id)}
  className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2"
>
  <FaTrash />
  Delete
</button>
              
            </td>
          </tr>
        ))}

      {products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
      ).length === 0 && (
        <tr>
          <td colSpan="6" className="text-center p-4">
            No Products Found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
  );
}

export default Products;
