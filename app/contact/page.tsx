// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <section className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
  
          <form className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Your name"
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Your email"
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Your message"
                rows={4}
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  