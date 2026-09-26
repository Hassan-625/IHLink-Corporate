import { Link } from 'react-router-dom';
import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Stepper';

import {
  Target, Eye, Heart, Shield, Zap, Users, TrendingUp, Award,
  Cpu, Globe, Brain, Cloud, Network, Wrench, Smartphone,
  GraduationCap, ArrowRight, Sparkles, Building2,
} from 'lucide-react';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with honesty and transparency in every transaction and project.', color: 'bg-emerald-50 text-emerald-600' },
  { icon: Zap, title: 'Excellence', desc: 'We pursue quality in every detail, from code to customer service.', color: 'bg-amber-50 text-amber-600' },
  { icon: Users, title: 'Customer-First', desc: 'Our customers are at the center of everything we build and deliver.', color: 'bg-royal-50 text-royal-600' },
  { icon: TrendingUp, title: 'Innovation', desc: 'We embrace new technologies to solve real-world African challenges.', color: 'bg-purple-50 text-purple-600' },
  { icon: Award, title: 'Accountability', desc: 'We take ownership of our work and deliver on our promises.', color: 'bg-orange-50 text-orange-600' },
  { icon: Cpu, title: 'Technology-Driven', desc: 'We leverage the best tools and engineering practices in every solution.', color: 'bg-sky-50 text-sky-600' },
];

const techExpertise = [
  { name: 'Digital Payments', icon: Smartphone, color: '#10B981' },
  { name: 'School Management', icon: GraduationCap, color: '#7C3AED' },
  { name: 'Web Development', icon: Globe, color: '#1565D8' },
  { name: 'AI & Machine Learning', icon: Brain, color: '#F97316' },
  { name: 'Cloud Computing', icon: Cloud, color: '#0EA5E9' },
  { name: 'IoT & Embedded Systems', icon: Cpu, color: '#DB2777' },
  { name: 'Networking', icon: Network, color: '#22C55E' },
  { name: 'Robotics & Control', icon: Wrench, color: '#F97316' },
];

const industries = [
  { name: 'Education', desc: 'School management, result processing, CBT and parent communication.', icon: GraduationCap, color: '#7C3AED' },
  { name: 'Fintech', desc: 'VTU, bill payments, wallet systems and reseller platforms.', icon: Smartphone, color: '#10B981' },
  { name: 'Agriculture', desc: 'IoT monitoring, ML crop prediction and smart farming solutions.', icon: TrendingUp, color: '#22C55E' },
  { name: 'Energy', desc: 'Smart energy management and industrial IoT systems.', icon: Zap, color: '#F59E0B' },
  { name: 'Manufacturing', desc: 'Control systems, robotics and process automation.', icon: Cpu, color: '#DB2777' },
  { name: 'Retail & Trade', desc: 'E-commerce, inventory and cloud-hosted business apps.', icon: Globe, color: '#1565D8' },
  { name: 'Research & Academia', desc: 'Robotics prototypes and engineering research support.', icon: Wrench, color: '#F97316' },
  { name: 'Telecommunications', desc: 'Network monitoring and VTU API integrations.', icon: Network, color: '#0EA5E9' },
];

export function AboutPage() {
  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-24 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <Sparkles className="w-3 h-3 mr-1" /> Our Story
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Building Africa's Technology Future, One Solution at a Time
          </h1>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl">
            IHLink Co. Ltd. is a Nigerian technology company with a mission to deliver
            practical, reliable and innovative technology solutions across digital payments, education,
            software engineering and computer engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact"><Button size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>Work With Us</Button></Link>
            <Link to="/services"><Button size="xl" variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">Our Services</Button></Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card padding="lg" className="bg-gradient-to-br from-royal-50 to-white border-royal-100">
            <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-ink mb-3">Our Mission</h2>
            <p className="text-base text-muted leading-relaxed">
              To empower individuals, schools and businesses across Nigeria and beyond with accessible,
              reliable and innovative technology solutions that solve real problems and create real value.
              We build products that work for Africa.
            </p>
          </Card>
          <Card padding="lg" className="bg-gradient-to-br from-brand-50 to-white border-brand-100">
            <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-ink mb-3">Our Vision</h2>
            <p className="text-base text-muted leading-relaxed">
              To be Africa's most trusted technology company, recognized for delivering excellence across
              digital payments, education technology, software engineering and computer engineering —
              all under one roof.
            </p>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="px-6 lg:px-10 max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <Badge className="mb-3">Our Values</Badge>
            <h2 className="text-3xl font-extrabold text-ink mb-3">What We Stand For</h2>
            <p className="text-base text-muted max-w-2xl mx-auto">The principles that guide every decision we make and every product we build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <Card key={i} padding="lg" hover>
                <div className={`w-11 h-11 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-ink mb-1">{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Leadership */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-10"><Badge className="mb-3">Leadership</Badge><h2 className="text-3xl font-extrabold text-ink mb-3">Founder-led technology company</h2><p className="text-base text-muted max-w-2xl mx-auto">IHLink is currently founder-led. Additional leadership profiles will be published only when formally appointed.</p></div>
        <Card padding="lg" className="max-w-xl mx-auto text-center"><Avatar name="Isah Hassan Hassan" size="xl" className="mx-auto mb-4" /><h3 className="text-base font-bold text-ink mb-1">Isah Hassan Hassan</h3><p className="text-sm text-royal-600 font-semibold mb-3">Founder & Managing Director/CEO</p><p className="text-xs text-muted leading-relaxed">Computer engineering and technology practitioner building IHLink's software, digital-service and engineering platforms.</p></Card>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-surface"><div className="px-6 lg:px-10 max-w-[1280px] mx-auto"><div className="text-center mb-10"><Badge className="mb-3">Our Journey</Badge><h2 className="text-3xl font-extrabold text-ink mb-3">Building the IHLink platform</h2><p className="text-base text-muted max-w-2xl mx-auto">IHLink is developing a connected portfolio spanning digital services, school technology, consulting, engineering, domains and hosting. Verified public milestones will be added as the company grows.</p></div></div></section>

      {/* Technology Expertise */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-3">Technology Expertise</Badge>
          <h2 className="text-3xl font-extrabold text-ink mb-3">Engineering Across the Spectrum</h2>
          <p className="text-base text-muted max-w-2xl mx-auto">From software to hardware, our team covers the full technology stack.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {techExpertise.map((t, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white hover:shadow-card transition-all">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: t.color + '15', color: t.color }}>
                <t.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-ink">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-surface">
        <div className="px-6 lg:px-10 max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <Badge className="mb-3">Industries We Serve</Badge>
            <h2 className="text-3xl font-extrabold text-ink mb-3">Solutions for Every Sector</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Card key={i} padding="lg" hover>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: ind.color + '15', color: ind.color }}>
                  <ind.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-ink mb-1">{ind.name}</h3>
                <p className="text-xs text-muted">{ind.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-royal-700 to-brand-500 p-10 lg:p-16 text-center">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative">
            <Heart className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Let's Build Something Together</h2>
            <p className="text-base text-navy-100 mb-8 max-w-xl mx-auto">Whether you need a digital payment platform, a school management system, or a custom engineering solution, we're ready to help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"><Button size="xl" className="bg-white text-royal-600 hover:bg-gray-100">Get in Touch</Button></Link>
              <Link to="/onboarding"><Button size="xl" variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">Get Started</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
