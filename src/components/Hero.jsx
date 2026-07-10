import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-green-50 to-green-100 min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-green-600 font-semibold mb-2">
            🌾 Smart Farming with AI
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Welcome to
            <span className="text-green-600"> Agri-Sense AI</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            AI-powered agriculture platform to manage products,
            analyze crop quality using AI Vision, receive smart
            recommendations, and monitor everything through an
            interactive dashboard.
          </p>

          <div className="flex gap-4">
            <Link
              to="/signup"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800"
            alt="Farmer"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;