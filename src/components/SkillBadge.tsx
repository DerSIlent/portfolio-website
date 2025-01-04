import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200 cursor-default">
      {skill}
    </span>
  );
}