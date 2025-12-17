import { Clock, Users, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Users,
      title: 'Temps Staffing',
      description: 'Flexible, reliable temporary staff for busy periods, events, and seasonal demands. From single shifts to long-term assignments.',
      features: ['Same-day booking', 'Vetted professionals', 'All skill levels']
    },
    {
      icon: Clock,
      title: 'Full-Time Staffing',
      description: 'Find your perfect permanent team member. We match exceptional talent with great establishments for long-term success.',
      features: ['Thorough screening', 'Cultural fit', 'Guaranteed placement']
    },
    {
      icon: Zap,
      title: 'Emergency Cover',
      description: 'Staff emergency? We have got you covered. Fast response for last-minute call-outs and unexpected absences.',
      features: ['2-hour response', '24/7 availability', 'Instant replacement']
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-200">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Hospitality Staffing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need temps for a busy weekend or permanent team members, Chef Zone delivers the right talent at the right time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                  <Icon className="w-32 h-32 text-orange-500" />
                </div>

                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
