import { Search, BellRing, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function JobSeekers() {
  const steps = [
    {
      icon: Search,
      title: 'Browse Jobs',
      description: 'Explore 200+ open positions across London and nationwide'
    },
    {
      icon: BellRing,
      title: 'Get Alerts',
      description: 'Receive instant notifications for jobs matching your skills'
    },
    {
      icon: Briefcase,
      title: 'Apply Fast',
      description: 'One-tap applications with your Chef Zone profile'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Career',
      description: 'Access training, certifications, and career development'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              For Job Seekers
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Looking for Your Next Great Opportunity?
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Join thousands of hospitality professionals who trust Chef Zone to find their perfect role. From temporary shifts to permanent positions, we've got opportunities that fit your lifestyle.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-orange-500 transition-all text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 font-semibold flex items-center justify-center gap-2">
                Register & Find Jobs
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                Download App
              </button>
            </div>
          </div>

          {/* Right - App Mockup */}
          <div className="relative h-[600px] lg:h-[700px] mt-8 lg:mt-0">
            {/* Large Phone Mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[90%] lg:h-[650px] bg-gray-900 rounded-[3rem] shadow-2xl p-3">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone Content */}
                <div className="h-full flex flex-col">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-8 pt-10">
                    <div className="text-white text-2xl font-bold mb-2">Find Your Next Job</div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
                      <Search className="w-5 h-5 text-white" />
                      <input
                        type="text"
                        placeholder="Search positions..."
                        className="bg-transparent text-white placeholder-white/70 outline-none flex-1"
                        disabled
                      />
                    </div>
                  </div>

                  {/* Job Cards */}
                  <div className="flex-1 bg-gray-50 p-4 space-y-3 overflow-hidden">
                    {[
                      { title: 'Head Chef', venue: 'The Ivy Restaurant', location: 'London', salary: '£45k-55k' },
                      { title: 'Sous Chef', venue: 'Gordon Ramsay Group', location: 'Mayfair', salary: '£38k-42k' },
                      { title: 'Pastry Chef', venue: 'Claridge\'s Hotel', location: 'London', salary: '£35k-40k' }
                    ].map((job, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="font-bold text-gray-900 mb-1">{job.title}</div>
                        <div className="text-sm text-gray-600 mb-2">{job.venue}</div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{job.location}</span>
                          <span className="text-orange-600 font-semibold">{job.salary}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Nav */}
                  <div className="bg-white border-t border-gray-200 px-6 py-4 flex justify-around">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-0 lg:top-10 lg:right-10 bg-white rounded-2xl shadow-xl p-4 border-2 border-orange-500 transform translate-x-4 lg:translate-x-0">
              <div className="text-3xl font-bold text-orange-500">200+</div>
              <div className="text-sm text-gray-600">Active Jobs</div>
            </div>

            <div className="absolute bottom-0 left-0 lg:bottom-10 lg:left-10 bg-white rounded-2xl shadow-xl p-4 border-2 border-orange-500 transform -translate-x-4 lg:translate-x-0">
              <div className="text-3xl font-bold text-orange-500">4.8★</div>
              <div className="text-sm text-gray-600">App Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
