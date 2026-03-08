import { ResumeData } from '@/types/resume';
import { TemplateComponent } from './index';

// Template 2: Modern Professional
const Template2: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="flex items-end gap-4 pb-4 mb-4 border-b-2" style={{ borderColor: '#0d6efd' }}>
      <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: '#0d6efd' }}>
        {data.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-gray-500">{data.title}</p>
      </div>
      <div className="text-right text-[10px] text-gray-500">
        <div>{data.email}</div><div>{data.phone}</div><div>{data.location}</div>
      </div>
    </div>
    {data.summary && <p className="text-gray-700 mb-4 leading-relaxed">{data.summary}</p>}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong className="text-sm">{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate} – {exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company} • {exp.location}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i} className="flex gap-2"><span style={{ color: '#0d6efd' }}>›</span>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id}><strong>{edu.degree}</strong><div className="text-gray-500">{edu.school} • {edu.endDate}</div></div>
        ))}
      </div>
      <div>
        <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Skills</h2>
        <div className="flex flex-wrap gap-1">{data.skills.map((s, i) => <span key={i} className="px-2 py-0.5 rounded-full text-[10px] text-white" style={{ backgroundColor: '#0d6efd' }}>{s}</span>)}</div>
      </div>
    </div>
  </div>
);

// Template 7: Minimalist One-Column
const Template7: TemplateComponent = ({ data }) => (
  <div className="p-10 font-sans text-[11px] max-w-[500px] mx-auto">
    <h1 className="text-2xl font-light tracking-wide mb-1">{data.name}</h1>
    <p className="text-gray-400 text-xs mb-6">{data.email} · {data.phone} · {data.location}</p>
    {data.summary && <p className="text-gray-600 mb-6 border-l-2 border-gray-200 pl-4">{data.summary}</p>}
    <div className="mb-6">
      <h2 className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="font-medium">{exp.role}</div>
          <div className="text-gray-400 text-[10px]">{exp.company} · {exp.startDate}–{exp.endDate}</div>
          <ul className="mt-1 space-y-0.5 text-gray-600">{exp.bullets.map((b, i) => <li key={i}>— {b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="mb-6">
      <h2 className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Education</h2>
      {data.education.map((edu) => (
        <div key={edu.id} className="text-gray-600"><strong>{edu.degree}</strong> · {edu.school} · {edu.endDate}</div>
      ))}
    </div>
    <div>
      <h2 className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Skills</h2>
      <p className="text-gray-600">{data.skills.join(' · ')}</p>
    </div>
  </div>
);

// Template 8: Sidebar Skills-Oriented
const Template8: TemplateComponent = ({ data }) => (
  <div className="flex text-[11px]">
    <div className="w-1/3 p-6 text-white" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold mb-4 mx-auto">
        {data.name.split(' ').map(n => n[0]).join('')}
      </div>
      <h2 className="text-[10px] uppercase tracking-wider opacity-60 mb-2">Contact</h2>
      <div className="space-y-1 text-[10px] opacity-80 mb-6"><div>{data.email}</div><div>{data.phone}</div><div>{data.location}</div></div>
      <h2 className="text-[10px] uppercase tracking-wider opacity-60 mb-2">Skills</h2>
      <div className="space-y-1.5 mb-6">{data.skills.map((s, i) => (
        <div key={i}><div className="text-[10px] mb-0.5">{s}</div><div className="h-1 bg-white/20 rounded-full"><div className="h-full rounded-full bg-white/80" style={{ width: `${70 + Math.random() * 30}%` }} /></div></div>
      ))}</div>
      {data.certifications && (
        <><h2 className="text-[10px] uppercase tracking-wider opacity-60 mb-2">Certifications</h2>
        <ul className="space-y-1 text-[10px] opacity-80">{data.certifications.map((c, i) => <li key={i}>• {c}</li>)}</ul></>
      )}
    </div>
    <div className="w-2/3 p-6">
      <h1 className="text-2xl font-bold mb-0.5">{data.name}</h1>
      <p className="text-gray-500 mb-4">{data.title}</p>
      {data.summary && <p className="text-gray-600 mb-4">{data.summary}</p>}
      <h2 className="text-xs font-bold uppercase tracking-wider mb-2">Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500 text-[10px]">{exp.company}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
      <h2 className="text-xs font-bold uppercase tracking-wider mb-2">Education</h2>
      {data.education.map((edu) => (
        <div key={edu.id}><strong>{edu.degree}</strong> in {edu.field}, {edu.school}</div>
      ))}
    </div>
  </div>
);

// Template 10: Global Multi-Language
const Template10: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="text-center pb-4 mb-4 border-b" style={{ borderColor: '#2ecc71' }}>
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-500">{data.title}</p>
      <div className="flex justify-center gap-4 text-[10px] text-gray-400 mt-2">
        <span>✉ {data.email}</span><span>☎ {data.phone}</span><span>📍 {data.location}</span>
      </div>
    </div>
    {data.summary && <p className="text-gray-700 mb-4">{data.summary}</p>}
    {data.languages && (
      <div className="mb-4 p-3 rounded" style={{ backgroundColor: '#f0fdf4' }}>
        <h2 className="text-xs font-bold uppercase mb-1" style={{ color: '#2ecc71' }}>Languages</h2>
        <div className="flex flex-wrap gap-2">{data.languages.map((l, i) => <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-white border">{l}</span>)}</div>
      </div>
    )}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#2ecc71' }}>Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company} — {exp.location}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#2ecc71' }}>Education</h2>
        {data.education.map((edu) => <div key={edu.id}><strong>{edu.degree}</strong>, {edu.school}</div>)}</div>
      <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#2ecc71' }}>Skills</h2>
        <p>{data.skills.join(', ')}</p></div>
    </div>
  </div>
);

// Template 12: Corporate Modern
const Template12: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="flex justify-between items-start pb-4 mb-4 border-b-2 border-gray-800">
      <div><h1 className="text-2xl font-bold">{data.name}</h1><p className="text-gray-500">{data.title}</p></div>
      <div className="text-right text-[10px] text-gray-500"><div>{data.email}</div><div>{data.phone}</div><div>{data.location}</div></div>
    </div>
    {data.summary && <div className="bg-gray-50 p-3 rounded mb-4"><p className="text-gray-700">{data.summary}</p></div>}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-3">Professional Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3 pl-3 border-l-2 border-gray-300">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate} – {exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">Education</h2>
        {data.education.map((edu) => <div key={edu.id} className="mb-1"><strong>{edu.degree}</strong><br/><span className="text-gray-500">{edu.school} · {edu.endDate}</span></div>)}</div>
      <div><h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-200 pb-1 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-1">{data.skills.map((s, i) => <span key={i} className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">{s}</span>)}</div></div>
    </div>
  </div>
);

// Template 17: Startup Agile
const Template17: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="pb-4 mb-4" style={{ borderBottom: '3px solid #8b5cf6' }}>
      <h1 className="text-2xl font-black">{data.name}</h1>
      <p className="font-medium" style={{ color: '#8b5cf6' }}>{data.title}</p>
      <div className="flex gap-3 text-[10px] text-gray-400 mt-2">{data.email} • {data.phone} • {data.location}</div>
    </div>
    {data.summary && <p className="text-gray-600 mb-4 text-xs">{data.summary}</p>}
    <div className="flex flex-wrap gap-1.5 mb-4">{data.skills.map((s, i) => <span key={i} className="px-2 py-0.5 rounded-full text-[10px] text-white" style={{ backgroundColor: '#8b5cf6' }}>{s}</span>)}</div>
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#8b5cf6' }}>Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3 relative pl-4" style={{ borderLeft: '2px solid #8b5cf6' }}>
          <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full" style={{ backgroundColor: '#8b5cf6' }} />
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>→ {b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#8b5cf6' }}>Education</h2>
      {data.education.map((edu) => <div key={edu.id}><strong>{edu.degree}</strong> — {edu.school}</div>)}</div>
  </div>
);

// Template 20: Sales & Business Dev
const Template20: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="text-center pb-4 mb-4" style={{ borderBottom: '2px solid #e74c3c' }}>
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-500">{data.title}</p>
      <div className="text-[10px] text-gray-400 mt-1">{data.email} | {data.phone} | {data.location}</div>
    </div>
    {data.summary && <div className="mb-4 p-3 rounded" style={{ backgroundColor: '#fef2f2' }}><p>{data.summary}</p></div>}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#e74c3c' }}>Professional Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i} className="flex gap-2"><span style={{ color: '#e74c3c' }}>▪</span>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div><h2 className="text-xs font-bold uppercase mb-1" style={{ color: '#e74c3c' }}>Education</h2>
        {data.education.map((edu) => <div key={edu.id}>{edu.degree}, {edu.school}</div>)}</div>
      <div><h2 className="text-xs font-bold uppercase mb-1" style={{ color: '#e74c3c' }}>Skills</h2>
        <p>{data.skills.join(' • ')}</p></div>
    </div>
  </div>
);

