import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { FaLeaf, FaBoxOpen, FaChartBar, FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    alert("✅ Logout Successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
  <FaLeaf />
  Agri Sense
</h1>

<Link to="/dashboard" className="flex items-center gap-2 hover:text-yellow-300">
  <FaChartBar />
  Dashboard
</Link>

<Link to="/products" className="flex items-center gap-2 hover:text-yellow-300">
  <FaBoxOpen />
  Products
</Link>

<button
  onClick={handleLogout}
  className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
>
  <FaSignOutAlt />
  Logout
</button>
        </div>
      
    </nav>
  );
}

export default Navbar;