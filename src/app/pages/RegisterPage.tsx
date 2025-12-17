import { CheckCircle, UserPlus, FileText, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'; // Assuming these exist, otherwise use simplified Select

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted/30 py-24 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Register with Chef Zone
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our network of hospitality professionals and access exclusive job opportunities across London and nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
            Why Register with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: CheckCircle, title: 'Exclusive Jobs', desc: 'Access to premium hospitality positions' },
              { icon: UserPlus, title: 'Personal Support', desc: 'Dedicated consultant for your career' },
              { icon: Clock, title: 'Quick Process', desc: 'Fast registration and approval' },
              { icon: FileText, title: 'Free Service', desc: 'No registration fees for candidates' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="bg-card border border-border rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Start Your Registration
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" className="h-11" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" className="h-11" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-11" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+44 7000 000000" className="h-11" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Position/Role *</Label>
                <select className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select your role...</option>
                  <option>Chef</option>
                  <option>Sous Chef</option>
                  <option>Head Chef</option>
                  <option>Kitchen Porter</option>
                  <option>Waiter/Waitress</option>
                  <option>Bartender</option>
                  <option>Restaurant Manager</option>
                  <option>Front of House Staff</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <select className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select experience level...</option>
                  <option>Less than 1 year</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">Upload CV *</Label>
                <Input id="cv" type="file" accept=".pdf,.doc,.docx" className="h-11 pt-2 file:text-foreground" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="info">Additional Information</Label>
                <Textarea
                  id="info"
                  className="min-h-[120px]"
                  placeholder="Tell us about yourself, your skills, and what you are looking for..."
                />
              </div>

              <Button size="lg" className="w-full text-base h-12 bg-orange-600 hover:bg-orange-700 shadow-md">
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
