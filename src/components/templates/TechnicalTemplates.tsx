import { ResumeData } from '@/types/resume';
import { TemplateComponent } from './index';

// Template 3: Technical / Developer
const Template3: TemplateComponent = ({ data }) => (
  <div className="p-8 text-[11px]" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
    <div className="pb-4 mb-4 border-b-2" style={{ borderColor: '#00b4d8' }}>
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p style={{ color: '#00b4d8' }}>{data.title}</p>
      <div className="flex gap-3 text-[10px] text-gray-500 mt-2">
        {data.email} | {data.phone} | {data.location}
        {data.github && <span>| {data.github}</span>}
      </div>
    </div>
    {data.summary && <p className="text-gray-600 mb-4 text-xs">{data.summary}</p>}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#00b4d8' }}>Tech Stack</h2>
      <div className="flex flex-wrap gap-1">{data.skills.map((s, i) => <code key={i} className="px-2 py-0.5 rounded text-[10px] bg-gray-100 text-gray-800">{s}</code>)}</div>
    </div>
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#00b4d8' }}>Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i} className="flex gap-2"><span className="text-gray-400">$</span>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    {data.projects && (
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#00b4d8' }}>Projects</h2>
        {data.projects.map((p) => (
          <div key={p.id} className="mb-2 p-2 bg-gray-50 rounded">
            <div className="flex justify-between"><strong>{p.name}</strong>{p.link && <span className="text-[10px]" style={{ color: '#00b4d8' }}>{p.link}</span>}</div>
            <p className="text-gray-600 text-[10px]">{p.description}</p>
            <div className="flex gap-1 mt-1">{p.technologies.map((t, i) => <code key={i} className="text-[9px] px-1 bg-gray-200 rounded">{t}</code>)}</div>
          </div>
        ))}
      </div>
    )}
    <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#00b4d8' }}>Education</h2>
      {data.education.map((edu) => <div key={edu.id}>{edu.degree} in {edu.field} — {edu.school} ({edu.endDate})</div>)}</div>
  </div>
);

// Template 13: Technical Sidebar with Projects
const Template13: TemplateComponent = ({ data }) => (
  <div className="flex text-[11px]" style={{ fontFamily: "'Courier New', monospace" }}>
    <div className="w-1/3 p-5 text-white" style={{ backgroundColor: '#0a192f' }}>
      <h2 className="text-[10px] uppercase tracking-wider opacity-50 mb-2">Contact</h2>
      <div className="space-y-1 text-[10px] opacity-80 mb-5"><div>{data.email}</div><div>{data.phone}</div><div>{data.location}</div>
        {data.github && <div>{data.github}</div>}
        {data.website && <div>{data.website}</div>}</div>
      <h2 className="text-[10px] uppercase tracking-wider opacity-50 mb-2">Languages & Tools</h2>
      <div className="space-y-1 mb-5">{data.skills.map((s, i) => (
        <div key={i} className="text-[10px] flex items-center gap-2">
          <span className="opacity-50">›</span> {s}
        </div>
      ))}</div>
      {data.certifications && (
        <><h2 className="text-[10px] uppercase tracking-wider opacity-50 mb-2">Certs</h2>
        <ul className="space-y-1 text-[10px] opacity-80">{data.certifications.map((c, i) => <li key={i}>{c}</li>)}</ul></>
      )}
    </div>
    <div className="w-2/3 p-5">
      <h1 className="text-2xl font-bold mb-0.5">{data.name}</h1>
      <p className="mb-4" style={{ color: '#64ffda' }}>{data.title}</p>
      {data.summary && <p className="text-gray-600 mb-4 text-xs">{data.summary}</p>}
      {data.projects && (
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#64ffda' }}>Projects</h2>
          {data.projects.map((p) => (
            <div key={p.id} className="mb-2 pl-3 border-l-2" style={{ borderColor: '#64ffda' }}>
              <strong>{p.name}</strong><p className="text-gray-500 text-[10px]">{p.description}</p>
            </div>
          ))}
        </div>
      )}
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#64ffda' }}>Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
      <h2 className="text-xs font-bold uppercase mb-2 mt-4" style={{ color: '#64ffda' }}>Education</h2>
      {data.education.map((edu) => <div key={edu.id}>{edu.degree}, {edu.school}</div>)}
    </div>
  </div>
);

// Template 21: Engineering / Product Management
const Template21: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="pb-4 mb-4" style={{ borderBottom: '3px solid #0984e3' }}>
      <div className="flex justify-between items-end">
        <div><h1 className="text-2xl font-bold">{data.name}</h1><p style={{ color: '#0984e3' }}>{data.title}</p></div>
        <div className="text-right text-[10px] text-gray-500"><div>{data.email}</div><div>{data.phone}</div><div>{data.location}</div></div>
      </div>
    </div>
    {data.summary && <p className="text-gray-700 mb-4">{data.summary}</p>}
    <div className="grid grid-cols-3 gap-1 mb-4">{data.skills.map((s, i) => <div key={i} className="text-center py-1 rounded text-[10px]" style={{ backgroundColor: '#ebf5fb', color: '#0984e3' }}>{s}</div>)}</div>
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0984e3' }}>Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>▸ {b}</li>)}</ul>
        </div>
      ))}
    </div>
    {data.projects && (
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0984e3' }}>Key Projects</h2>
        {data.projects.map((p) => (
          <div key={p.id} className="mb-2"><strong>{p.name}</strong> — {p.description}<div className="flex gap-1 mt-0.5">{p.technologies.map((t, i) => <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600">{t}</span>)}</div></div>
        ))}
      </div>
    )}
    <div><h2 className="text-xs font-bold uppercase mb-1" style={{ color: '#0984e3' }}>Education</h2>
      {data.education.map((edu) => <div key={edu.id}><strong>{edu.degree}</strong> in {edu.field}, {edu.school}</div>)}</div>
  </div>
);

export const technicalTemplates: Record<number, TemplateComponent> = {
  3: Template3,
  13: Template13,
  21: Template21,
};
