import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Products", path: "/dashboard/products" },
    { name: "Analytics", path: "/dashboard/analytics" },
    { name: "AI Chat", path: "/dashboard/chat" },
    { name: "AI Vision", path: "/dashboard/vision" },
    { name: "Profile", path: "/dashboard/profile" },
    
  ];

  return (
    <div className="w-64 min-h-screen bg-green-700 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        🌱 Agri-Sense AI
      </h1>

      <div className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="block px-4 py-3 rounded-lg hover:bg-green-600"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;