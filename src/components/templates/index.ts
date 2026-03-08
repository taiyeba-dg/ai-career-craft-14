import { ResumeData } from '@/types/resume';
import { FC } from 'react';

// Template component type
export type TemplateComponent = FC<{ data: ResumeData }>;

// Import all template groups
import { classicTemplates } from './ClassicTemplates';
import { modernTemplates } from './ModernTemplates';
import { creativeTemplates } from './CreativeTemplates';
import { technicalTemplates } from './TechnicalTemplates';
import { executiveTemplates } from './ExecutiveTemplates';

const allTemplates: Record<number, TemplateComponent> = {
  ...classicTemplates,
  ...modernTemplates,
  ...creativeTemplates,
  ...technicalTemplates,
  ...executiveTemplates,
};

export function getTemplateComponent(id: number): TemplateComponent {
  return allTemplates[id] || allTemplates[1];
}
