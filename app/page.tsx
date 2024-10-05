export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Hotel Management Agency
      </h1>
      <p className="text-xl text-gray-700 mb-8 text-center px-4">
        We provide custom websites and AI bots to help manage your hotel business efficiently. Our services are available in Australia and Luxembourg.
      </p>
      <a href="/services" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
        Explore Our Services
      </a>
    </section>
  );
}