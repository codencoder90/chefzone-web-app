import { Phone, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center md:justify-between text-sm">
          <div className="hidden md:flex items-center gap-8">
            <span className="text-gray-300 truncate max-w-[500px]">
              Locations: London / Liverpool / Manchester / Bristol / Brighton / Dorset / Devon & Nationwide
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>+44 123 456 7890</span>
            </a>
            <a href="mailto:hello@chefzone.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>hello@chefzone.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
