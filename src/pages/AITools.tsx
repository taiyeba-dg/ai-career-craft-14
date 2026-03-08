import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Copy, RotateCcw, ArrowRight, Loader2 } from 'lucide-react';
import { callResumeAI } from '@/lib/ai';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const modes = [
  { id: 'formal', label: 'Formal', description: 'Professional and polished tone' },
  { id: 'concise', label: 'Concise', description: 'Brief and to the point' },
  { id: 'creative', label: 'Creative', description: 'Engaging and unique phrasing' },
  { id: 'technical', label: 'Technical', description: 'Detail-oriented and specific' },
];

const AITools = () => {
  const [input, setInput] = useState("Managed development of microservices architecture for 2M+ users, improved response times by 40%");
  const [mode, setMode] = useState('formal');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generate = async () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    try {
      const result = await callResumeAI({ action: 'rewrite', content: input, mode });
      setOutput(result);
    } catch (e: any) {
      toast({ title: 'AI Error', description: e.message, variant: 'destructive' });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Writing Tools</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
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
                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                {isGenerating ? 'Generating...' : `Rewrite as ${modes.find(m => m.id === mode)?.label}`}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">AI Output</CardTitle>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={() => { navigator.clipboard.writeText(output); toast({ title: 'Copied!' }); }} disabled={!output}>
                    <Copy className="w-3 h-3" /> Copy
                  </Button>
                  <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={generate} disabled={isGenerating}>
                    <RotateCcw className="w-3 h-3" /> Retry
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`min-h-[200px] p-4 rounded-lg bg-secondary/50 text-sm leading-relaxed ${isGenerating ? 'animate-pulse' : ''}`}>
                {output || <span className="text-muted-foreground italic">AI output will appear here after you click generate...</span>}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tools */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { title: 'Summary Generator', desc: 'Create a compelling professional summary from your experience.', link: '/builder' },
            { title: 'Achievement Quantifier', desc: 'Add metrics and numbers to make your achievements stand out.', link: '/builder' },
            { title: 'Cover Letter Writer', desc: 'Generate a tailored cover letter matching your resume.', link: '/cover-letter' },
          ].map((tool, i) => (
            <Link to={tool.link} key={i}>
              <Card className="hover-lift cursor-pointer group h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 font-display">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                  <Button variant="ghost" size="sm" className="gap-1 group-hover:text-primary">
                    Try it <ArrowRight className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AITools;
