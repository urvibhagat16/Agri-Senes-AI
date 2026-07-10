function About() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
            alt="Agriculture"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            About Agri-Sense AI
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Agri-Sense AI is an intelligent agriculture management platform
            designed to help farmers and vendors manage their products,
            analyze crop quality using AI, receive instant recommendations,
            and monitor their data through an interactive dashboard.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-green-600">100%</h3>
              <p>Smart Monitoring</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-green-600">AI</h3>
              <p>Powered Solutions</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;