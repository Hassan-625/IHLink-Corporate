import { Link } from 'react-router-dom';
import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  FileText, ArrowRight, ChevronRight, AlertCircle,
  Scale, Shield, CheckCircle2,
} from 'lucide-react';

const tableOfContents = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'services', title: '2. Description of Services' },
  { id: 'accounts', title: '3. User Accounts' },
  { id: 'use', title: '4. Acceptable Use' },
  { id: 'payments', title: '5. Payments & Billing' },
  { id: 'ip', title: '6. Intellectual Property' },
  { id: 'warranty', title: '7. Disclaimers & Warranties' },
  { id: 'liability', title: '8. Limitation of Liability' },
  { id: 'termination', title: '9. Account Termination' },
  { id: 'governing', title: '10. Governing Law' },
  { id: 'contact', title: '11. Contact Us' },
];

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      'These Terms and Conditions ("Terms") govern your use of the products and services provided by IHLink Co. Ltd. ("IHLink", "we", "us", or "our"), including our DataSub, SchoolPro, Consult platforms, and our corporate website.',
      'By accessing or using any of our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.',
      'These Terms are effective as of September 1, 2026, and apply to all users of our platforms, including individuals, schools, businesses, and resellers.',
    ],
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: [
      'IHLink provides the following services through its divisions:',
      '• DataSub: A digital payments platform for purchasing airtime, data, paying electricity bills, cable TV subscriptions, and other digital services. Includes a reseller program and developer API.',
      '• SchoolPro: A school management platform with student management, result processing, fee collection, attendance tracking, parent communication, and computer-based testing.',
      '• Consult: IT consulting and engineering services including web and mobile development, AI/ML solutions, cloud computing, IoT, robotics, and networking.',
      '• IHLink Host: Domain registration, web hosting and cloud server services.',
      '• IHLink Engineering: Control, robotics, instrumentation and networking services.',
      'We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.',
    ],
  },
  {
    id: 'accounts',
    title: '3. User Accounts',
    content: [
      'To use our services, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      'You must be at least 18 years old to create an account. For SchoolPro, accounts may be created by authorized school representatives on behalf of their institution.',
      'You agree to notify us immediately of any unauthorized use of your account or any other security breach. We are not liable for any losses caused by unauthorized access to your account.',
    ],
  },
  {
    id: 'use',
    title: '4. Acceptable Use',
    content: [
      'You agree not to use our services to:',
      '• Violate any applicable Nigerian or international law or regulation.',
      '• Infringe upon the intellectual property rights or privacy of others.',
      '• Upload or transmit viruses, malware, or any other malicious code.',
      '• Attempt to gain unauthorized access to our systems, user accounts, or data.',
      '• Use our platforms for fraudulent activities, money laundering, or any illegal financial transactions.',
      '• Reverse engineer, decompile, or disassemble any part of our software or platforms.',
      '• Spam, harass, or harm other users of our platforms.',
      '• Use our API in a manner that exceeds rate limits or disrupts service availability.',
      'Violation of these terms may result in immediate account suspension or termination.',
    ],
  },
  {
    id: 'payments',
    title: '5. Payments & Billing',
    content: [
      'DataSub: When you fund your wallet or make transactions, you authorize us to charge the selected payment method. All transactions are processed in Nigerian Naira (₦). Transaction fees, where applicable, are disclosed before confirmation.',
      'SchoolPro: Subscription charges follow the plan and billing cycle selected by the school. Current prices and billing options are shown before subscription confirmation. School fee collections are separate from IHLink SchoolPro subscription charges.',
      'Consult: Project fees are outlined in a separate proposal or contract agreed upon before work begins. Payment terms (milestones, deposits, final payment) are specified in the project agreement.',
      'Refunds: DataSub purchases that fail after wallet reservation are automatically reversed to the customer wallet. Transactions with an uncertain upstream result are reconciled before reversal to avoid duplicate value. Other payment disputes and refund requests are reviewed through IHLink Support according to the relevant service and payment status.',
    ],
  },
  {
    id: 'ip',
    title: '6. Intellectual Property',
    content: [
      'All content, features, and functionality of our platforms — including text, graphics, logos, software, and source code — are the exclusive property of IHLink Co. Ltd. and are protected by Nigerian and international copyright, trademark, and other intellectual property laws.',
      'For Consult projects, intellectual property rights are defined in the individual project agreement. Unless otherwise stated, custom work created for a client is transferred to the client upon full payment.',
      'You retain ownership of any content you submit to our platforms (e.g., student data, project documents). However, by submitting content, you grant us a license to use it solely for providing and improving our services.',
    ],
  },
  {
    id: 'warranty',
    title: '7. Disclaimers & Warranties',
    content: [
      'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      'We do not warrant that our services will be uninterrupted, error-free, or secure at all times. We strive for 99.9% uptime but cannot guarantee absolute availability.',
      'We are not responsible for the actions of third-party service providers (telecom operators, electricity companies, etc.) whose services we facilitate through our platforms.',
      'Transaction success depends on the availability and responsiveness of these third-party providers.',
    ],
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, IHLink Co. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.',
      'Our total liability for any claim arising from your use of our services shall not exceed the amount you have paid us in the 30 days preceding the event giving rise to the claim.',
      'We are not liable for any loss of data, revenue, or profits resulting from unauthorized access to your account, third-party service failures, or events beyond our reasonable control.',
    ],
  },
  {
    id: 'termination',
    title: '9. Account Termination',
    content: [
      'You may request account deletion through the account-deletion workflow or IHLink Support. Because one IHLink identity can be shared across multiple services, deletion is reviewed before final revocation or anonymisation. Data may be retained where necessary for legal, security, accounting, fraud-prevention, or transaction-record obligations.',
      'We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or if required by law. We may also terminate accounts that remain inactive for more than 12 months.',
      'Upon termination, any outstanding fees or balances become immediately due and payable.',
    ],
  },
  {
    id: 'governing',
    title: '10. Governing Law',
    content: [
      'These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.',
      'Any disputes arising from these Terms or your use of our services shall be resolved in the courts of Lagos State, Nigeria, unless otherwise agreed in writing.',
      'If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: [
      'If you have any questions about these Terms and Conditions, please contact us:',
      '• Use the Get in touch / Support page on the IHLink platform for legal or account enquiries.',
      '• Phone: 0814 667 6278',
    ],
  },
];

export function TermsPage() {
  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-20 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <Scale className="w-3 h-3 mr-1" /> Legal
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4 max-w-3xl">
            Terms & Conditions
          </h1>
          <p className="text-lg text-navy-100 max-w-2xl mb-4">
            The terms and conditions governing your use of IHLink products and services.
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
                    <p className="text-xs text-amber-700">These Terms may be updated periodically. Continued use of our services constitutes acceptance of updates.</p>
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

            {/* Agreement */}
            <Card padding="lg" className="bg-gradient-to-br from-royal-50 to-white border-royal-100">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">Acknowledgment</h3>
                  <p className="text-sm text-muted">By using IHLink services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                </div>
              </div>
              <Link to="/contact"><Button rightIcon={<ArrowRight className="w-4 h-4" />}>Contact Legal Team</Button></Link>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
