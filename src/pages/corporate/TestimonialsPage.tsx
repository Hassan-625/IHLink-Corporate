import { PageShell } from '@/components/PageShell';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MessageSquare, Sparkles } from 'lucide-react';

export function TestimonialsPage() {
  return (
    <PageShell product="corporate">
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative px-6 lg:px-10 pt-20 pb-24 max-w-[1280px] mx-auto">
          <Badge className="bg-white/10 text-white border-white/20 mb-6"><Sparkles className="w-3 h-3 mr-1" /> Customer Stories</Badge>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">Customer stories will appear here</h1>
          <p className="text-lg text-navy-100 max-w-2xl">IHLink publishes testimonials only after they have been received and approved for public use. We do not display invented customer names, ratings or performance claims.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <Card padding="lg" className="max-w-2xl mx-auto text-center">
          <MessageSquare className="w-10 h-10 text-royal-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-ink mb-2">Share Your Experience</h2>
          <p className="text-sm text-muted mb-6">If you have used an IHLink product or service, you can send your feedback for review and possible publication.</p>
          <a href="/contact"><Badge className="bg-royal-50 text-royal-700 border-royal-200 cursor-pointer">Contact IHLink</Badge></a>
        </Card>
      </section>
    </PageShell>
  );
}
