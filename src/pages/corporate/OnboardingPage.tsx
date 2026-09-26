import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Stepper } from '@/components/ui/Stepper';
import {
  Smartphone, GraduationCap, Globe, Cpu, Brain, Cloud, Wrench,
  Network, Bot, Zap, Users, Briefcase, MessageSquare, ArrowRight,
  ArrowLeft, CheckCircle2, Sparkles, Rocket, ShoppingCart,
  CreditCard, FileText, Building2,
} from 'lucide-react';

const serviceOptions = [
  { id: 'airtime', label: 'Buy Airtime / Data', icon: Smartphone, color: '#10B981', division: 'DataSub', desc: 'Purchase airtime and data bundles for all Nigerian networks.' },
  { id: 'bills', label: 'Pay Bills', icon: CreditCard, color: '#10B981', division: 'DataSub', desc: 'Pay electricity, cable TV and other utility bills.' },
  { id: 'school', label: 'Manage a School', icon: GraduationCap, color: '#7C3AED', division: 'SchoolPro', desc: 'Student management, fees, attendance and communication.' },
  { id: 'results', label: 'Process Exam Results', icon: FileText, color: '#7C3AED', division: 'SchoolPro', desc: 'Automated result processing and report card generation.' },
  { id: 'website', label: 'Build a Website', icon: Globe, color: '#F97316', division: 'Consult', desc: 'Professional website design and development.' },
  { id: 'software', label: 'Develop Custom Software', icon: Cpu, color: '#F97316', division: 'Consult', desc: 'Web apps, SaaS and custom business software.' },
  { id: 'mobile', label: 'Build a Mobile App', icon: Smartphone, color: '#F97316', division: 'Consult', desc: 'iOS and Android mobile application development.' },
  { id: 'aiml', label: 'AI / ML Solutions', icon: Brain, color: '#DB2777', division: 'Consult', desc: 'Machine learning models, NLP and computer vision.' },
  { id: 'cloud', label: 'Cloud Deployment', icon: Cloud, color: '#0EA5E9', division: 'Consult', desc: 'AWS, CI/CD, Docker and cloud infrastructure.' },
  { id: 'robotics', label: 'Robotics', icon: Bot, color: '#F59E0B', division: 'Consult', desc: 'Robotics prototypes and autonomous systems.' },
  { id: 'networking', label: 'Networking', icon: Network, color: '#22C55E', division: 'Consult', desc: 'Network design, installation and monitoring.' },
  { id: 'instrumentation', label: 'Instrumentation', icon: Wrench, color: '#F97316', division: 'Consult', desc: 'Sensors, control systems and industrial automation.' },
  { id: 'remote', label: 'Hire for Remote Work', icon: Users, color: '#1565D8', division: 'Consult', desc: 'Recruit skilled developers and engineers for remote roles.' },
  { id: 'freelancer', label: 'Hire a Freelancer', icon: Briefcase, color: '#1565D8', division: 'Consult', desc: 'On-demand freelance talent for short-term projects.' },
  { id: 'consultation', label: 'Technical Consultation', icon: MessageSquare, color: '#F97316', division: 'Consult', desc: 'Expert advice on technology strategy and architecture.' },
];

