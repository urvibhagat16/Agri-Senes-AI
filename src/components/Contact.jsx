function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-10">
          We'd love to hear from you. Feel free to contact us anytime.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;