import { Users, Gift, Heart, CheckCircle } from 'lucide-react';

export function ReferFriendPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Refer a Friend & Both Get Rewarded
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Know someone looking for hospitality work? Refer them to Chef Zone and you both earn £100 when they complete their first shift.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Rewards */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">£100 For You</h3>
              <p className="text-lg opacity-90">When your friend completes first shift</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">£100 For Them</h3>
              <p className="text-lg opacity-90">Welcome bonus for your friend</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Refer Your Friend</h3>
              <p className="text-gray-600">Submit their details using the form below</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">They Register</h3>
              <p className="text-gray-600">We contact them and complete registration</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">First Shift</h3>
              <p className="text-gray-600">Your friend works their first shift</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Paid</h3>
              <p className="text-gray-600">You both receive £100 each</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Refer a Friend Today
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Friend\'s Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Friend\'s Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Friend\'s Phone *</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Friend\'s Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What role are they looking for? *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option>Select role...</option>
                      <option>Chef</option>
                      <option>Kitchen Staff</option>
                      <option>Waiter/Waitress</option>
                      <option>Bartender</option>
                      <option>Manager</option>
                      <option>Front of House</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tell us about your friend\'s experience and availability..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 font-semibold"
              >
                Refer Your Friend
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Terms & Conditions</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>Your friend must be a new candidate who has never registered with Chef Zone before</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>Rewards are paid after your friend successfully completes their first paid shift</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>There is no limit to how many friends you can refer</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <p>Rewards are typically paid within 7 days of shift completion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
