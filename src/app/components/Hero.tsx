import { ArrowRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-orange-50/50 overflow-hidden pt-10 lg:pt-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100/50 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-orange-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Trusted by 500+ Hospitality Businesses
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              It's Never Too Hot in the{' '}
              <span className="text-orange-600 relative inline-block">
                Chef Zone
                <svg className="absolute -bottom-2 left-0 w-full text-orange-400/30" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Kitchen
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Chef Zone is the ultimate source of hospitality talent. We connect exceptional chefs and front-of-house staff with London's finest establishments and venues nationwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/find-job"
                className="w-full sm:w-auto bg-foreground text-background px-8 py-4 rounded-xl hover:bg-foreground/90 transition-all font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                Find a Job
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/hiring"
                className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20 font-semibold flex items-center justify-center gap-2"
              >
                Hire Staff
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground font-medium">Active Staff</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground font-medium">Partner Venues</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative h-[500px] lg:h-[600px] lg:mt-0 mt-8">
            {/* Background Chef Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
                alt="Professional chef cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Phone Mockups */}
            <div className="hidden lg:block absolute -left-12 bottom-12 w-64 h-[440px] bg-background rounded-3xl shadow-xl border border-border p-2 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 will-change-transform">
              <div className="w-full h-full bg-orange-600 rounded-2xl p-5 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white/90 text-xs font-medium bg-white/10 px-2 py-1 rounded-full">Chef Zone App</div>
                </div>
                <div className="text-white text-xl font-bold mb-2 leading-tight">Find Your Next Shift</div>
                <div className="text-orange-100 text-xs mb-6">Browse 200+ open positions near you</div>
                <div className="flex-1 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 p-3">
                  <div className="space-y-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-white/10 rounded-lg p-2 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white/20"></div>
                        <div className="space-y-1">
                          <div className="h-2 w-16 bg-white/40 rounded-full"></div>
                          <div className="h-1.5 w-10 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-12 w-64 h-[440px] bg-background rounded-3xl shadow-xl border border-border p-2 transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 will-change-transform">
              <div className="w-full h-full bg-zinc-900 rounded-2xl p-5 flex flex-col relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-zinc-400 text-xs">Employer Portal</div>
                </div>
                <div className="text-white text-xl font-bold mb-2 leading-tight">Hire Staff Fast</div>
                <div className="text-zinc-400 text-xs mb-6">Emergency cover in <span className="text-orange-500 font-bold">2 hours</span></div>
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] text-zinc-500">Active Requests</div>
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-zinc-800 rounded-lg p-2.5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="h-2 w-20 bg-zinc-600 rounded-full"></div>
                        <div className="h-4 w-4 bg-orange-500/20 rounded text-[8px] text-orange-500 flex items-center justify-center">!</div>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-700/50 rounded-full"></div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg p-2.5 opacity-50">
                      <div className="h-2 w-16 bg-zinc-600 rounded-full mb-2"></div>
                      <div className="h-1.5 w-2/3 bg-zinc-700/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
    </section>
  );
}