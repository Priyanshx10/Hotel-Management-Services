// src/components/ResponsiveCard.tsx
import React from 'react';

interface ResponsiveCardProps {
  title: string;
  description: string;
  link: string;
}

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Learn More
      </a>
    </div>
  );
};
