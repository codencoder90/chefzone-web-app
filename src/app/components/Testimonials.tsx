import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marcus Thompson',
      role: 'Restaurant Manager',
      venue: 'The Ivy Collection',
      rating: 5,
      text: 'Chef Zone saved us during our busiest season. Their emergency cover service delivered a qualified sous chef within 2 hours. Absolutely phenomenal service.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head Chef',
      venue: 'Previously Unemployed',
      rating: 5,
      text: 'After months of searching, Chef Zone found me my dream role in just two weeks. The app made applying so easy, and the team supported me throughout the entire process.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      name: 'David Chen',
      role: 'Operations Director',
      venue: 'Luxury Hotel Group',
      rating: 5,
      text: 'We have partnered with Chef Zone for 5 years. Their professionalism, quality of staff, and 24/7 support make them our go-to staffing solution across all our properties.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Pastry Chef',
      venue: 'Michelin Star Restaurant',
      rating: 5,
      text: 'The flexibility to pick up shifts when I want has been life-changing. Chef Zone treats their temps with respect and always pays on time. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'James Patterson',
      role: 'General Manager',
      venue: 'London Restaurant Group',
      rating: 5,
      text: 'The quality of candidates Chef Zone provides is consistently excellent. They understand hospitality and only send staff who are properly vetted and trained.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Anderson',
      role: 'Sommelier',
      venue: 'Fine Dining Establishment',
      rating: 5,
      text: 'Through Chef Zone premium catering division, I have worked at some incredible events. The opportunities and networking have been invaluable for my career.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-200">
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients and candidates have to say about working with Chef Zone.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-orange-500/30 hover:shadow-lg transition-all duration-300 relative group flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-100 transition-opacity">
                <Quote className="w-12 h-12 text-orange-500/20" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 mb-8 leading-relaxed relative z-10 italic flex-1">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0 border border-border">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-orange-600 font-medium">{testimonial.venue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 shadow-2xl shadow-orange-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9★</div>
              <div className="text-white/90 text-sm font-medium">Average Rating</div>
            </div>
            <div className="p-4 md:border-l border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-white/90 text-sm font-medium">5-Star Reviews</div>
            </div>
            <div className="p-4 border-l border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/90 text-sm font-medium">Would Recommend</div>
            </div>
            <div className="p-4 border-l border-white/20">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-white/90 text-sm font-medium">Years Trusted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}