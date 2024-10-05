// src/app/services/page.tsx
import { BotCard } from '../../components/BotCard';
import { ResponsiveCard } from '../../components/ResponsiveCard';

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Service 1: Hotel Websites */}
          <ResponsiveCard 
            title="Hotel Website Development" 
            description="We create fully responsive, modern websites tailored to your hotel’s needs, optimized for performance and customer engagement."
            link="/contact"
          />

          {/* Service 2: Custom Bots */}
          <ResponsiveCard 
            title="Custom AI Bots" 
            description="Automate your hotel management with our custom AI bots for reservations, customer service, and more."
            link="/contact"
          />
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-8">Custom Bots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bot Feature 1 */}
          <BotCard
            title="Reservation Bot"
            description="A bot that automates hotel reservations and inquiries, ensuring quick responses."
            features={[
              '24/7 Availability',
              'Instant Booking Confirmation',
              'Integration with Hotel Management Systems',
            ]}
          />

          {/* Bot Feature 2 */}
          <BotCard
            title="Customer Service Bot"
            description="Enhance customer satisfaction with a bot that handles FAQs and provides information on demand."
            features={[
              'Natural Language Processing',
              'Quick FAQ Responses',
              'Multi-Language Support',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
