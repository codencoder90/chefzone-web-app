import { MapPin, Clock, Award, Shield, Star, Sparkles } from 'lucide-react';

export function Trust() {
  const features = [
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: 'From London to Liverpool, Bristol to Brighton - we cover all major UK cities and beyond.'
    },
    {
      icon: Clock,
      title: 'Fast Hiring',
      description: 'Emergency cover in 2 hours. Permanent placements in days, not weeks.'
    },
    {
      icon: Award,
      title: 'All Levels of Staff',
      description: 'Commis chefs to head chefs, waiters to restaurant managers - every role covered.'
    },
    {
      icon: Shield,
      title: 'Fully Vetted',
      description: 'Every candidate undergoes thorough background checks and skill verification.'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Not satisfied? We will replace any staff member within 24 hours, no questions asked.'
    },
    {
      icon: Sparkles,
      title: 'Expert Support',
      description: '24/7 dedicated support team ready to help with any staffing challenge.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Why Choose Chef Zone
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Hospitality Talent You Can Trust
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Over a decade of experience connecting the best hospitality professionals with leading venues across the UK.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center border-l-0 md:border-l border-white/10">
              <div className="text-4xl font-bold text-orange-500 mb-2">10,000+</div>
              <div className="text-gray-300">Registered Staff</div>
            </div>
            <div className="text-center border-l-0 md:border-l border-white/10">
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-300">Partner Venues</div>
            </div>
            <div className="text-center border-l-0 md:border-l border-white/10">
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-10"></div>
    </section>
  );
}
