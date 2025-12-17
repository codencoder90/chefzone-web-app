import { PageHero } from '../components/PageHero';
import { ProfessionalCatering as ProfessionalCateringComponent } from '../components/ProfessionalCatering';
import { ChefHat, Award, Users, Clock } from 'lucide-react';

export function ProfessionalCateringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="PROFESSIONAL CATERING"
        subtitle="FILL YOUR MENU WITH FLAVOUR"
        backgroundImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
        align="left"
      >
        <div className="max-w-2xl">
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Elite chefs and catering professionals for events, fine dining, and corporate functions across London and nationwide.
          </p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all shadow-lg font-bold tracking-wide">
            BOOK CATERING STAFF
          </button>
        </div>
      </PageHero>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Michelin-trained professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Award-winning service</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Support</h3>
              <p className="text-gray-600">Full event teams available</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Last-minute availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Component */}
      <ProfessionalCateringComponent />
    </div>
  );
}
