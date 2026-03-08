import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Globe, Heart } from 'lucide-react';

const team = [
  { name: "Maya Johnson", role: "CEO & Co-Founder", bio: "Former Google recruiter with 10+ years in HR tech.", initials: "MJ" },
  { name: "Alex Kim", role: "CTO & Co-Founder", bio: "Ex-Meta engineer passionate about AI and career development.", initials: "AK" },
  { name: "Priya Sharma", role: "Head of AI", bio: "PhD in NLP, previously led AI teams at OpenAI.", initials: "PS" },
  { name: "Carlos Ruiz", role: "Head of Design", bio: "Award-winning designer specializing in document design.", initials: "CR" },
];

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Making professional career tools accessible to everyone, everywhere." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, honest communication, and open feedback loops." },
  { icon: Heart, title: "User-First", desc: "Every feature is built around what job seekers actually need." },
  { icon: Globe, title: "Global Impact", desc: "Supporting career growth across 50+ countries and 20+ languages." },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="container section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Velora</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            We're on a mission to democratize career success by making professional-grade resume tools accessible to everyone.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2024, Velora was born from a simple observation: talented people were losing opportunities because of poorly formatted resumes. We believe everyone deserves access to the same quality of career tools that executive coaches charge thousands for.
            </p>
            <p className="text-muted-foreground">
              By combining cutting-edge AI with beautiful design, we've helped over 100,000 professionals land interviews at top companies including Google, Amazon, Microsoft, and countless startups and agencies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "100K+", label: "Resumes Created" },
              { stat: "95%", label: "ATS Pass Rate" },
              { stat: "50+", label: "Countries" },
              { stat: "4.9★", label: "User Rating" },
            ].map((s, i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-1 font-display">{s.stat}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container section-padding">
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2 font-display">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <Card key={i} className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl font-bold font-display">
                  {m.initials}
                </div>
                <h3 className="font-semibold font-display">{m.name}</h3>
                <p className="text-sm text-primary mb-2">{m.role}</p>
                <p className="text-xs text-muted-foreground">{m.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container py-12 text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">Featured In</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 text-2xl font-bold font-display">
            {['TechCrunch', 'Forbes', 'ProductHunt', 'The Verge', 'Fast Company'].map((pub) => (
              <span key={pub}>{pub}</span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
