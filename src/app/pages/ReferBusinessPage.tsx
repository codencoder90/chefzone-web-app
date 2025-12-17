import { Building2, Gift, DollarSign, CheckCircle } from 'lucide-react';

export function ReferBusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Refer a Business & Earn Rewards
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Know a restaurant, hotel, or catering business that needs staff? Refer them and earn up to £500 per successful placement.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Referral</h3>
              <p className="text-gray-600">Fill out the simple referral form below</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Contact Them</h3>
              <p className="text-gray-600">Our team reaches out to the business</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">They Hire</h3>
              <p className="text-gray-600">Business makes their first placement</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">You Get Paid</h3>
              <p className="text-gray-600">Receive your reward payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
              <Gift className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Earn Up To £500</h2>
              <p className="text-xl mb-8 opacity-90">Per successful business referral</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">£200</div>
                  <div className="text-sm opacity-90">First Placement</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">£300</div>
                  <div className="text-sm opacity-90">After 5 Placements</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <DollarSign className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">£500</div>
                  <div className="text-sm opacity-90">After 10 Placements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Submit a Business Referral
            </h2>
            <form className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Select type...</option>
                      <option>Restaurant</option>
                      <option>Hotel</option>
                      <option>Catering Company</option>
                      <option>Bar/Pub</option>
                      <option>Event Venue</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Any additional details about the business or their staffing needs..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 font-semibold"
              >
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8">
          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>Rewards are paid after the referred business completes their first placement</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>Additional bonuses apply for multiple placements within 12 months</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>No limit on the number of businesses you can refer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
