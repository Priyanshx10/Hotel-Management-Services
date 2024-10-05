export function Header() {
    return (
      <header className="bg-blue-600 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Hotel Management Agency</a>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
          </div>
        </nav>
      </header>
    );
  }
  