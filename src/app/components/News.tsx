import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function News() {
  const articles = [
    {
      title: 'Chef Zone Expands to 5 New UK Cities',
      excerpt: 'We are thrilled to announce our expansion into Bristol, Brighton, Manchester, Liverpool, and the Southwest, bringing our quality staffing services to even more venues.',
      category: 'Company News',
      date: 'Dec 15, 2024',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1763426250062-6512c753f2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjU5NTc1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Top 10 Interview Tips for Hospitality Jobs',
      excerpt: 'Landing your dream chef or FOH role starts with a great interview. Our recruitment experts share their top tips for standing out from the crowd.',
      category: 'Career Advice',
      date: 'Dec 12, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1722152667178-be659e54bffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NjU4NTI0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'How to Prepare Your Restaurant for Peak Season',
      excerpt: 'The busy season is coming. Learn how to staff up effectively, manage schedules, and ensure your team is ready for the rush.',
      category: 'Industry Insights',
      date: 'Dec 10, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1762015669851-4098e655ec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc2VydmljZSUyMHN0YWZmfGVufDF8fHx8MTc2NTk2NDU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6 md:gap-0">
          <div>
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Latest News & Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Industry trends, career advice, and company updates from the Chef Zone team.
            </p>
          </div>
          <button className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2 group">
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-orange-500"
            >
              {/* Article Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="text-orange-600 font-semibold flex items-center gap-2 group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Update</h3>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for industry insights, job tips, and exclusive opportunities delivered to your inbox weekly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 backdrop-blur-sm"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
