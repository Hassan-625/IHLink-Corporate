import { useState } from "react";
import { PlatformLink as Link } from "@/components/PlatformLink";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SupportTicketForm } from "@/components/SupportTicketForm";
import { QuickContact } from "@/components/QuickContact";
import { IHLinkContact } from "@/lib/contact";
import {
  Search,
  MessageSquare,
  Mail,
  Phone,
  Smartphone,
  GraduationCap,
  Wrench,
  CreditCard,
  Shield,
  ArrowRight,
  Sparkles,
  LifeBuoy,
  Clock,
  FileText,
  ChevronRight,
  Zap,
} from "lucide-react";

const helpCategories = [
  {
    name: "DataSub Support",
    desc: "Airtime, data, bills, wallet and reseller questions.",
    icon: Smartphone,
    color: "#10B981", href: "/datasub/support",
  },
  {
    name: "SchoolPro Support",
    desc: "Student management, results, fees and parent portal.",
    icon: GraduationCap,
    color: "#7C3AED", href: "/schoolpro/support",
  },
  {
    name: "Consult Support",
    desc: "Project inquiries, technical consultation and engineering.",
    icon: Wrench,
    color: "#F97316", href: "/consult/support",
  },
  {
    name: "Billing & Payments",
    desc: "Wallet funding, invoices, refunds and payment methods.",
    icon: CreditCard,
    color: "#0EA5E9", href: "/account/billing",
  },
  {
    name: "Account & Security",
    desc: "Login issues, passwords, account security and privacy.",
    icon: Shield,
    color: "#DB2777", href: "/account/security",
  },
  {
    name: "Getting Started",
    desc: "Sign up, onboarding and platform walkthroughs.",
    icon: Zap,
    color: "#1565D8", href: "/faq",
  },
];

const contactOptions = [
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    desc: "Open the IHLink WhatsApp support channel.",
    action: "Open WhatsApp",
    href: IHLinkContact.whatsappHref,
    color: "bg-royal-50 text-royal-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "hassanisahassan12@gmail.com",
    action: "Send Email",
    href: IHLinkContact.emailHref,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Phone,
    title: "Phone Support",
    desc: "0814 667 6278",
    action: "Call Now",
    href: IHLinkContact.phoneHref,
    color: "bg-orange-50 text-orange-600",
  },
];

export function SupportPage() {
  const [search, setSearch] = useState("");
  const visibleCategories = helpCategories.filter(c => !search.trim() || `${c.name} ${c.desc}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageShell product="corporate">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500/20 rounded-full blur-[120px]" />
        <div className="relative px-6 lg:px-10 pt-20 pb-20 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <LifeBuoy className="w-3 h-3 mr-1" /> Support Center
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            How Can We Help You?
          </h1>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl">
            Find answers, browse support topics, or reach out to our support
            team. We're here to help with any questions about IHLink products
            and services.
          </p>
          {/* Search bar */}
          <div className="max-w-2xl">
            <Input
              placeholder="Search support topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-5 h-5" />}
              className="text-base"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <QuickContact className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactOptions.map((c, i) => (
            <Card key={i} padding="lg" hover>
              <div
                className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-4`}
              >
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-ink mb-1">{c.title}</h3>
              <p className="text-sm text-muted mb-4">{c.desc}</p>
              <a href={c.href} target={c.href.startsWith("https://") ? "_blank" : undefined} rel={c.href.startsWith("https://") ? "noreferrer" : undefined}><Button size="sm" variant="secondary" fullWidth rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>{c.action}</Button></a>
            </Card>
          ))}
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-8 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-3">Browse by Category</Badge>
          <h2 className="text-3xl font-extrabold text-ink mb-3">
            Help Categories
          </h2>
          <p className="text-base text-muted max-w-2xl mx-auto">
            Select a category to identify the right support area, then use the ticket form or contact options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCategories.map((c, i) => (
            <Link key={i} to={c.href} className="block"><Card padding="lg" hover className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: c.color + "15", color: c.color }}
                >
                  <c.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-ink mb-1">
                    {c.name}
                  </h3>
                  <p className="text-xs text-muted mb-3">{c.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge>Support topic</Badge>
                    <ChevronRight className="w-4 h-4 text-muted group-hover:text-royal-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Card></Link>
          ))}
        </div>{search.trim() && visibleCategories.length===0 && <p className="mt-6 text-center text-sm text-muted">No support category matches your search. You can still create a central support ticket below.</p>}
      </section>

      {/* Support Hours */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hours */}
          <Card padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink">Support Hours</h3>
            </div>
            <div className="space-y-3">
              {[
                {
                  day: "Monday – Friday",
                  hours: "8:00 AM – 6:00 PM WAT",
                  available: true,
                },
                {
                  day: "Saturday",
                  hours: "9:00 AM – 2:00 PM WAT",
                  available: true,
                },
                { day: "Sunday", hours: "Closed", available: false },
              ].map((o, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted">{o.day}</span>
                  <span
                    className={`text-sm font-semibold ${o.available ? "text-ink" : "text-rose-500"}`}
                  >
                    {o.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <p className="text-xs text-emerald-700 font-semibold">You can submit an online support ticket at any time. Responses follow the published support schedule.</p>
            </div>
          </Card>

          {/* FAQ Link */}
          <Card
            padding="lg"
            className="bg-gradient-to-br from-royal-50 to-white border-royal-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink">
                Frequently Asked Questions
              </h3>
            </div>
            <p className="text-sm text-muted mb-4">
              Browse our comprehensive FAQ page for answers to common questions
              about all IHLink products and services.
            </p>
            <Link to="/faq">
              <Button size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View FAQ Page
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Card padding="lg">
            <h2 className="text-2xl font-extrabold text-ink">
              Open a central support ticket
            </h2>
            <p className="mb-6 mt-2 text-sm text-muted">
              Use one secure ticket for account, billing, platform access or
              general IHLink assistance.
            </p>
            <SupportTicketForm product="corporate" />
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-royal-700 to-brand-500 p-10 lg:p-16 text-center">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative">
            <MessageSquare className="w-10 h-10 text-white mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-base text-navy-100 mb-8 max-w-xl mx-auto">
              Our support team is ready to assist you with any questions or
              issues you may have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="xl"
                  className="bg-white text-royal-600 hover:bg-gray-100"
                >
                  Contact Support
                </Button>
              </Link>
              <Link to="/faq">
                <Button
                  size="xl"
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Browse FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
