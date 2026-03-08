import { supabase } from '@/integrations/supabase/client';

interface AIRequest {
  action: 'rewrite' | 'expand' | 'shorten' | 'summary' | 'bullet' | 'cover-letter' | 'match-keywords';
  content?: string;
  mode?: string;
  resumeData?: any;
  jobDescription?: string;
}

export async function callResumeAI(params: AIRequest): Promise<string> {
  const { data, error } = await supabase.functions.invoke('resume-ai', {
    body: params,
  });

  if (error) {
    throw new Error(error.message || 'AI request failed');
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data?.result || '';
}
