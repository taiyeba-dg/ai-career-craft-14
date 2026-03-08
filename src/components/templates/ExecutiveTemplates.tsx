import { ResumeData } from '@/types/resume';
import { TemplateComponent } from './index';

// Template 6: Executive Two-Page
const Template6: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]" style={{ fontFamily: 'Georgia, serif' }}>
    <div className="text-center pb-4 mb-4" style={{ borderBottom: '3px double #333' }}>
      <h1 className="text-3xl font-bold tracking-wide uppercase">{data.name}</h1>
      <p className="text-lg text-gray-600 mt-1">{data.title}</p>
      <div className="flex justify-center gap-6 text-[10px] text-gray-500 mt-2">{data.email} • {data.phone} • {data.location}</div>
    </div>
    {data.summary && (
      <div className="mb-5 p-4 bg-gray-50 border-l-4 border-gray-800">
        <h2 className="text-xs font-bold uppercase mb-1">Executive Summary</h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>
    )}
    <div className="mb-5">
      <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Core Competencies</h2>
      <div className="grid grid-cols-4 gap-2">{data.skills.map((s, i) => <div key={i} className="text-center bg-gray-50 py-1 rounded text-[10px] font-medium">{s}</div>)}</div>
    </div>
    <div className="mb-5">
      <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Professional Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="flex justify-between items-baseline"><strong className="text-sm uppercase">{exp.company}</strong><span className="text-gray-500 text-[10px]">{exp.startDate} – {exp.endDate}</span></div>
          <div className="italic text-gray-600 mb-1">{exp.role} | {exp.location}</div>
          <ul className="list-disc ml-4 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Education</h2>
        {data.education.map((edu) => <div key={edu.id} className="mb-1"><strong>{edu.degree} in {edu.field}</strong><br/><span className="text-gray-500">{edu.school} • {edu.endDate}</span></div>)}
      </div>
      <div>
        {data.certifications && data.certifications.length > 0 && (
          <><h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Certifications & Awards</h2>
          <ul className="space-y-1">{data.certifications.map((c, i) => <li key={i}>• {c}</li>)}</ul>
          {data.awards && <ul className="space-y-1 mt-2">{data.awards.map((a, i) => <li key={i}>★ {a}</li>)}</ul>}</>
        )}
      </div>
    </div>
  </div>
);

// Template 16: Management / Leadership
const Template16: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="flex gap-4 items-center pb-4 mb-4 border-b-2 border-gray-800">
      <div className="w-16 h-16 rounded bg-gray-800 text-white flex items-center justify-center text-xl font-bold">
        {data.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-gray-500">{data.title}</p>
      </div>
      <div className="text-right text-[10px] text-gray-500"><div>{data.email}</div><div>{data.phone}</div><div>{data.location}</div></div>
    </div>
    {data.summary && <div className="mb-4 p-3 bg-gray-50 rounded border-l-4 border-gray-800"><p className="text-gray-700">{data.summary}</p></div>}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase tracking-wider mb-3">Leadership Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between bg-gray-50 px-3 py-1 rounded"><strong>{exp.role}</strong><span className="text-gray-500 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500 px-3 text-[10px]">{exp.company} • {exp.location}</div>
          <ul className="mt-1 ml-3 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>■ {b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div><h2 className="text-xs font-bold uppercase mb-2">Education</h2>
        {data.education.map((edu) => <div key={edu.id} className="mb-1"><strong>{edu.degree}</strong><br/><span className="text-gray-500 text-[10px]">{edu.school}</span></div>)}</div>
      <div><h2 className="text-xs font-bold uppercase mb-2">Competencies</h2>
        <div className="space-y-1">{data.skills.slice(0, 8).map((s, i) => <div key={i} className="text-[10px]">● {s}</div>)}</div></div>
      <div>{data.certifications && <><h2 className="text-xs font-bold uppercase mb-2">Credentials</h2>
        <ul className="space-y-1 text-[10px]">{data.certifications.map((c, i) => <li key={i}>{c}</li>)}</ul></>}</div>
    </div>
  </div>
);

// Template 25: Executive Detailed Multi-Section
const Template25: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]" style={{ fontFamily: 'Georgia, serif' }}>
    <div className="text-center pb-5 mb-5" style={{ borderBottom: '2px solid #2c3e50' }}>
      <h1 className="text-3xl font-bold" style={{ color: '#2c3e50' }}>{data.name}</h1>
      <p className="text-lg text-gray-500 mt-1">{data.title}</p>
      <div className="flex justify-center gap-4 text-[10px] text-gray-400 mt-2">
        {data.email} | {data.phone} | {data.location}
        {data.linkedin && <span>| {data.linkedin}</span>}
      </div>
    </div>
    {data.summary && (
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#2c3e50' }}>Executive Profile</h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>
    )}
    <div className="mb-5">
      <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#2c3e50' }}>Areas of Expertise</h2>
      <div className="grid grid-cols-4 gap-1.5">{data.skills.map((s, i) => <div key={i} className="text-center py-1.5 rounded text-[10px] font-medium" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>{s}</div>)}</div>
    </div>
    <div className="mb-5">
      <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#2c3e50' }}>Career History</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-4 pl-4" style={{ borderLeft: '2px solid #2c3e50' }}>
          <div className="flex justify-between"><strong className="text-sm">{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate} – {exp.endDate}</span></div>
          <div className="text-gray-500 italic">{exp.company} | {exp.location}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#2c3e50' }}>Education</h2>
        {data.education.map((edu) => <div key={edu.id} className="mb-2"><strong>{edu.degree} in {edu.field}</strong><br/><span className="text-gray-500">{edu.school} | {edu.endDate}</span>{edu.gpa && <span className="text-gray-400"> | GPA: {edu.gpa}</span>}</div>)}
      </div>
      <div>
        {data.certifications && data.certifications.length > 0 && (
          <><h2 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#2c3e50' }}>Certifications</h2>
          <ul className="space-y-1">{data.certifications.map((c, i) => <li key={i}>✓ {c}</li>)}</ul></>
        )}
        {data.awards && data.awards.length > 0 && (
          <><h2 className="text-xs font-bold uppercase tracking-wider mb-2 mt-3" style={{ color: '#2c3e50' }}>Awards & Recognition</h2>
          <ul className="space-y-1">{data.awards.map((a, i) => <li key={i}>★ {a}</li>)}</ul></>
        )}
        {data.languages && (
          <><h2 className="text-xs font-bold uppercase tracking-wider mb-2 mt-3" style={{ color: '#2c3e50' }}>Languages</h2>
          <div className="flex flex-wrap gap-2">{data.languages.map((l, i) => <span key={i} className="text-[10px]">{l}</span>)}</div></>
        )}
      </div>
    </div>
  </div>
);

export const executiveTemplates: Record<number, TemplateComponent> = {
  6: Template6,
  16: Template16,
  25: Template25,
};
