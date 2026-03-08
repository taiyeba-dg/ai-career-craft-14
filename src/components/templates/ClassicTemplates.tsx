import { ResumeData } from '@/types/resume';
import { TemplateComponent } from './index';

// Template 1: Classic Corporate One-Page
const Template1: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
    <div className="text-center border-b-2 border-gray-800 pb-4 mb-4">
      <h1 className="text-2xl font-bold uppercase tracking-widest">{data.name}</h1>
      <p className="text-sm text-gray-600 mt-1">{data.title}</p>
      <p className="text-xs text-gray-500 mt-2">{data.email} • {data.phone} • {data.location}</p>
    </div>
    {data.summary && (
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
        <p className="text-gray-700">{data.summary}</p>
      </div>
    )}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between items-baseline">
            <strong>{exp.role}</strong>
            <span className="text-gray-500 text-[10px]">{exp.startDate} – {exp.endDate}</span>
          </div>
          <div className="text-gray-600 italic">{exp.company} • {exp.location}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Education</h2>
      {data.education.map((edu) => (
        <div key={edu.id} className="flex justify-between">
          <div><strong>{edu.degree} in {edu.field}</strong> — {edu.school}</div>
          <span className="text-gray-500 text-[10px]">{edu.startDate} – {edu.endDate}</span>
        </div>
      ))}
    </div>
    <div>
      <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Skills</h2>
      <p className="text-gray-700">{data.skills.join(' • ')}</p>
    </div>
  </div>
);

// Template 5: Academic Research
const Template5: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]" style={{ fontFamily: 'Times New Roman, serif' }}>
    <div className="text-center mb-4">
      <h1 className="text-xl font-bold">{data.name}</h1>
      <p className="text-sm">{data.title}</p>
      <p className="text-xs text-gray-600">{data.email} | {data.phone} | {data.location}</p>
      {data.website && <p className="text-xs text-blue-700">{data.website}</p>}
    </div>
    {data.summary && (
      <div className="mb-4">
        <h2 className="font-bold text-sm uppercase mb-1">Research Interests</h2>
        <p>{data.summary}</p>
      </div>
    )}
    <div className="mb-4">
      <h2 className="font-bold text-sm uppercase mb-1">Education</h2>
      {data.education.map((edu) => (
        <div key={edu.id} className="mb-1">
          <strong>{edu.degree} in {edu.field}</strong>, {edu.school} ({edu.startDate}–{edu.endDate})
          {edu.gpa && <span className="text-gray-600"> — GPA: {edu.gpa}</span>}
        </div>
      ))}
    </div>
    <div className="mb-4">
      <h2 className="font-bold text-sm uppercase mb-1">Professional Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div><strong>{exp.role}</strong>, {exp.company} ({exp.startDate}–{exp.endDate})</div>
          <ul className="list-disc ml-5 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    {data.projects && (
      <div className="mb-4">
        <h2 className="font-bold text-sm uppercase mb-1">Publications & Projects</h2>
        {data.projects.map((p) => (
          <div key={p.id} className="mb-1">
            <strong>{p.name}</strong> — {p.description}
          </div>
        ))}
      </div>
    )}
    <div>
      <h2 className="font-bold text-sm uppercase mb-1">Technical Skills</h2>
      <p>{data.skills.join(', ')}</p>
    </div>
  </div>
);

// Template 9: Functional / Career Changer
const Template9: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="text-center mb-5">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-600">{data.title}</p>
      <p className="text-xs text-gray-500 mt-1">{data.email} | {data.phone} | {data.location}</p>
    </div>
    {data.summary && (
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <h2 className="font-bold text-xs uppercase mb-1">Professional Profile</h2>
        <p>{data.summary}</p>
      </div>
    )}
    <div className="mb-4">
      <h2 className="font-bold text-xs uppercase border-b pb-1 mb-2">Core Competencies</h2>
      <div className="grid grid-cols-3 gap-1">
        {data.skills.map((s, i) => (
          <div key={i} className="text-center bg-gray-50 rounded py-1 text-[10px]">{s}</div>
        ))}
      </div>
    </div>
    <div className="mb-4">
      <h2 className="font-bold text-xs uppercase border-b pb-1 mb-2">Key Achievements</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-2">
          {exp.bullets.slice(0, 2).map((b, i) => (
            <div key={i} className="flex gap-2 mb-1"><span className="text-blue-600 font-bold">▸</span>{b}</div>
          ))}
        </div>
      ))}
    </div>
    <div className="mb-4">
      <h2 className="font-bold text-xs uppercase border-b pb-1 mb-2">Work History</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="flex justify-between mb-1">
          <span><strong>{exp.role}</strong> — {exp.company}</span>
          <span className="text-gray-500">{exp.startDate}–{exp.endDate}</span>
        </div>
      ))}
    </div>
    <div>
      <h2 className="font-bold text-xs uppercase border-b pb-1 mb-2">Education</h2>
      {data.education.map((edu) => (
        <div key={edu.id}><strong>{edu.degree}</strong>, {edu.school}</div>
      ))}
    </div>
  </div>
);

