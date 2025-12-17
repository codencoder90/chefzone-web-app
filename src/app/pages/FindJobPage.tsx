import { Search, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

export function FindJobPage() {
  const jobs = [
    {
      title: 'Head Chef',
      location: 'Central London',
      type: 'Permanent',
      salary: '£45,000 - £55,000',
      posted: '2 days ago'
    },
    {
      title: 'Sous Chef',
      location: 'Mayfair, London',
      type: 'Permanent',
      salary: '£35,000 - £42,000',
      posted: '3 days ago'
    },
    {
      title: 'Waiter/Waitress',
      location: 'Covent Garden',
      type: 'Temporary',
      salary: '£12.50/hour',
      posted: '1 day ago'
    },
    {
      title: 'Kitchen Porter',
      location: 'Shoreditch',
      type: 'Temporary',
      salary: '£11.50/hour',
      posted: '4 days ago'
    },
    {
      title: 'Restaurant Manager',
      location: 'West End',
      type: 'Permanent',
      salary: '£40,000 - £48,000',
      posted: '1 week ago'
    },
    {
      title: 'Bartender',
      location: 'Soho',
      type: 'Temporary',
      salary: '£13/hour',
      posted: '2 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Hospitality Job
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse hundreds of chef and front-of-house positions across London and nationwide.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 font-semibold">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Job Type</option>
              <option>Permanent</option>
              <option>Temporary</option>
              <option>Contract</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Salary Range</option>
              <option>£20k - £30k</option>
              <option>£30k - £40k</option>
              <option>£40k - £50k</option>
              <option>£50k+</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Posted Date</option>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {jobs.length} Jobs Available
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Sort by: Newest</option>
              <option>Sort by: Salary High-Low</option>
              <option>Sort by: Salary Low-High</option>
            </select>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                      View Details
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}