// Template 24: Two-Column Skills-Focused
const Template24: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="text-center pb-4 mb-4 border-b">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-500">{data.title}</p>
      <p className="text-[10px] text-gray-400 mt-1">{data.email} • {data.phone} • {data.location}</p>
    </div>
    {data.summary && <p className="text-gray-700 mb-4">{data.summary}</p>}
    <div className="flex gap-6">
      <div className="w-1/3 space-y-4">
        <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Skills</h2>
          <div className="space-y-1">{data.skills.map((s, i) => <div key={i} className="bg-blue-50 px-2 py-1 rounded text-[10px]">{s}</div>)}</div></div>
        <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Education</h2>
          {data.education.map((edu) => <div key={edu.id} className="mb-2"><strong>{edu.degree}</strong><div className="text-gray-500 text-[10px]">{edu.school}<br/>{edu.endDate}</div></div>)}</div>
        {data.certifications && <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Certifications</h2>
          {data.certifications.map((c, i) => <div key={i} className="text-[10px] mb-1">✓ {c}</div>)}</div>}
      </div>
      <div className="w-2/3">
        <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#0d6efd' }}>Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-3">
            <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
            <div className="text-gray-500">{exp.company}</div>
            <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const modernTemplates: Record<number, TemplateComponent> = {
  2: Template2,
  7: Template7,
  8: Template8,
  10: Template10,
  12: Template12,
  17: Template17,
  20: Template20,
  24: Template24,
};
