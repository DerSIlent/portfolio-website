import React from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <span className="relative inline-block group ml-2">
      <Info size={16} className="inline text-gray-400 hover:text-gray-600" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-black text-white text-sm rounded shadow-lg">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black" />
      </span>
    </span>
  );
}