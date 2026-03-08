import { useState, useCallback, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sampleResume } from '@/data/sampleData';
import { getTemplateComponent } from '@/components/templates';
import { templateList } from '@/data/templates';
import { ResumeData, Experience, Education } from '@/types/resume';
import {
  Download, Wand2, Maximize2, Minimize2,
  Plus, Trash2, GripVertical, FileType, Upload, Save,
  Loader2, Target, CheckCircle, XCircle, Lightbulb
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { callResumeAI } from '@/lib/ai';

function cloneWithStyles(source: HTMLElement): HTMLElement {
  const clone = source.cloneNode(true) as HTMLElement;
  const srcAll = source.querySelectorAll('*');
  const clnAll = clone.querySelectorAll('*');
  const inlineStyles = (src: Element, cln: HTMLElement) => {
    const computed = window.getComputedStyle(src);
    for (let i = 0; i < computed.length; i++) {
      const prop = computed[i];
      cln.style.setProperty(prop, computed.getPropertyValue(prop));
    }
  };
  inlineStyles(source, clone);
  srcAll.forEach((el, i) => {
    if (clnAll[i] instanceof HTMLElement) inlineStyles(el, clnAll[i] as HTMLElement);
  });
  return clone;
}

const Builder = () => {
  const [searchParams] = useSearchParams();
  const initialTemplate = parseInt(searchParams.get('template') || '2');
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [data, setData] = useState<ResumeData>({ ...sampleResume });
  const [fullPreview, setFullPreview] = useState(false);
  const [aiLoading, setAiLoading] = useState<string | null>(null);
  const [jobDesc, setJobDesc] = useState('');
  const [keywords, setKeywords] = useState<{ matched: string[]; missing: string[]; suggestions: string[] } | null>(null);
  const [showJDPanel, setShowJDPanel] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const update = (field: keyof ResumeData, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const updateExperience = (idx: number, field: keyof Experience, value: any) => {
    const exp = [...data.experience];
    exp[idx] = { ...exp[idx], [field]: value };
    update('experience', exp);
  };

  const updateBullet = (expIdx: number, bulletIdx: number, value: string) => {
    const exp = [...data.experience];
    const bullets = [...exp[expIdx].bullets];
    bullets[bulletIdx] = value;
    exp[expIdx] = { ...exp[expIdx], bullets };
    update('experience', exp);
  };

  const addExperience = () => {
    update('experience', [...data.experience, { id: `exp-${Date.now()}`, company: '', role: '', startDate: '', endDate: '', location: '', bullets: [''] }]);
  };

  const removeExperience = (idx: number) => {
    update('experience', data.experience.filter((_, i) => i !== idx));
  };

  const addBullet = (expIdx: number) => {
    const exp = [...data.experience];
    exp[expIdx] = { ...exp[expIdx], bullets: [...exp[expIdx].bullets, ''] };
    update('experience', exp);
  };

  const updateEducation = (idx: number, field: keyof Education, value: string) => {
    const edu = [...data.education];
    edu[idx] = { ...edu[idx], [field]: value };
    update('education', edu);
  };

  const atsScore = useCallback(() => {
    let score = 0;
    if (data.name) score += 10;
    if (data.title) score += 10;
    if (data.email) score += 5;
    if (data.phone) score += 5;
    if (data.summary && data.summary.length > 50) score += 15;
    if (data.experience.length > 0) score += 15;
    if (data.experience.some(e => e.bullets.length >= 3)) score += 10;
    if (data.education.length > 0) score += 10;
    if (data.skills.length >= 5) score += 10;
    if (data.skills.length >= 10) score += 5;
    if (data.certifications && data.certifications.length > 0) score += 5;
    return Math.min(score, 100);
  }, [data]);

  const score = atsScore();
  const TemplateComp = getTemplateComponent(selectedTemplate);

  // ── AI Actions ──
  const handleAI = async (action: string, content: string, onResult: (r: string) => void) => {
    setAiLoading(action);
    try {
      const result = await callResumeAI({ action: action as any, content, resumeData: data });
      onResult(result);
      toast({ title: 'AI updated content' });
    } catch (e: any) {
      toast({ title: 'AI Error', description: e.message, variant: 'destructive' });
    } finally {
      setAiLoading(null);
    }
  };

  const handleMatchKeywords = async () => {
    if (!jobDesc.trim()) {
      toast({ title: 'Paste a job description first', variant: 'destructive' });
      return;
    }
    setAiLoading('match');
    try {
      const result = await callResumeAI({ action: 'match-keywords', jobDescription: jobDesc, resumeData: data });
      const parsed = JSON.parse(result);
      setKeywords(parsed);
    } catch (e: any) {
      toast({ title: 'AI Error', description: e.message, variant: 'destructive' });
    } finally {
      setAiLoading(null);
    }
  };

  // ── Exports ──
  const handlePrint = () => {
    const resumeEl = document.getElementById('resume-print-area');
    if (!resumeEl) return;
    const styledClone = cloneWithStyles(resumeEl);
    const printWindow = window.open('', '_blank');
    if (!printWindow) { toast({ title: 'Popup blocked', variant: 'destructive' }); return; }
    printWindow.document.write(`<!DOCTYPE html><html><head><title>${data.name} - Resume</title><style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}@page{size:A4;margin:0}@media print{body{width:210mm}}</style></head><body></body></html>`);
    printWindow.document.close();
    printWindow.document.body.appendChild(styledClone);
    setTimeout(() => { printWindow.focus(); printWindow.print(); }, 400);
  };

  const handleExportText = () => {
    const lines = [data.name, data.title, '', `${data.email} | ${data.phone} | ${data.location}`, '', 'SUMMARY', data.summary, '', 'EXPERIENCE', ...data.experience.flatMap(e => [`${e.role} — ${e.company} (${e.startDate}–${e.endDate})`, ...e.bullets.map(b => `  • ${b}`), '']), 'EDUCATION', ...data.education.map(e => `${e.degree} in ${e.field}, ${e.school} (${e.endDate})`), '', 'SKILLS', data.skills.join(', ')];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${data.name.replace(/\s+/g, '_')}_Resume.txt`; a.click();
  };

  const handleSaveJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${data.name.replace(/\s+/g, '_')}_Resume.json`; a.click();
    toast({ title: 'Resume saved' });
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target?.result as string) as ResumeData;
        if (!imported.name || !imported.experience || !imported.education || !imported.skills) throw new Error('Invalid');
        setData(imported);
        toast({ title: 'Resume imported', description: `Loaded "${imported.name}".` });
      } catch { toast({ title: 'Import failed', variant: 'destructive' }); }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <Layout>
      <div className="container py-6">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Resume Builder</h1>
            <p className="text-sm text-muted-foreground">Build your professional resume with AI assistance</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(parseInt(e.target.value))} className="h-9 rounded-md border border-input bg-background px-3 text-sm">
              {templateList.map((t) => (<option key={t.id} value={t.id}>{t.name}</option>))}
            </select>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-sm">
              <div className={`w-3 h-3 rounded-full ${score >= 80 ? 'bg-green-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} />
              ATS: {score}%
            </div>
            <input ref={fileInputRef} type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            <Button size="sm" variant="outline" onClick={() => fileInputRef.current?.click()}><Upload className="w-4 h-4 mr-1" /> Import</Button>
            <Button size="sm" variant="outline" onClick={handleSaveJSON}><Save className="w-4 h-4 mr-1" /> Save</Button>
            <Button size="sm" variant="outline" onClick={handlePrint}><Download className="w-4 h-4 mr-1" /> PDF</Button>
            <Button size="sm" variant="outline" onClick={handleExportText}><FileType className="w-4 h-4 mr-1" /> Text</Button>
            <Button size="sm" variant={showJDPanel ? 'default' : 'outline'} onClick={() => setShowJDPanel(!showJDPanel)}><Target className="w-4 h-4 mr-1" /> JD Match</Button>
          </div>
        </div>

        {/* Job Description Matching Panel */}
        {showJDPanel && (
          <Card className="mb-6 border-primary/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> Job Description Matching</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea value={jobDesc} onChange={e => setJobDesc(e.target.value)} rows={4} placeholder="Paste the job description here to analyze keyword matches..." />
              <Button onClick={handleMatchKeywords} disabled={aiLoading === 'match'} className="gap-2">
                {aiLoading === 'match' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                Analyze Keywords
              </Button>
              {keywords && (
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-green-600 flex items-center gap-1 mb-2"><CheckCircle className="w-3 h-3" /> Matched Keywords</h4>
                    <div className="flex flex-wrap gap-1">{keywords.matched.map((k, i) => <span key={i} className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs">{k}</span>)}</div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-red-600 flex items-center gap-1 mb-2"><XCircle className="w-3 h-3" /> Missing Keywords</h4>
                    <div className="flex flex-wrap gap-1">{keywords.missing.map((k, i) => <span key={i} className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-xs">{k}</span>)}</div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary flex items-center gap-1 mb-2"><Lightbulb className="w-3 h-3" /> Suggestions</h4>
                    <ul className="space-y-1">{keywords.suggestions.map((s, i) => <li key={i} className="text-xs text-muted-foreground">• {s}</li>)}</ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-2 gap-6 relative">
          {/* Left: Form */}
          {!fullPreview && (
            <div className="space-y-6 max-h-[calc(100vh-180px)] overflow-y-auto pr-2">
              <Card>
                <CardHeader className="pb-3"><CardTitle className="text-base">Personal Information</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div><Label className="text-xs">Full Name</Label><Input value={data.name} onChange={e => update('name', e.target.value)} /></div>
                    <div><Label className="text-xs">Job Title</Label><Input value={data.title} onChange={e => update('title', e.target.value)} /></div>
                    <div><Label className="text-xs">Email</Label><Input value={data.email} onChange={e => update('email', e.target.value)} /></div>
                    <div><Label className="text-xs">Phone</Label><Input value={data.phone} onChange={e => update('phone', e.target.value)} /></div>
                    <div><Label className="text-xs">Location</Label><Input value={data.location} onChange={e => update('location', e.target.value)} /></div>
                    <div><Label className="text-xs">Website</Label><Input value={data.website || ''} onChange={e => update('website', e.target.value)} /></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Professional Summary</CardTitle>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" disabled={!!aiLoading} onClick={() => handleAI('rewrite', data.summary, r => update('summary', r))}>
                        {aiLoading === 'rewrite' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />} Rewrite
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" disabled={!!aiLoading} onClick={() => handleAI('expand', data.summary, r => update('summary', r))}>
                        {aiLoading === 'expand' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Maximize2 className="w-3 h-3" />} Expand
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" disabled={!!aiLoading} onClick={() => handleAI('shorten', data.summary, r => update('summary', r))}>
                        {aiLoading === 'shorten' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Minimize2 className="w-3 h-3" />} Shorten
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea value={data.summary} onChange={e => update('summary', e.target.value)} rows={4} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Work Experience</CardTitle>
                    <Button size="sm" variant="outline" onClick={addExperience} className="h-7 text-xs gap-1"><Plus className="w-3 h-3" /> Add</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {data.experience.map((exp, i) => (
                    <div key={exp.id} className="border rounded-lg p-4 space-y-3 relative">
                      <button onClick={() => removeExperience(i)} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label className="text-xs">Company</Label><Input value={exp.company} onChange={e => updateExperience(i, 'company', e.target.value)} /></div>
                        <div><Label className="text-xs">Role</Label><Input value={exp.role} onChange={e => updateExperience(i, 'role', e.target.value)} /></div>
                        <div><Label className="text-xs">Start</Label><Input value={exp.startDate} onChange={e => updateExperience(i, 'startDate', e.target.value)} /></div>
                        <div><Label className="text-xs">End</Label><Input value={exp.endDate} onChange={e => updateExperience(i, 'endDate', e.target.value)} /></div>
                      </div>
                      <div><Label className="text-xs">Location</Label><Input value={exp.location} onChange={e => updateExperience(i, 'location', e.target.value)} /></div>
                      <div className="space-y-2">
                        <Label className="text-xs">Bullet Points</Label>
                        {exp.bullets.map((b, bi) => (
                          <div key={bi} className="flex gap-2 items-start">
                            <GripVertical className="w-4 h-4 mt-2.5 text-muted-foreground/50 shrink-0" />
                            <Input value={b} onChange={e => updateBullet(i, bi, e.target.value)} className="text-sm" />
                            <Button size="sm" variant="ghost" className="h-8 text-xs shrink-0" disabled={!!aiLoading}
                              onClick={() => handleAI('bullet', b, r => updateBullet(i, bi, r))}>
                              {aiLoading === 'bullet' ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />}
                            </Button>
                          </div>
                        ))}
                        <Button size="sm" variant="ghost" onClick={() => addBullet(i)} className="h-7 text-xs"><Plus className="w-3 h-3 mr-1" /> Add bullet</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3"><CardTitle className="text-base">Education</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {data.education.map((edu, i) => (
                    <div key={edu.id} className="border rounded-lg p-4 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label className="text-xs">School</Label><Input value={edu.school} onChange={e => updateEducation(i, 'school', e.target.value)} /></div>
                        <div><Label className="text-xs">Degree</Label><Input value={edu.degree} onChange={e => updateEducation(i, 'degree', e.target.value)} /></div>
                        <div><Label className="text-xs">Field</Label><Input value={edu.field} onChange={e => updateEducation(i, 'field', e.target.value)} /></div>
                        <div><Label className="text-xs">GPA</Label><Input value={edu.gpa || ''} onChange={e => updateEducation(i, 'gpa', e.target.value)} /></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3"><CardTitle className="text-base">Skills</CardTitle></CardHeader>
                <CardContent>
                  <Textarea value={data.skills.join(', ')} onChange={e => update('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} placeholder="React, TypeScript, Node.js..." rows={3} />
                  <p className="text-xs text-muted-foreground mt-1">Separate skills with commas</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Right: Preview */}
          <div className={`${fullPreview ? 'lg:col-span-2' : ''}`}>
            <div className="sticky top-20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">Live Preview</span>
                <Button size="sm" variant="ghost" onClick={() => setFullPreview(!fullPreview)}>
                  {fullPreview ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
              </div>
              <div id="resume-print-area" className="border rounded-lg overflow-hidden bg-white shadow-sm max-h-[calc(100vh-220px)] overflow-y-auto">
                <TemplateComp data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Builder;
