import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

function Topbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="bg-white shadow flex justify-between items-center px-8 py-4">

      <h2 className="text-2xl font-bold text-green-700">
        Dashboard
      </h2>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  );
}

export default Topbar;