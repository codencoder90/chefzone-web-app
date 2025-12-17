import { PageHero } from '../components/PageHero';
import { CheckCircle2, Users, Target, Rocket } from 'lucide-react';

export function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="ABOUT"
                subtitle="CHEF ZONE PERFORMS"
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                align="center"
            >
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    The UK's leading hospitality staffing agency, connecting exceptional talent with outstanding venues since 2014.
                </p>
            </PageHero>

            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900">About Chef Zone</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                It's never too hot in the Chef Zone kitchen. Chef Zone excels at what we do, that's why we are the ultimate source of hospitality talent. We connect exceptional chefs and front-of-house staff with London's finest establishments and venues nationwide.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our mission is simple: to provide a seamless, high-quality staffing solution that benefits both our clients and our candidates. We believe in building long-term relationships based on trust, reliability, and excellence.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                                        <p className="text-sm text-gray-600">Recruiters with real hospitality experience</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Precision Match</h3>
                                        <p className="text-sm text-gray-600">The right candidate for the right role</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Rocket className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Fast Response</h3>
                                        <p className="text-sm text-gray-600">Staff available within hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Quality Guaranteed</h3>
                                        <p className="text-sm text-gray-600">Vetted and verified professionals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-600 rounded-3xl rotate-3 opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Chef Zone Team"
                                className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
