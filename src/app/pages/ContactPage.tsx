import { PageHero } from '../components/PageHero';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

export function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="CONTACT"
                subtitle="CHEF ZONE NATIONWIDE"
                backgroundImage="https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=2013&auto=format&fit=crop" // Stadium/Arena feel
                align="center"
            />

            {/* Branch Locations Grid (from reference image idea) */}
            <section className="-mt-16 relative z-20 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['LONDON', 'LIVERPOOL', 'MANCHESTER', 'BRISTOL', 'BRIGHTON', 'DORSET'].map((city) => (
                            <div key={city} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 group cursor-pointer h-32 flex items-center justify-center rounded-xl shadow-lg">
                                <span className="text-white font-bold text-lg tracking-wider group-hover:scale-110 transition-transform">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                <p className="text-gray-600 text-lg">
                                    Have questions or need assistance? Our team is available 24/7 to support your staffing needs.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0 border border-gray-100">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                                        <p className="text-gray-600 mb-2">24/7 Support Line</p>
                                        <a href="tel:02012345678" className="text-xl font-bold text-orange-600 hover:underline">020 1234 5678</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0 border border-gray-100">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                                        <p className="text-gray-600 mb-2">General Enquiries</p>
                                        <a href="mailto:hello@chefzone.com" className="text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors">hello@chefzone.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0 border border-gray-100">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Head Office</h3>
                                        <p className="text-gray-600">123 Hospitality Lane<br />Covent Garden, London<br />WC2H 9JQ</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 flex-shrink-0 border border-gray-100">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Opening Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 8am - 8pm<br />Saturday - Sunday: 9am - 5pm<br />Emergencies: 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-gray-50 border-gray-200" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" type="tel" placeholder="+44 7000 000000" className="h-12 bg-gray-50 border-gray-200" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" placeholder="Recruitment / Sales / Other" className="h-12 bg-gray-50 border-gray-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-gray-50 border-gray-200" />
                                    </div>
                                    <Button className="w-full md:w-auto h-14 px-8 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
