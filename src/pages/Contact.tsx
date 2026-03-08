import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const faqs = [
  { q: "Is Velora really free?", a: "Yes! Our free plan lets you create 1 resume with 3 templates and basic AI suggestions. Upgrade to Premium for unlimited resumes and all features." },
  { q: "Are the resumes ATS-compatible?", a: "Absolutely. All our templates are designed and tested to pass through major Applicant Tracking Systems. Our ATS score feature helps you optimize further." },
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel at any time. There are no long-term contracts. Your data remains accessible even after cancellation." },
  { q: "How does the AI content generation work?", a: "Our AI analyzes your experience, skills, and target role to generate optimized bullet points, summaries, and achievements. You can edit, rewrite, expand, or shorten any suggestion." },
  { q: "Can I use my own template design?", a: "Currently we offer 25 professionally designed templates. Custom template support is on our roadmap for Pro users." },
  { q: "Is my data secure?", a: "Yes. We use industry-standard encryption, HTTPS, and follow GDPR compliance. Your data is never shared with third parties." },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@velora.app" },
              { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
              { icon: MessageCircle, label: "Live Chat", value: "Available 9am–6pm PST" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Name</Label><Input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} /></div>
                  <div><Label>Email</Label><Input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} /></div>
                </div>
                <div><Label>Subject</Label><Input required value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} /></div>
                <div><Label>Message</Label><Textarea required rows={5} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} /></div>
                <Button type="submit" className="gap-2"><Send className="w-4 h-4" /> Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
