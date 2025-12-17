import { Briefcase, TrendingUp, Heart, MapPin, DollarSign } from 'lucide-react';

export function PermanentJobsPage() {
  const jobs = [
    {
      title: 'Executive Head Chef',
      location: 'Mayfair, London',
      salary: '£60,000 - £75,000',
      type: 'Permanent',
      description: 'Leading Michelin-starred restaurant seeking experienced Head Chef'
    },
    {
      title: 'Restaurant General Manager',
      location: 'Covent Garden',
      salary: '£50,000 - £60,000',
      type: 'Permanent',
      description: 'High-end dining establishment looking for experienced manager'
    },
    {
      title: 'Pastry Chef',
      location: 'Chelsea',
      salary: '£38,000 - £45,000',
      type: 'Permanent',
      description: 'Luxury hotel seeking talented pastry chef'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Permanent Hospitality Careers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build your long-term career with London\'s top hospitality employers
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <Briefcase className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">Access opportunities with industry-leading employers</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Competitive Salaries</h3>
              <p className="text-gray-600">Premium compensation packages</p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <Heart className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Perfect Match</h3>
              <p className="text-gray-600">Find roles that align with your career goals</p>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
