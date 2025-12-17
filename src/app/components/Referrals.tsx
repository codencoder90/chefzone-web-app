import { Building2, Users2, Store, ArrowRight } from 'lucide-react';

export function Referrals() {
  const programs = [
    {
      icon: Building2,
      title: 'Refer a Business',
      description: 'Know a restaurant or venue looking for staff? Refer them to Chef Zone and earn generous rewards.',
      reward: '£500',
      rewardText: 'per successful referral',
      color: 'from-blue-500 to-blue-600',
      benefits: ['Unlimited referrals', 'Fast payouts', 'No cap on earnings']
    },
    {
      icon: Users2,
      title: 'Refer a Friend',
      description: 'Help your hospitality friends find great jobs. Earn rewards when they complete their first placement.',
      reward: '£200',
      rewardText: 'per placement',
      color: 'from-orange-500 to-orange-600',
      benefits: ['Easy referral process', 'Track your rewards', 'Help friends succeed']
    },
    {
      icon: Store,
      title: 'Be a Franchisee',
      description: 'Join the Chef Zone family. Launch your own hospitality staffing franchise with our proven business model.',
      reward: 'Your Business',
      rewardText: 'full training & support',
      color: 'from-purple-500 to-purple-600',
      benefits: ['Proven system', 'National brand', 'Ongoing support']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Partnership Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Grow with Chef Zone
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing network and earn rewards by helping businesses find great staff, connecting friends to opportunities, or building your own staffing empire.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-gray-100 hover:border-transparent flex flex-col"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${program.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <div className="text-4xl font-bold mb-1">{program.reward}</div>
                    <div className="text-white/90 text-sm">{program.rewardText}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-6">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2 group-hover:scale-105 mt-auto`}>
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Earning?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands who are already earning rewards through Chef Zone's referral and partnership programs.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold inline-flex items-center gap-2 shadow-xl">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
