import { CheckCircle2, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Employers() {
  const benefits = [
    'Access to 10,000+ vetted hospitality professionals',
    'Emergency cover in as little as 2 hours',
    'Temps, full-time, and permanent placements',
    'All roles: chefs, servers, bartenders, managers',
    'Competitive rates with no hidden fees',
    '24/7 support from dedicated account managers',
    'Satisfaction guaranteed or free replacement',
    'Easy online booking and management portal'
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763426250062-6512c753f2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjU5NTc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern restaurant kitchen"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762015669851-4098e655ec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc2VydmljZSUyMHN0YWZmfGVufDF8fHx8MTc2NTk2NDU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant service staff"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-transparent"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 border-2 border-orange-500 max-w-[180px] lg:max-w-none">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">2 hrs</div>
                  <div className="text-xs lg:text-sm text-gray-600">Avg. Response Time</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 lg:-top-6 -left-4 lg:-left-6 bg-white rounded-2xl shadow-2xl p-4 lg:p-6 border-2 border-orange-500 max-w-[180px] lg:max-w-none">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-xs lg:text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              For Employers
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Need a Chef or Front-of-House Staff?
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Chef Zone connects you with exceptional hospitality talent, fast. Whether you need emergency cover for tonight or a permanent team member, we deliver quality staff when you need them most.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 font-semibold flex items-center justify-center gap-2">
                Hire Staff Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                View Our Guarantee
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-orange-500">10,000+</div>
                <div className="text-xs text-gray-600">Vetted Staff</div>
              </div>
              <div className="text-center border-l border-gray-300">
                <div className="text-xl lg:text-2xl font-bold text-orange-500">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </div>
              <div className="text-center border-l border-gray-300">
                <div className="text-xl lg:text-2xl font-bold text-orange-500">2 hrs</div>
                <div className="text-xs text-gray-600">Emergency Cover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
