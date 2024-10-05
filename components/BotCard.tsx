// src/components/BotCard.tsx
import React from 'react';

interface BotCardProps {
  title: string;
  description: string;
  features: string[];
}

export const BotCard: React.FC<BotCardProps> = ({ title, description, features }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <h4 className="font-semibold text-lg mb-2">Features:</h4>
      <ul className="list-disc list-inside text-gray-600">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
