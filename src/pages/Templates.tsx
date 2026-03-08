import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { templateList } from '@/data/templates';
import { sampleResume } from '@/data/sampleData';
import { getTemplateComponent } from '@/components/templates';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = ['all', 'classic', 'modern', 'creative', 'technical', 'executive'] as const;
const levels = ['all', 'entry', 'mid', 'senior', 'executive'] as const;

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [previewId, setPreviewId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return templateList.filter((t) => {
      if (selectedCategory !== 'all' && t.category !== selectedCategory) return false;
      if (selectedLevel !== 'all' && t.level !== selectedLevel) return false;
      if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.tags.some(tag => tag.includes(search.toLowerCase()))) return false;
      return true;
    });
  }, [selectedCategory, selectedLevel, search]);

  const previewTemplate = previewId ? templateList.find(t => t.id === previewId) : null;

  return (
    <Layout>
      <section className="container section-padding">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume Templates</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            25 professionally designed, ATS-optimized templates for every industry and career level.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button
                key={c}
                variant={selectedCategory === c ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(c)}
                className="capitalize"
              >
                {c === 'all' ? 'All Styles' : c}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 w-52"
              />
            </div>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm"
            >
              {levels.map((l) => (
                <option key={l} value={l}>{l === 'all' ? 'All Levels' : l.charAt(0).toUpperCase() + l.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((t) => {
            const TemplateComp = getTemplateComponent(t.id);
            return (
              <Card key={t.id} className="group hover-lift overflow-hidden cursor-pointer border-border/50">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
                  <div className="absolute inset-0 p-3 transform scale-[0.35] origin-top-left w-[286%] h-[286%]">
                    <div className="bg-background rounded shadow-sm h-full overflow-hidden">
                      <TemplateComp data={sampleResume} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => setPreviewId(t.id)}>
                        <Eye className="w-4 h-4 mr-1" /> Preview
                      </Button>
                      <Link to={`/builder?template=${t.id}`}>
                        <Button size="sm">Use Template</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm">{t.name}</h3>
                    <span className="text-xs capitalize px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{t.category}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{t.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No templates match your filters.</p>
            <Button variant="link" onClick={() => { setSelectedCategory('all'); setSelectedLevel('all'); setSearch(''); }}>
              Clear filters
            </Button>
          </div>
        )}
      </section>

      {/* Preview Modal */}
      <Dialog open={!!previewId} onOpenChange={() => setPreviewId(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{previewTemplate?.name}</DialogTitle>
          </DialogHeader>
          {previewId && (() => {
            const Comp = getTemplateComponent(previewId);
            return (
              <div className="border rounded-lg overflow-hidden bg-background">
                <Comp data={sampleResume} />
              </div>
            );
          })()}
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setPreviewId(null)}>Close</Button>
            <Link to={`/builder?template=${previewId}`}>
              <Button className="gap-1">Use This Template <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Templates;
