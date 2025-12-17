import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-700 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Chef Zone Has You Covered
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
            Whether you're seeking your next career opportunity or need exceptional staff for your establishment, Chef Zone is your trusted partner in hospitality staffing.
          </p>

          {/* Key Points */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">10,000+ Active Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">2-Hour Emergency Cover</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/register"
              className="w-full md:w-auto bg-white text-orange-600 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all shadow-2xl font-bold text-lg flex items-center justify-center gap-3 group"
            >
              Get Started as a Job Seeker
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/hiring"
              className="w-full md:w-auto bg-gray-900 text-white px-10 py-5 rounded-xl hover:bg-gray-800 transition-all shadow-2xl font-bold text-lg flex items-center justify-center gap-3 group"
            >
              Get Started as an Employer
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-12 text-white/80 text-lg">
            Trusted by 500+ hospitality businesses across the UK
          </p>

          {/* Stats Bar */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="border-l-0 md:border-l border-white/20">
                <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
                <div className="text-white/80 text-sm">Registered Staff</div>
              </div>
              <div className="border-l-0 md:border-l border-white/20">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm">Partner Venues</div>
              </div>
              <div className="border-l-0 md:border-l border-white/20">
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}