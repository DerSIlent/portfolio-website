import React from 'react';

interface WorkExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export function WorkExperience({ title, company, location, period, responsibilities }: WorkExperienceProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700">{company} — {location}</p>
      <p className="text-gray-600 mb-2">{period}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}