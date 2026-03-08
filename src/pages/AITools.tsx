import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Copy, RotateCcw, ArrowRight } from 'lucide-react';

const modes = [
  { id: 'formal', label: 'Formal', description: 'Professional and polished tone' },
  { id: 'concise', label: 'Concise', description: 'Brief and to the point' },
  { id: 'creative', label: 'Creative', description: 'Engaging and unique phrasing' },
  { id: 'technical', label: 'Technical', description: 'Detail-oriented and specific' },
];

const exampleOutputs: Record<string, string> = {
  formal: "Spearheaded the development and implementation of a comprehensive microservices architecture, resulting in a 40% improvement in system response times and enhanced scalability across the organization's digital infrastructure.",
  concise: "Led microservices migration → 40% faster response times, 2M+ daily users served.",
  creative: "Transformed a monolithic legacy system into a sleek microservices powerhouse — slashing response times by 40% and seamlessly serving over 2 million daily users.",
  technical: "Architected event-driven microservices using Kafka, Redis, and Kubernetes on AWS ECS. Implemented circuit breakers and service mesh (Istio), reducing p99 latency by 40% for 2M+ DAU.",
};

const AITools = () => {
  const [input, setInput] = useState("Managed development of microservices architecture for 2M+ users, improved response times by 40%");
  const [mode, setMode] = useState('formal');
  const [output, setOutput] = useState(exampleOutputs.formal);
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setOutput(exampleOutputs[mode]);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Writing Tools</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your resume content with AI-powered rewriting in multiple styles and tones.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                mode === m.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/30'
              }`}
            >
              <div className="font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-xs text-muted-foreground">{m.description}</div>
            </button>
          ))}
        </div>

        {/* Input / Output */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Your Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={8}
                placeholder="Paste your resume bullet point, summary, or achievement here..."
              />
              <Button className="mt-4 w-full gap-2" onClick={generate} disabled={isGenerating}>
                <Wand2 className="w-4 h-4" />
                {isGenerating ? 'Generating...' : `Rewrite as ${modes.find(m => m.id === mode)?.label}`}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">AI Output</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={() => navigator.clipboard.writeText(output)}>
                    <Copy className="w-3 h-3" /> Copy
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={generate}>
                    <RotateCcw className="w-3 h-3" /> Retry
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`min-h-[200px] p-4 rounded-lg bg-secondary/50 text-sm leading-relaxed ${isGenerating ? 'animate-pulse' : ''}`}>
                {output}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tools */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { title: 'Summary Generator', desc: 'Create a compelling professional summary from your experience.' },
            { title: 'Achievement Quantifier', desc: 'Add metrics and numbers to make your achievements stand out.' },
            { title: 'Cover Letter Writer', desc: 'Generate a tailored cover letter matching your resume.' },
          ].map((tool, i) => (
            <Card key={i} className="hover-lift cursor-pointer group">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <Button variant="ghost" size="sm" className="gap-1 group-hover:text-primary">
                  Try it <ArrowRight className="w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AITools;