const divisionMap: Record<string, { name: string; href: string; color: string; bg: string; text: string }> = {
  DataSub: { name: 'IHLink DataSub', href: '/datasub', color: '#10B981', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  SchoolPro: { name: 'IHLink SchoolPro', href: '/schoolpro', color: '#7C3AED', bg: 'bg-purple-50', text: 'text-purple-600' },
  Consult: { name: 'IHLink Consult', href: '/consult', color: '#F97316', bg: 'bg-orange-50', text: 'text-orange-600' },
};

const steps = [
  { label: 'Your Need', description: 'What can we help with?' },
  { label: 'Your Details', description: 'Tell us about you' },
  { label: 'Recommendation', description: 'Your matched service' },
];

export function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const selectedOption = serviceOptions.find(o => o.id === selected);
  const recommendedDivision = selectedOption ? divisionMap[selectedOption.division] : null;

  const canProceed = (step: number) => {
    if (step === 0) return selected !== null;
    if (step === 1) return name.trim() !== '' && email.trim() !== '';
    return true;
  };

  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-16 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <Sparkles className="w-3 h-3 mr-1" /> Onboarding Wizard
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-3xl">
            How Can IHLink Help You?
          </h1>
          <p className="text-lg text-navy-100 max-w-2xl">
            Answer a few quick questions and we'll recommend the right IHLink product or service for your needs.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section className="py-12 px-6 lg:px-10 max-w-[1280px] mx-auto">
        {/* Stepper */}
        <div className="max-w-2xl mx-auto mb-10">
          <Stepper steps={steps} current={current} />
        </div>

        {/* Step 0: Service Selection */}
        {current === 0 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-ink mb-2">What do you need help with?</h2>
              <p className="text-sm text-muted">Select the service that best matches your requirement.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceOptions.map((opt) => {
                const isSelected = selected === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all hover:shadow-card ${
                      isSelected ? 'border-royal-500 bg-royal-50' : 'border-border bg-white hover:border-royal-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: opt.color + '15', color: opt.color }}>
                        <opt.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold text-ink">{opt.label}</h3>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-royal-500" />}
                        </div>
                        <p className="text-xs text-muted mt-1">{opt.desc}</p>
                        <Badge className={`mt-2 ${divisionMap[opt.division].bg} ${divisionMap[opt.division].text} border-transparent`}>
                          {divisionMap[opt.division].name}
                        </Badge>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end mt-8">
              <Button size="lg" disabled={!canProceed(0)} onClick={() => setCurrent(1)} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 1: Details */}
        {current === 1 && (
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-ink mb-2">Tell us about yourself</h2>
              <p className="text-sm text-muted">We'll use this to personalize your recommendation.</p>
            </div>
            <Card padding="lg">
              {selectedOption && (
                <div className="mb-6 p-4 rounded-xl bg-surface border border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: selectedOption.color + '15', color: selectedOption.color }}>
                    <selectedOption.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{selectedOption.label}</p>
                    <p className="text-xs text-muted">{selectedOption.desc}</p>
                  </div>
                </div>
              )}
              <div className="space-y-4">
                <Input label="Full Name" placeholder="e.g. Chidi Okafor" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="Email Address" type="email" placeholder="e.g. you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Phone Number (optional)" type="tel" placeholder="e.g. 0803 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </Card>
            <div className="flex justify-between mt-6">
              <Button size="lg" variant="secondary" onClick={() => setCurrent(0)} leftIcon={<ArrowLeft className="w-4 h-4" />}>Back</Button>
              <Button size="lg" disabled={!canProceed(1)} onClick={() => setCurrent(2)} rightIcon={<ArrowRight className="w-4 h-4" />}>Get Recommendation</Button>
            </div>
          </div>
        )}

        {/* Step 2: Recommendation */}
        {current === 2 && selectedOption && recommendedDivision && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-ink mb-2">Here's What We Recommend</h2>
              <p className="text-sm text-muted">Based on your selection, we recommend the following IHLink product.</p>
            </div>
            <Card padding="lg" className="border-2" >
              {/* Visual recommendation */}
              <div className="relative overflow-hidden rounded-2xl p-8 mb-6 text-center" style={{ background: `linear-gradient(135deg, ${recommendedDivision.color}, ${recommendedDivision.color}dd)` }}>
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white mx-auto mb-4">
                    <selectedOption.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-1">{recommendedDivision.name}</h3>
                  <p className="text-sm text-white/80">{selectedOption.label}</p>
                </div>
              </div>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                {name ? `Hi ${name}, ` : 'Hi, '}based on your need for <strong className="text-ink">{selectedOption.label.toLowerCase()}</strong>,
                our <strong className="text-ink">{recommendedDivision.name}</strong> platform is the perfect fit.
                {selectedOption.division === 'DataSub' && ' You can get started immediately — create an account and start transacting in minutes.'}
                {selectedOption.division === 'SchoolPro' && ' Schedule a demo with our team to see how SchoolPro can transform your school operations.'}
                {selectedOption.division === 'Consult' && ' Request a consultation and our engineering team will reach out to discuss your project.'}
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Zap, label: 'Fast Setup' },
                  { icon: Rocket, label: 'Scalable' },
                  { icon: Building2, label: 'Trusted' },
                ].map((f, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-surface border border-border">
                    <f.icon className={`w-5 h-5 mx-auto mb-1 ${recommendedDivision.text}`} />
                    <p className="text-xs font-semibold text-ink">{f.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to={recommendedDivision.href}><Button size="lg" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>Visit {recommendedDivision.name}</Button></Link>
                <Link to="/contact"><Button size="lg" variant="secondary" fullWidth>Request Consultation</Button></Link>
              </div>
            </Card>
            <div className="flex justify-center mt-6">
              <Button variant="ghost" onClick={() => { setCurrent(0); setSelected(null); setName(''); setEmail(''); setPhone(''); }}>
                Start Over
              </Button>
            </div>
          </div>
        )}
      </section>
    </PageShell>
  );
}
