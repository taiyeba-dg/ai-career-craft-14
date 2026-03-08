import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Copy, Download, Loader2, FileText } from 'lucide-react';
import { callResumeAI } from '@/lib/ai';
import { useToast } from '@/hooks/use-toast';

const CoverLetter = () => {
  const { toast } = useToast();
  const [jobDescription, setJobDescription] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = async () => {
    if (!jobDescription.trim()) {
      toast({ title: 'Missing info', description: 'Please paste a job description.', variant: 'destructive' });
      return;
    }
    setIsGenerating(true);
    try {
      const result = await callResumeAI({
        action: 'cover-letter',
        jobDescription,
        resumeData: {
          name: name || 'Applicant',
          title,
          summary: '',
          skills: skills.split(',').map(s => s.trim()).filter(Boolean),
          experience: [{ role: title, company: '', bullets: experience.split('\n').filter(Boolean) }],
        },
      });
      setOutput(result);
    } catch (e: any) {
      toast({ title: 'AI Error', description: e.message, variant: 'destructive' });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast({ title: 'Copied to clipboard!' });
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${name || 'Cover'}_Letter.txt`;
    a.click();
  };

  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            AI-Powered
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cover Letter Generator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Paste a job description and your details — AI generates a tailored, professional cover letter in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Input side */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div><Label className="text-xs">Full Name</Label><Input value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" /></div>
                  <div><Label className="text-xs">Job Title</Label><Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Software Engineer" /></div>
                </div>
                <div>
                  <Label className="text-xs">Key Skills (comma separated)</Label>
                  <Input value={skills} onChange={e => setSkills(e.target.value)} placeholder="React, Python, Leadership..." />
                </div>
                <div>
                  <Label className="text-xs">Key Experience & Achievements</Label>
                  <Textarea value={experience} onChange={e => setExperience(e.target.value)} rows={4} placeholder="Led team of 5 engineers...&#10;Increased revenue by 30%..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={jobDescription}
                  onChange={e => setJobDescription(e.target.value)}
                  rows={8}
                  placeholder="Paste the full job description here..."
                />
                <Button className="mt-4 w-full gap-2" onClick={generate} disabled={isGenerating}>
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                  {isGenerating ? 'Generating...' : 'Generate Cover Letter'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output side */}
          <Card className="h-fit sticky top-20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Your Cover Letter</CardTitle>
                {output && (
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={handleCopy}>
                      <Copy className="w-3 h-3" /> Copy
                    </Button>
                    <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={handleDownload}>
                      <Download className="w-3 h-3" /> Download
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className={`min-h-[400px] p-6 rounded-lg bg-secondary/50 text-sm leading-relaxed whitespace-pre-wrap ${isGenerating ? 'animate-pulse' : ''}`}>
                {output || (
                  <span className="text-muted-foreground italic">
                    Your AI-generated cover letter will appear here. Fill in your details and paste a job description, then click Generate.
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CoverLetter;
