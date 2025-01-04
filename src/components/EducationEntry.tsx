import React from 'react';
import { Tooltip } from './Tooltip';

interface EducationEntryProps {
  school: string;
  degree: string;
  graduationInfo: string;
  tooltip?: string;
}

export function EducationEntry({ school, degree, graduationInfo, tooltip }: EducationEntryProps) {
  return (
    <div>
      <h3 className="font-semibold">{school}</h3>
      <p className="text-gray-700 flex items-center">
        {degree}
        {tooltip && <Tooltip text={tooltip} />}
      </p>
      <p className="text-gray-600">{graduationInfo}</p>
    </div>
  );
}