import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Check, Sparkles, Zap, Building } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Sparkles,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for getting started',
    features: ['1 resume', '3 templates', 'Basic AI suggestions', 'PDF export', 'ATS score check'],
    notIncluded: ['Unlimited resumes', 'All 25 templates', 'Advanced AI rewriting', 'Cover letter generator', 'LinkedIn optimizer', 'Priority support'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Premium',
    icon: Zap,
    monthlyPrice: 9.99,
    yearlyPrice: 7.99,
    description: 'Most popular for job seekers',
    features: ['Unlimited resumes', 'All 25 templates', 'Advanced AI rewriting', 'Cover letter generator', 'PDF, Word, Text export', 'ATS optimization', 'LinkedIn optimizer'],
    notIncluded: ['Team management', 'API access', 'Custom branding'],
    cta: 'Get Premium',
    popular: true,
  },
  {
    name: 'Pro',
    icon: Building,
    monthlyPrice: 19.99,
    yearlyPrice: 15.99,
    description: 'For teams and enterprises',
    features: ['Everything in Premium', 'Team management', 'Custom branding', 'API access', 'Bulk resume creation', 'Advanced analytics', 'Priority support', 'Dedicated account manager'],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!yearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch checked={yearly} onCheckedChange={setYearly} />
            <span className={`text-sm font-medium ${yearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-xs text-primary font-semibold ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary ring-2 ring-primary/20 shadow-lg' : 'border-border/50'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <plan.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">${yearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  {plan.monthlyPrice > 0 && <span className="text-muted-foreground text-sm">/month</span>}
                </div>
                <Button className={`w-full mb-6 ${plan.popular ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                  {plan.cta}
                </Button>
                <ul className="space-y-2.5 text-left text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                  {plan.notIncluded.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground/50">
                      <Check className="w-4 h-4 shrink-0 opacity-30" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
