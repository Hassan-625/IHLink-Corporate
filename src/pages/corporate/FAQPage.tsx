import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Stepper';
import { Input } from '@/components/ui/Input';
import {
  Search, HelpCircle, Smartphone, GraduationCap, Wrench,
  CreditCard, Shield, MessageSquare, ArrowRight, Sparkles,
  ChevronDown,
} from 'lucide-react';

const categories = [
  { name: 'General', icon: HelpCircle, color: '#1565D8' },
  { name: 'DataSub', icon: Smartphone, color: '#10B981' },
  { name: 'SchoolPro', icon: GraduationCap, color: '#7C3AED' },
  { name: 'Consult', icon: Wrench, color: '#F97316' },
  { name: 'Billing', icon: CreditCard, color: '#0EA5E9' },
  { name: 'Security', icon: Shield, color: '#DB2777' },
];

const faqData: Record<string, { question: string; answer: string }[]> = {
  General: [
    { question: 'What is IHLink?', answer: 'IHLink Co. Ltd. is a Nigerian technology company providing digital payments, school management, IT consulting, domains and hosting, and professional engineering solutions through connected specialist divisions.' },
    { question: 'How do I create an account?', answer: 'Visit any of our product platforms (DataSub, SchoolPro, or Consult) and click "Sign Up". You\'ll need a valid email address and phone number to get started.' },
    { question: 'Which products does IHLink offer?', answer: 'We offer IHLink DataSub, IHLink SchoolPro, IHLink Consult, IHLink Host and IHLink Engineering, connected through the central IHLink company platform.' },
    { question: 'Is IHLink available outside Nigeria?', answer: 'While our primary market is Nigeria, our Consult division serves international clients remotely. DataSub and SchoolPro are currently optimized for the Nigerian market.' },
    { question: 'How can I contact IHLink support?', answer: 'Email hassanisahassan12@gmail.com, call 0814 667 6278, use the WhatsApp link, or open a ticket from the Support page.' },
    { question: 'Does IHLink have a mobile app?', answer: 'The current IHLink platforms are web applications designed for desktop and mobile browsers. Any future native-app release will be announced when it is actually available.' },
  ],
  DataSub: [
    { question: 'How does DataSub work?', answer: 'DataSub provides the website and account workflow for airtime, data, electricity, cable and related digital services. Provider-dependent transactions become executable when the relevant external provider integration is configured.' },
    { question: 'Which networks are supported?', answer: 'We support all major Nigerian networks: MTN, Airtel, Glo and T2 for airtime and data purchases.' },
    { question: 'How do I become a reseller?', answer: 'Sign up for a DataSub account, navigate to the Reseller section, and upgrade your account. Resellers get discounted rates and access to our API for integration.' },
    { question: 'How long do transactions take?', answer: 'Processing time depends on the external provider used for the selected service. The transaction status in your DataSub account is the authoritative record once provider processing is enabled.' },
    { question: 'What payment methods can I use to fund my wallet?', answer: 'Available funding methods are shown inside the DataSub wallet. Methods that depend on a payment gateway become available only when that gateway is configured.' },
    { question: 'Is there a minimum wallet balance?', answer: 'No, there is no minimum balance requirement. However, you need sufficient funds to complete any transaction.' },
  ],
  SchoolPro: [
    { question: 'What is SchoolPro?', answer: 'SchoolPro is a complete school management platform that handles student enrollment, result processing, fee collection, attendance tracking, parent communication and computer-based testing.' },
    { question: 'How much does SchoolPro cost?', answer: 'SchoolPro pricing is provided from configured plans or through an approved quotation. Submit a school onboarding or demo request for the appropriate plan.' },
    { question: 'Can parents access SchoolPro?', answer: 'Yes, SchoolPro includes a parent portal where parents can view their children\'s results, attendance, fee status and communicate with teachers.' },
    { question: 'Does SchoolPro support CBT (Computer-Based Testing)?', answer: 'Yes, SchoolPro includes a CBT module that allows schools to create and administer online exams with automated grading and instant results.' },
    { question: 'How long does onboarding take?', answer: 'Onboarding time depends on the school configuration, data migration and selected modules. The SchoolPro team confirms the schedule after reviewing the onboarding request.' },
    { question: 'Can SchoolPro handle multiple schools?', answer: 'Yes, SchoolPro supports multi-school management with centralized administration and separate dashboards for each school.' },
  ],
  Consult: [
    { question: 'What services does IHLink Consult offer?', answer: 'We offer web and mobile development, AI/ML solutions, cloud computing (AWS), IoT and embedded systems, robotics, networking and technical consultation.' },
    { question: 'How do I request a consultation?', answer: 'Visit our Contact page and select "Consultation Request" as the subject, or use the Onboarding Wizard to get a personalized recommendation.' },
    { question: 'Can IHLink Consult handle remote projects?', answer: 'Consult requests can be submitted for remote delivery. Scope, jurisdiction, communication arrangements and availability are confirmed during project review.' },
    { question: 'How is a project timeline determined?', answer: 'The timeline is determined from the approved scope, milestones, dependencies and delivery requirements. Confirmed dates are recorded in the project workflow rather than estimated on this FAQ page.' },
  ],
  Billing: [
    { question: 'What payment methods do you accept?', answer: 'Payment methods depend on the IHLink product and the payment integrations currently configured. The relevant checkout, invoice or wallet page displays the available method.' },
    { question: 'Can I request a refund?', answer: 'Where a refund is applicable, it can be reviewed through IHLink support and the internal finance workflow. Approval and settlement depend on the underlying transaction and payment provider.' },
    { question: 'Where can I see billing records?', answer: 'Signed-in customers can use Billing & Payments to review authorized payment activity associated with their IHLink account. Project and service invoices are also managed in the relevant platform workflow.' },
    { question: 'Where are charges shown?', answer: 'Configured prices, quotations, invoices and transaction amounts are shown in the relevant product workflow before an applicable payment or purchase is completed.' },
  ],
  Security: [
    { question: 'How does IHLink protect account data?', answer: 'IHLink uses authenticated access, database row-level security and HTTPS on the deployed web platform. Security controls continue to be reviewed as services and external integrations are activated.' },
    { question: 'How is my data handled?', answer: 'Data handling is governed by the IHLink Privacy Policy and the requirements of the service you use. External providers receive only the information required for an enabled integration and applicable service workflow.' },
    { question: 'How can I secure my account?', answer: 'Use a strong, unique password, enable two-factor authentication if available, and never share your login details. Contact support immediately if you suspect unauthorized access.' },
    { question: 'What should I do if I suspect fraud?', answer: 'Contact our support team immediately at hassanisahassan12@gmail.com or call 0814 667 6278. We take all fraud reports seriously and will investigate promptly.' },
  ],
};

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [search, setSearch] = useState('');

  const filteredFaqs = search.trim()
    ? Object.values(faqData).flat().filter(f =>
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        f.answer.toLowerCase().includes(search.toLowerCase())
      )
    : faqData[activeCategory];

  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-20 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <HelpCircle className="w-3 h-3 mr-1" /> Help Center
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl">
            Find answers to common questions about IHLink products and services. Can't find what you're
            looking for? Contact our support team.
          </p>
          {/* Search bar */}
          <div className="max-w-2xl">
            <Input
              placeholder="Search for answers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-5 h-5" />}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              themeClass="focus:ring-white/20 focus:border-white/40"
            />
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-12 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => { setActiveCategory(c.name); setSearch(''); }}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                activeCategory === c.name && !search
                  ? 'border-royal-500 bg-royal-50'
                  : 'border-border bg-white hover:border-royal-200'
              }`}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: c.color + '15', color: c.color }}>
                <c.icon className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-ink">{c.name}</p>
              <p className="text-2xs text-muted">Browse questions</p>
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {search && (
            <div className="mb-6">
              <Badge className="mb-2">Search Results</Badge>
              <p className="text-sm text-muted">Found {filteredFaqs.length} result(s) for "{search}"</p>
            </div>
          )}
          {!search && (
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-ink mb-2">{activeCategory} Questions</h2>
              <p className="text-sm text-muted">Browse common questions about {activeCategory.toLowerCase()}.</p>
            </div>
          )}
          <Accordion
            items={filteredFaqs.map(f => ({ question: f.question, answer: f.answer }))}
            defaultOpen={0}
          />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-surface">
        <div className="px-6 lg:px-10 max-w-[1280px] mx-auto">
          <Card padding="lg" className="max-w-3xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">Still Have Questions?</h3>
                  <p className="text-sm text-muted">Our support team is here to help you.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to="/contact"><Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>Contact Support</Button></Link>
                <Link to="/support"><Button size="lg" variant="secondary">Open Support Centre</Button></Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
