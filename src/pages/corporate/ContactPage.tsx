import { useState } from 'react';
import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';
import {
  MapPin, Phone, Mail, Clock, Send, MessageSquare,
  Building2, Sparkles, CheckCircle2,
} from 'lucide-react';
import { IHLinkContact } from '@/lib/contact';
import { QuickContact } from '@/components/QuickContact';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['IHLink Co. Ltd.', IHLinkContact.address],
    color: 'bg-royal-50 text-royal-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [IHLinkContact.phoneDisplay, 'WhatsApp available', 'Mon–Fri, 8am–6pm WAT'],
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [IHLinkContact.email],
    color: 'bg-orange-50 text-orange-600',
  },
];

const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'datasub', label: 'DataSub Support' },
  { value: 'schoolpro', label: 'SchoolPro Support' },
  { value: 'consult', label: 'Consultation Request' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'billing', label: 'Billing & Payments' },
];

const officeHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Public Holidays', hours: 'Closed' },
];

export function ContactPage() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'general', message: '' });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      showToast('error', 'Please fill all required fields');
      return;
    }
    showToast('success', 'Message sent!', 'We will get back to you within 24 hours.');
    setForm({ name: '', email: '', phone: '', subject: 'general', message: '' });
  };

  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-24 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <Sparkles className="w-3 h-3 mr-1" /> Get in Touch
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl">
            Whether you have a question about our products, need technical support, or want to discuss a project,
            our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <QuickContact className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((c, i) => (
            <Card key={i} padding="lg" hover>
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-4`}>
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-ink mb-3">{c.title}</h3>
              <div className="space-y-1">
                {c.lines.map((l, j) => (
                  <p key={j} className="text-sm text-muted">{l}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Form + Map + Hours */}
      <section className="py-8 px-6 lg:px-10 max-w-[1280px] mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-ink">Send Us a Message</h2>
                  <p className="text-xs text-muted">We typically respond within 24 hours.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name *" placeholder="e.g. Chidi Okafor" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input label="Email *" type="email" placeholder="e.g. you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input label="Phone" type="tel" placeholder="e.g. 0803 123 4567" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <Select label="Subject" options={subjects} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div className="mt-4">
                <Textarea label="Message *" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-xs text-muted">Fields marked with * are required.</p>
                <Button size="lg" onClick={handleSubmit} leftIcon={<Send className="w-4 h-4" />}>Send Message</Button>
              </div>
            </Card>
          </div>

          {/* Map + Hours */}
          <div className="space-y-6">
            {/* Live location map */}
            <Card padding="none" className="overflow-hidden">
              <div className="h-64">
                <iframe
                  title="IHLink Co. Ltd. — F13 Nassarawa Gwong, Jos"
                  src="https://www.google.com/maps?q=F13%20Nassarawa%20Gwong%20Jos%20Plateau%20State%20Nigeria&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="p-3 border-t bg-white">
                <p className="text-sm font-bold text-ink">F13 Nassarawa Gwong, Jos</p>
                <p className="text-xs text-muted">Plateau State, Nigeria</p>
              </div>
            </Card>

            {/* Office hours */}
            <Card padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-ink">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((o, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-muted">{o.day}</span>
                    <span className={`text-sm font-semibold ${o.hours === 'Closed' ? 'text-rose-500' : 'text-ink'}`}>{o.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <p className="text-xs text-emerald-700 font-semibold">Online support available 24/7</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-16 bg-surface">
        <div className="px-6 lg:px-10 max-w-[1280px] mx-auto">
          <Card padding="lg" className="bg-gradient-to-br from-royal-50 to-white border-royal-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Prefer to talk directly?</h3>
                  <p className="text-sm text-muted">Our team is available during business hours to assist you.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href={IHLinkContact.phoneHref}><Button size="lg" leftIcon={<Phone className="w-4 h-4" />}>Call Now</Button></a>
                <a href={IHLinkContact.emailHref}><Button size="lg" variant="secondary" leftIcon={<Mail className="w-4 h-4" />}>Email Us</Button></a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
