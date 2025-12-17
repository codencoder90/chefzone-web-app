import { CheckCircle2, Upload, FileText, User, MapPin, Calendar, Phone, Mail, Shield, Briefcase, HelpCircle, PenTool, ArrowRight, Download, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { PageHero } from '../components/PageHero';

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
      </div>

      <div className="relative z-10 text-foreground">
        {/* Hero Section */}
        <PageHero
          title="Welcome to Chef Zone"
          subtitle="Join the Elite Hospitality Network"
          backgroundImage="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?q=80&w=2070&auto=format&fit=crop"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl text-gray-200 font-light mb-8">
              Quality temporary chefs at all levels required
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Whatever your skillset, whatever your level, Chef Zone is looking for true professionals to work with our diverse client base in the hospitality sector throughout London & Nationwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold">Diverse Roles</h3>
                </div>
                <p className="text-xs text-gray-300">Head Chefs, Sous Chefs, CDP, Commis & FOH.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold">Flexible Work</h3>
                </div>
                <p className="text-xs text-gray-300">Temps, Full-Time & Emergency Cover.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold">Zero Cost</h3>
                </div>
                <p className="text-xs text-gray-300">No cost to candidates. Simply register below.</p>
              </div>
            </div>
          </div>
        </PageHero>

        {/* "Get In The Zone" Process Steps */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In The Zone</h2>
              <p className="text-xl text-gray-600">With you every step of the way</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-500 to-orange-200 z-0"></div>

              {[
                { num: '01', title: 'Complete application', sub: 'form', icon: FileText },
                { num: '02', title: 'Initial interview', sub: 'arranged', icon: Phone },
                { num: '03', title: 'Prepare notes', sub: 'for interview', icon: PenTool },
                { num: '04', title: 'Chef Zone', sub: 'team member', icon: User },
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-orange-600">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-500 font-medium">{step.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Links */}
        <section className="bg-orange-50 py-12 border-y border-orange-100">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <Button variant="outline" className="h-16 px-8 text-lg border-2 border-orange-200 bg-white text-orange-700 hover:bg-orange-100 w-full md:w-auto gap-3 shadow-sm hover:-translate-y-1 transition-transform">
              <FileText className="w-6 h-6" />
              PREPARING YOUR CV
            </Button>
            <Button variant="outline" className="h-16 px-8 text-lg border-2 border-orange-200 bg-white text-orange-700 hover:bg-orange-100 w-full md:w-auto gap-3 shadow-sm hover:-translate-y-1 transition-transform">
              <Download className="w-6 h-6" />
              FREE CV TEMPLATES
            </Button>
            <Button variant="outline" className="h-16 px-8 text-lg border-2 border-orange-200 bg-white text-orange-700 hover:bg-orange-100 w-full md:w-auto gap-3 shadow-sm hover:-translate-y-1 transition-transform">
              <HelpCircle className="w-6 h-6" />
              INTERVIEW ADVICE
            </Button>
          </div>
        </section>

        {/* Main Content Grid: Form + Aside */}
        <section className="py-24" id="register-form">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

              {/* Left Column: Registration Form (Span 2) */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
                  {/* Form Header */}
                  <div className="bg-gray-900 p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
                    <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Register Here</h2>
                    <p className="text-gray-400 relative z-10">Please fill in the form below. Fields marked with * are required.</p>
                  </div>

                  <form className="p-8 md:p-12 space-y-12">

                    {/* Personal Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <User className="w-5 h-5 text-orange-600" />
                        Personal Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="First Name" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Last Name" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Address *</Label>
                          <Input id="address" placeholder="Full Address" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input id="city" placeholder="City" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="region">Region</Label>
                          <Input id="region" placeholder="Region" className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postcode">Post Code *</Label>
                          <Input id="postcode" placeholder="Post Code" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Input id="country" placeholder="Country" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="email@example.com" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" type="tel" placeholder="+44 7000 000000" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth *</Label>
                          <Input id="dob" type="date" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ni">National Insurance No.</Label>
                          <Input id="ni" placeholder="NI Number" className="h-12 bg-gray-50/50" />
                        </div>
                      </div>
                    </div>

                    {/* Job Preferences */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-orange-600" />
                        Job Preferences
                      </h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="currentJob">Your current job title *</Label>
                          <Input id="currentJob" placeholder="e.g. Head Chef" required className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="applyingFor">Jobs you are applying for and their locations (if applicable)</Label>
                          <Textarea id="applyingFor" placeholder="Roles and locations..." className="min-h-[100px] bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredLocations">Preferred locations to work</Label>
                          <Input id="preferredLocations" placeholder="e.g. Central London, Manchester" className="h-12 bg-gray-50/50" />
                        </div>
                      </div>
                    </div>

                    {/* Next of Kin */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <User className="w-5 h-5 text-orange-600" />
                        Next of Kin
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="nok">Next of Kin (Name & Phone Number) *</Label>
                        <Input id="nok" placeholder="Name - Phone Number" required className="h-12 bg-gray-50/50" />
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-orange-600" />
                        Documents & References
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors cursor-pointer group">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-orange-500" />
                          <h4 className="font-semibold text-gray-700">Right to Work</h4>
                          <p className="text-xs text-gray-500 mt-1">Drop files here or Click to select</p>
                          <Input type="file" className="hidden" id="rightToWork" />
                          <Label htmlFor="rightToWork" className="absolute inset-0 cursor-pointer"></Label>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors cursor-pointer group">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-orange-500" />
                          <h4 className="font-semibold text-gray-700">References</h4>
                          <p className="text-xs text-gray-500 mt-1">Drop files here or Click to select</p>
                          <Input type="file" className="hidden" id="references" />
                          <Label htmlFor="references" className="absolute inset-0 cursor-pointer"></Label>
                        </div>
                      </div>
                    </div>

                    {/* Health & Legal */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-orange-600" />
                        Health, Legal & Equipment
                      </h3>

                      <div className="space-y-6">
                        {/* Medical */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                          <Label className="text-base font-semibold">Do you have any Medical Conditions? *</Label>
                          <RadioGroup defaultValue="no" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="med-yes" />
                              <Label htmlFor="med-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="med-no" />
                              <Label htmlFor="med-no">No</Label>
                            </div>
                          </RadioGroup>
                          <Input placeholder="Medical Conditions (if applicable)" className="h-11 bg-white" />
                        </div>

                        {/* Convictions */}
                        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                          <Label className="text-base font-semibold">Do you have any Unspent Convictions? *</Label>
                          <RadioGroup defaultValue="no" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="conv-yes" />
                              <Label htmlFor="conv-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="conv-no" />
                              <Label htmlFor="conv-no">No</Label>
                            </div>
                          </RadioGroup>
                          <Input placeholder="Details (if applicable)" className="h-11 bg-white" />
                        </div>

                        {/* Terms */}
                        <div className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg border border-orange-100">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms" className="font-medium text-gray-900 cursor-pointer">I have read and agree to Chef Zone Terms & Key Information *</Label>
                        </div>

                        {/* Equipment Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <Label className="font-semibold block mb-3">Own uniform? *</Label>
                            <RadioGroup defaultValue="yes" className="flex gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="uniform-yes" />
                                <Label htmlFor="uniform-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="uniform-no" />
                                <Label htmlFor="uniform-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <Label className="font-semibold block mb-3">Own knife set? *</Label>
                            <RadioGroup defaultValue="yes" className="flex gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="knife-yes" />
                                <Label htmlFor="knife-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="knife-no" />
                                <Label htmlFor="knife-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <Label className="font-semibold block mb-3">Own KP safety boots? *</Label>
                            <RadioGroup defaultValue="yes" className="flex gap-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="boots-yes" />
                                <Label htmlFor="boots-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="boots-no" />
                                <Label htmlFor="boots-no">No</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CV & Final Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-orange-600" />
                        CV & Final Details
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-2 border-dashed border-orange-200 rounded-xl p-8 text-center bg-orange-50/30 hover:bg-orange-50 transition-colors cursor-pointer group">
                          <FileText className="w-10 h-10 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                          <h4 className="font-bold text-gray-900">Upload CV</h4>
                          <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                          <Input type="file" className="hidden" id="cv-upload" />
                          <Label htmlFor="cv-upload" className="absolute inset-0 cursor-pointer"></Label>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                          <User className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                          <h4 className="font-bold text-gray-900">Upload Photo (Optional)</h4>
                          <p className="text-sm text-gray-500 mt-1">Professional headshot recommended</p>
                          <Input type="file" className="hidden" id="photo-upload" />
                          <Label htmlFor="photo-upload" className="absolute inset-0 cursor-pointer"></Label>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvContent">CV Content (Only if not uploading file)</Label>
                        <Textarea id="cvContent" placeholder="Paste your CV content here..." className="min-h-[150px] bg-gray-50/50" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="socials">Your social network links (if applicable)</Label>
                          <Input id="socials" placeholder="LinkedIn, Instagram..." className="h-12 bg-gray-50/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Your website url (if applicable)</Label>
                          <Input id="website" placeholder="https://..." className="h-12 bg-gray-50/50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="interviewer">Interviewer Name *</Label>
                          <Input id="interviewer" placeholder="Use your name if filling online" required className="h-12 bg-gray-50/50" />
                          <p className="text-xs text-muted-foreground">Use your name if filling in this form online</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="signature">Candidate Signature *</Label>
                          <Input id="signature" placeholder="Type name to sign" required className="h-12 bg-gray-50/50 font-handwriting" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-8">
                      <Button size="lg" className="w-full text-lg h-16 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-xl rounded-xl transition-all font-bold tracking-wide">
                        SUBMIT APPLICATION
                      </Button>
                      <p className="text-center text-gray-400 text-sm mt-4">
                        By submitting this form, you agree to our processing of your personal data as described in our Privacy Policy.
                      </p>
                    </div>

                  </form>
                </div>
              </div>

              {/* Right Column: Aside Sidebar */}
              <aside className="space-y-8 lg:sticky lg:top-24">

                {/* Why Register Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6" />
                      Why Register?
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <BenefitItem text="Access 1000s of temporary shifts across the UK" />
                    <BenefitItem text="Get paid weekly into your bank account" />
                    <BenefitItem text="Flexible working hours to suit your lifestyle" />
                    <BenefitItem text="Work with top brands and prestigious venues" />
                    <BenefitItem text="Dedicated support team available 24/7" />
                  </div>
                </div>

                {/* Testimonial Card */}
                <div className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                  <div className="relative p-8">
                    <div className="flex gap-1 text-orange-500 mb-4">
                      {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic font-light mb-6">
                      "Registering with Chef Zone was the best career move I've made. The flexibility allowed me to travel while earning a great wage."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold text-orange-500">
                        MS
                      </div>
                      <div>
                        <div className="font-bold">Michael Stevens</div>
                        <div className="text-sm text-gray-400">Head Chef</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Help Card */}
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-orange-600">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">Having trouble with your application? Our team is here to assist.</p>
                  <a href="tel:02012345678" className="inline-block text-orange-600 font-bold hover:underline">
                    020 1234 5678
                  </a>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
