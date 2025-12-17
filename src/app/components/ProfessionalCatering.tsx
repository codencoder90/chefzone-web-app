import { Award, Users, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfessionalCatering() {
  const services = [
    {
      icon: Award,
      title: 'Fine Dining Events',
      description: 'Michelin-trained chefs and sommeliers for exclusive dining experiences'
    },
    {
      icon: Users,
      title: 'Corporate Catering',
      description: 'Professional teams for conferences, launches, and corporate events'
    },
    {
      icon: Sparkles,
      title: 'Private Functions',
      description: 'Bespoke catering for weddings, parties, and special celebrations'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Elegant Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Premium Services
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Professional Catering Excellence
            </h2>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Elevate your event with Chef Zone's premium catering division. Our hand-selected team of award-winning chefs, mixologists, and service professionals deliver unforgettable culinary experiences.
            </p>

            {/* Services Grid */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-orange-500/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{service.title}</h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 font-semibold flex items-center justify-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">500+</div>
                <div className="text-xs lg:text-sm text-gray-400">Events Catered</div>
              </div>
              <div className="text-center sm:text-left border-l border-white/20 pl-4 sm:pl-8">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">5-Star</div>
                <div className="text-xs lg:text-sm text-gray-400">Service Rating</div>
              </div>
              <div className="text-center sm:text-left border-l border-white/20 pl-4 sm:pl-8">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">Bespoke</div>
                <div className="text-xs lg:text-sm text-gray-400">Menus</div>
              </div>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="col-span-2 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558199141-391d935676f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZm9vZHxlbnwxfHx8fDE3NjU4NjQ1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fine dining food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Small Images */}
            <div className="h-48 lg:h-64 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680342627018-1cfc75d0597a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGV2ZW50fGVufDF8fHx8MTc2NTg5NTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury catering event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="h-48 lg:h-64 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <div className="text-center text-white p-4 lg:p-6">
                <div className="text-3xl lg:text-5xl font-bold mb-2">★</div>
                <div className="text-lg lg:text-2xl font-bold mb-1">Michelin-Trained</div>
                <div className="text-xs lg:text-sm opacity-90">Award-winning chefs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10"></div>
    </section>
  );
}
