import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';
import {
  Sparkles, Target, FileText, Linkedin, ArrowRight, Star,
  CheckCircle, Upload, Wand2, Download, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const features = [
  { icon: Sparkles, title: "AI-Tailored Content", description: "Get personalized resume content powered by advanced AI that adapts to your industry, role, and experience level." },
  { icon: Target, title: "ATS Optimization", description: "Ensure your resume passes Applicant Tracking Systems with keyword optimization and formatting best practices." },
  { icon: FileText, title: "25+ Pro Templates", description: "Choose from industry-specific, beautifully designed templates crafted by HR professionals and designers." },
  { icon: Linkedin, title: "Cover Letter & LinkedIn", description: "Generate matching cover letters and optimize your LinkedIn profile — all from one platform." },
];

const steps = [
  { icon: Upload, title: "Input Your Info", description: "Enter your experience, skills, and career goals. Paste a job description for tailored results." },
  { icon: Wand2, title: "AI Generates Content", description: "Our AI analyzes your profile and creates optimized, ATS-friendly content with quantified achievements." },
  { icon: Download, title: "Export & Apply", description: "Choose a template, customize the design, and export as PDF, Word, or plain text. You're ready to apply!" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Product Manager at Google", quote: "Velora helped me land 3 interviews in my first week. The AI suggestions were incredibly relevant and the ATS score feature gave me confidence.", avatar: "SM", rating: 5 },
  { name: "James Rodriguez", role: "Senior Developer at Meta", quote: "The technical resume template and AI-powered bullet points perfectly highlighted my projects and achievements. Absolutely game-changing.", avatar: "JR", rating: 5 },
  { name: "Emily Chen", role: "Marketing Director", quote: "I've used dozens of resume builders. Velora is the first one that actually understands marketing metrics and tailors content accordingly.", avatar: "EC", rating: 5 },
  { name: "David Park", role: "Recent Graduate", quote: "As a new grad with limited experience, the AI helped me articulate my projects and internships in a way that impressed recruiters.", avatar: "DP", rating: 5 },
];

const Index = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container relative section-padding text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Trusted by 100,000+ professionals
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Your Resume,<br />
            <span className="text-gradient">Perfected by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in font-sans" style={{ animationDelay: '0.2s' }}>
            Craft ATS-optimized resumes with AI-powered content, premium templates, and real-time suggestions.
            Land more interviews, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/builder">
              <Button size="lg" className="text-base px-8 gap-2 hover-lift">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button size="lg" variant="outline" className="text-base px-8 hover-lift">
                See Templates
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Free forever plan</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> No credit card</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> ATS-tested</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Land Your Dream Job</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Powerful AI tools combined with premium designs to make your application stand out.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="hover-lift border-border/50 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-display">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/50">
        <div className="container section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg font-sans">Three simple steps to your perfect resume</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold font-display">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2 font-display">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Professionals</h2>
          <p className="text-muted-foreground text-lg font-sans">See what our users have to say</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                ))}
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">"{testimonials[testimonialIdx].quote}"</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {testimonials[testimonialIdx].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{testimonials[testimonialIdx].name}</div>
                  <div className="text-xs text-muted-foreground">{testimonials[testimonialIdx].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center gap-2 mt-6">
            <Button variant="outline" size="icon" onClick={() => setTestimonialIdx((p) => (p - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx ? 'bg-primary' : 'bg-border'}`} />
            ))}
            <Button variant="outline" size="icon" onClick={() => setTestimonialIdx((p) => (p + 1) % testimonials.length)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-primary">
        <div className="container section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Ready to Build Your Perfect Resume?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto font-sans">
            Join 100,000+ professionals who've landed their dream jobs with Velora.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" className="bg-primary-foreground text-foreground border-0" />
            <Button variant="secondary" className="shrink-0 font-semibold">
              Get Started Free
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
