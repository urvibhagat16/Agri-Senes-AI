import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (!error) {
      setProducts(data);
    }
  };

  const totalProducts = products.length;

  const freshProducts = products.filter(
    (item) => item.status === "Fresh"
  ).length;

  const spoiledProducts = products.filter(
    (item) => item.status === "Spoiled"
  ).length;

  const totalValue = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-blue-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">📦 Total Products</h2>
          <p className="text-4xl font-bold mt-3">
            {totalProducts}
          </p>
        </div>

        <div className="bg-green-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">🟢 Fresh Products</h2>
          <p className="text-4xl font-bold mt-3">
            {freshProducts}
          </p>
        </div>

        <div className="bg-red-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">🔴 Spoiled Products</h2>
          <p className="text-4xl font-bold mt-3">
            {spoiledProducts}
          </p>
        </div>

        <div className="bg-purple-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">💰 Total Value</h2>
          <p className="text-3xl font-bold mt-3">
            ₹{totalValue}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;