// Template 15: Research-Focused Academic
const Template15: TemplateComponent = ({ data }) => (
  <div className="p-8 text-[11px]" style={{ fontFamily: 'Times New Roman, serif' }}>
    <div className="border-b-2 border-black pb-2 mb-4">
      <h1 className="text-xl font-bold">{data.name}, Ph.D.</h1>
      <p className="text-xs">{data.email} | {data.phone} | {data.location}</p>
    </div>
    {data.summary && <div className="mb-4"><h2 className="font-bold uppercase text-xs mb-1">Research Statement</h2><p>{data.summary}</p></div>}
    <div className="mb-4">
      <h2 className="font-bold uppercase text-xs mb-1">Academic Appointments</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-2">
          <div className="flex justify-between"><strong>{exp.role}</strong><span>{exp.startDate}–{exp.endDate}</span></div>
          <div className="italic">{exp.company}</div>
          <ul className="list-disc ml-5 mt-1">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    {data.projects && (
      <div className="mb-4">
        <h2 className="font-bold uppercase text-xs mb-1">Selected Publications</h2>
        {data.projects.map((p, i) => (
          <p key={p.id} className="mb-1">[{i + 1}] {p.name}. {p.description}</p>
        ))}
      </div>
    )}
    <div className="mb-4">
      <h2 className="font-bold uppercase text-xs mb-1">Education</h2>
      {data.education.map((edu) => (
        <div key={edu.id}>{edu.degree} in {edu.field}, {edu.school}, {edu.endDate}</div>
      ))}
    </div>
    <div>
      <h2 className="font-bold uppercase text-xs mb-1">Skills & Methods</h2>
      <p>{data.skills.join(', ')}</p>
    </div>
  </div>
);

// Template 18: Finance / Accounting
const Template18: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]" style={{ fontFamily: 'Garamond, Georgia, serif' }}>
    <div className="border-b border-gray-400 pb-3 mb-4">
      <h1 className="text-xl font-bold tracking-wide">{data.name}</h1>
      <p className="text-gray-600">{data.title}</p>
      <div className="flex gap-4 text-xs text-gray-500 mt-1">
        <span>{data.email}</span><span>{data.phone}</span><span>{data.location}</span>
      </div>
    </div>
    {data.summary && <div className="mb-4"><h2 className="font-bold text-xs uppercase tracking-wide mb-1">Executive Summary</h2><p>{data.summary}</p></div>}
    {data.certifications && data.certifications.length > 0 && (
      <div className="mb-4">
        <h2 className="font-bold text-xs uppercase tracking-wide mb-1">Certifications</h2>
        <div className="flex flex-wrap gap-2">{data.certifications.map((c, i) => <span key={i} className="bg-gray-100 px-2 py-0.5 rounded text-[10px]">{c}</span>)}</div>
      </div>
    )}
    <div className="mb-4">
      <h2 className="font-bold text-xs uppercase tracking-wide mb-1">Professional Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.company}</strong><span className="text-gray-500">{exp.startDate}–{exp.endDate}</span></div>
          <div className="italic text-gray-600">{exp.role}</div>
          <ul className="list-disc ml-4 mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div><h2 className="font-bold text-xs uppercase tracking-wide mb-1">Education</h2>
        {data.education.map((edu) => <div key={edu.id}><strong>{edu.degree}</strong>, {edu.school}</div>)}
      </div>
      <div><h2 className="font-bold text-xs uppercase tracking-wide mb-1">Technical Skills</h2><p>{data.skills.join(', ')}</p></div>
    </div>
  </div>
);

// Template 23: Scientific Research Publications
const Template23: TemplateComponent = ({ data }) => (
  <div className="p-8 text-[11px]" style={{ fontFamily: 'Times New Roman, serif' }}>
    <h1 className="text-lg font-bold text-center">{data.name}</h1>
    <p className="text-center text-xs text-gray-600">{data.title}</p>
    <p className="text-center text-[10px] text-gray-500 mb-4">{data.email} • {data.phone} • {data.location}</p>
    <hr className="mb-3" />
    {data.summary && <div className="mb-3"><strong className="text-xs uppercase">Abstract</strong><p className="mt-1">{data.summary}</p></div>}
    <div className="mb-3">
      <strong className="text-xs uppercase">Education</strong>
      {data.education.map((edu) => <p key={edu.id} className="mt-1"><em>{edu.degree} in {edu.field}</em>, {edu.school} ({edu.endDate})</p>)}
    </div>
    <div className="mb-3">
      <strong className="text-xs uppercase">Research Experience</strong>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mt-2">
          <div><strong>{exp.role}</strong> — {exp.company} ({exp.startDate}–{exp.endDate})</div>
          <ul className="list-disc ml-5">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    {data.projects && <div className="mb-3"><strong className="text-xs uppercase">Publications</strong>{data.projects.map((p, i) => <p key={p.id} className="mt-1">{i + 1}. {p.name}: {p.description}</p>)}</div>}
    <div><strong className="text-xs uppercase">Technical Skills</strong><p className="mt-1">{data.skills.join(' | ')}</p></div>
  </div>
);

export const classicTemplates: Record<number, TemplateComponent> = {
  1: Template1,
  5: Template5,
  9: Template9,
  15: Template15,
  18: Template18,
  23: Template23,
};
