import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="flex flex-wrap gap-6 text-gray-600">
      <div className="flex items-center gap-2 hover:text-black transition-colors duration-200">
        <MapPin size={18} className="flex-shrink-0" />
        <span>Amsterdam, Noord-Holland</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail size={18} className="flex-shrink-0" />
        <a 
          href="mailto:SDR-1998@hotmail.com" 
          className="hover:text-black transition-colors duration-200"
        >
          SDR-1998@hotmail.com
        </a>
      </div>
      {/* <div className="flex items-center gap-2">
        <Phone size={18} className="flex-shrink-0" />
        <a 
          href="tel:+31643714655" 
          className="hover:text-black transition-colors duration-200"
        >
          +31643714655
        </a>
      </div> */}
    </div>
  );
}