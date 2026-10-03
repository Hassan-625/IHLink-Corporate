import { Link } from 'react-router-dom';
import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Shield, FileText, ArrowRight, ChevronRight, Sparkles,
  Lock, User, Database, Cookie, Mail, AlertCircle,
} from 'lucide-react';

const tableOfContents = [
  { id: 'intro', title: '1. Introduction', icon: FileText },
  { id: 'data', title: '2. Information We Collect', icon: Database },
  { id: 'use', title: '3. How We Use Your Information', icon: Sparkles },
  { id: 'share', title: '4. How We Share Your Information', icon: User },
  { id: 'cookies', title: '5. Cookies & Tracking', icon: Cookie },
  { id: 'security', title: '6. Data Security', icon: Lock },
  { id: 'rights', title: '7. Your Rights', icon: Shield },
  { id: 'contact', title: '8. Contact Us', icon: Mail },
];

const sections = [
  {
    id: 'intro',
    title: '1. Introduction',
    content: [
      'IHLink Co. Ltd. ("IHLink", "we", "us", or "our") is a Nigerian technology company providing digital payment, school management, and IT consulting services. We are committed to protecting your privacy and ensuring the security of your personal information.',
      'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products and services, including IHLink DataSub, IHLink SchoolPro, IHLink Consult, and our corporate website.',
      'By using our services, you agree to the collection and use of information in accordance with this policy. This policy is effective as of September 1, 2026.',
    ],
  },
  {
    id: 'data',
    title: '2. Information We Collect',
    content: [
      'We collect information that you provide directly to us when you create an account, make transactions, or contact our support team. This includes:',
      '• Personal Information: Full name, email address, phone number, and date of birth.',
      '• Transaction Information: Payment history, wallet balance, beneficiary details, and transaction references.',
      '• School Information (SchoolPro): Student records, academic results, fee payment records, and parent contact details.',
      '• Technical Information: IP address, device type, browser type, and usage data collected automatically when you use our platforms.',
      '• Project Information (Consult): Project requirements, business documents, and communication records shared during consultations.',
    ],
  },
  {
    id: 'use',
    title: '3. How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      '• To provide and maintain our services, including processing transactions and delivering products.',
      '• To communicate with you about your account, transactions, and service updates.',
      '• To process payments and manage wallet balances across our platforms.',
      '• To provide customer support and respond to your inquiries.',
      '• To detect, prevent, and address technical issues, fraud, and security concerns.',
      '• To improve our products, services, and user experience.',
      '• To comply with legal obligations and regulatory requirements in Nigeria.',
    ],
  },
  {
    id: 'share',
    title: '4. How We Share Your Information',
    content: [
      'We do not sell your personal information. We may share your information in the following circumstances:',
      '• Service Providers: We share transaction data with telecom operators, electricity companies, and cable TV providers to fulfill your purchase requests.',
      '• Payment Processors: We share payment information with our payment partners (banks, card processors) to complete transactions.',
      '• Legal Compliance: We may disclose information if required by law, court order, or government regulation.',
      '• Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.',
      '• With Your Consent: We may share information with third parties when you give us explicit consent to do so.',
    ],
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking Technologies',
    content: [
      'We use cookies and similar tracking technologies to enhance your experience on our platforms. Cookies are small data files stored on your device that help us:',
      '• Remember your preferences and login session.',
      '• Analyze how you use our services to improve functionality.',
      '• Monitor and prevent fraudulent activity.',
      'You can control cookies through your browser settings. However, disabling cookies may affect some features of our platforms.',
    ],
  },
  {
    id: 'security',
    title: '6. Data Security',
    content: [
      'We implement industry-standard security measures to protect your personal information, including:',
      '• SSL/TLS encryption for all data transmitted between your device and our servers.',
      '• Secure cloud infrastructure with regular security audits and penetration testing.',
      '• Access controls that limit information access to authorized personnel only.',
      '• Database access controls, audit mechanisms, and recovery procedures appropriate to the infrastructure currently in use.',
      '• Continuous monitoring for suspicious activity and potential threats.',
      'While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but we are committed to implementing the best available protections.',
    ],
  },
  {
    id: 'rights',
    title: '7. Your Rights',
    content: [
      'Under the Nigeria Data Protection Act (NDPA) and applicable regulations, you have the following rights regarding your personal data:',
      '• Right to Access: You can request a copy of the personal information we hold about you.',
      '• Right to Rectification: You can request correction of inaccurate or incomplete information.',
      '• Right to Erasure: You can request deletion of your personal information, subject to legal requirements.',
      '• Right to Data Portability: You can request your data in a structured, machine-readable format.',
      '• Right to Object: You can object to the processing of your data for specific purposes.',
      '• Right to Withdraw Consent: You can withdraw consent for data processing at any time.',
      'To exercise any of these rights, please use the Get in touch / Support page on the IHLink platform.',
    ],
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:',
      '• Use the Get in touch / Support page on the IHLink platform for privacy requests.',
      '• Phone: 0814 667 6278',
      'We will handle privacy requests in accordance with applicable requirements and the nature of the request.',
    ],
  },
];

export function PrivacyPage() {
  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-20 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <Shield className="w-3 h-3 mr-1" /> Legal
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-3xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-navy-100 max-w-2xl mb-4">
            How IHLink collects, uses and protects your personal information.
          </p>
          <Badge className="bg-white/10 text-white border-white/20">Effective Date: September 1, 2026</Badge>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <Card padding="lg">
                <h3 className="text-sm font-bold text-ink mb-4">Table of Contents</h3>
                <div className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-royal-600 hover:bg-royal-50 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700">This policy may be updated from time to time. We will notify you of significant changes.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sections */}
          <div className="lg:col-span-8 space-y-8">
            {sections.map((s) => (
              <div key={s.id} id={s.id}>
                <Card padding="lg">
                  <h2 className="text-xl font-extrabold text-ink mb-4">{s.title}</h2>
                  <div className="space-y-3">
                    {s.content.map((p, j) => (
                      <p key={j} className="text-sm text-muted leading-relaxed">{p}</p>
                    ))}
                  </div>
                </Card>
              </div>
            ))}

            {/* Back to top / contact */}
            <Card padding="lg" className="bg-gradient-to-br from-royal-50 to-white border-royal-100">
              <h3 className="text-lg font-bold text-ink mb-2">Questions About Your Privacy?</h3>
              <p className="text-sm text-muted mb-4">If you have any concerns about how we handle your data, we're here to help.</p>
              <Link to="/contact"><Button rightIcon={<ArrowRight className="w-4 h-4" />}>Contact Our Privacy Team</Button></Link>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
