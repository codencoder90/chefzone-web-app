import { ArrowRight } from 'lucide-react';

export function Newsletter() {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden my-8 mx-6 md:mx-8 shadow-2xl">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Update</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter for industry insights, job tips, and exclusive opportunities delivered to your inbox weekly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 backdrop-blur-sm transition-colors"
                    />
                    <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg font-semibold whitespace-nowrap flex items-center justify-center gap-2 group">
                        Subscribe
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
