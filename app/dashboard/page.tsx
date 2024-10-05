// src/app/dashboard/page.tsx
export default function DashboardPage() {
    return (
      <section className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Client Dashboard</h2>
  
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Welcome, [Client Name]!</h3>
  
            <p className="text-gray-700 mb-4">
              Manage your hotel’s bookings, room details, and custom bots from this dashboard.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Manage Bookings</h4>
                <p className="text-gray-600">View and update your current hotel bookings.</p>
              </div>
  
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">Custom Bots</h4>
                <p className="text-gray-600">Manage the AI bots for automated hotel management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  