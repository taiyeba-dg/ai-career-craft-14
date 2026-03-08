import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Heart, Github, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  'Unlimited resumes',
  'All 25+ templates',
  'AI-powered content generation',
  'Cover letter generator',
  'PDF & text export',
  'ATS optimization & scoring',
  'LinkedIn profile optimizer',
  'Real-time live preview',
  'No account required',
  'No watermarks',
];

const Pricing = () => {
  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Open Source & Free
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free for Everyone</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Velora is open source and completely free to use. No paywalls, no premium tiers, no hidden fees — just powerful career tools for everyone.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="border-primary ring-2 ring-primary/20 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Forever Free
            </div>
            <CardHeader className="text-center pb-2">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                <Star className="w-7 h-7" />
              </div>
              <CardTitle className="text-2xl">Everything Included</CardTitle>
              <p className="text-sm text-muted-foreground font-sans">All features, no restrictions</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-bold font-display">$0</span>
                <span className="text-muted-foreground text-sm ml-1">forever</span>
              </div>
              <Link to="/builder">
                <Button className="w-full mb-6" size="lg">
                  Start Building — It's Free
                </Button>
              </Link>
              <ul className="space-y-3 text-left text-sm">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Open Source CTA */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Built in the Open</h2>
          <p className="text-muted-foreground mb-6 font-sans">
            Velora is open source. Contribute, fork, or self-host — it's yours. We believe career tools should be accessible to everyone, everywhere.
          </p>
          <Button variant="outline" className="gap-2" size="lg">
            <Github className="w-5 h-5" />
            View on GitHub
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
