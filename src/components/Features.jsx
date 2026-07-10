import {
  FaRobot,
  FaChartBar,
  FaLeaf,
  FaEnvelope,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-green-600" />,
      title: "Groq AI Assistant",
      desc: "Get smart farming recommendations using AI.",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Groq Vision",
      desc: "Analyze crop and vegetable quality using images.",
    },
    {
      icon: <FaChartBar className="text-4xl text-green-600" />,
      title: "Analytics Dashboard",
      desc: "Track products, reports, and farming insights.",
    },
    {
      icon: <FaEnvelope className="text-4xl text-green-600" />,
      title: "Email Alerts",
      desc: "Receive notifications using Resend integration.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Features
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything you need for smart agriculture in one platform.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;