import { ResumeData } from '@/types/resume';
import { TemplateComponent } from './index';

// Template 4: Creative / Designer
const Template4: TemplateComponent = ({ data }) => (
  <div className="font-sans text-[11px]">
    <div className="p-6 text-white" style={{ backgroundColor: '#2d3436', backgroundImage: 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)' }}>
      <h1 className="text-3xl font-black tracking-tight">{data.name}</h1>
      <p className="text-lg opacity-80 font-light">{data.title}</p>
      <div className="flex gap-4 text-[10px] opacity-60 mt-2">{data.email} · {data.phone} · {data.location}</div>
    </div>
    <div className="p-6">
      {data.summary && <p className="text-gray-600 mb-5 text-xs italic border-l-4 pl-3" style={{ borderColor: '#e17055' }}>{data.summary}</p>}
      <div className="mb-5">
        <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#e17055' }}>Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-3">
            <div className="flex justify-between items-baseline"><strong className="text-sm">{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
            <div className="text-gray-500 text-[10px]">{exp.company}</div>
            <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>✦ {b}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        <div className="flex-1">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#e17055' }}>Education</h2>
          {data.education.map((edu) => <div key={edu.id} className="mb-1"><strong>{edu.degree}</strong><br /><span className="text-gray-500">{edu.school}</span></div>)}
        </div>
        <div className="flex-1">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#e17055' }}>Skills</h2>
          <div className="flex flex-wrap gap-1">{data.skills.map((s, i) => <span key={i} className="px-2 py-0.5 rounded text-[10px] text-white" style={{ backgroundColor: '#e17055' }}>{s}</span>)}</div>
        </div>
      </div>
    </div>
  </div>
);

// Template 11: Creative Modern with Icons
const Template11: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="flex items-center gap-4 pb-4 mb-4" style={{ borderBottom: '3px solid #f39c12' }}>
      <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: '#f39c12' }}>
        {data.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div><h1 className="text-2xl font-bold">{data.name}</h1><p style={{ color: '#f39c12' }}>{data.title}</p></div>
    </div>
    <div className="flex gap-4 text-[10px] text-gray-500 mb-4 flex-wrap">
      <span>📧 {data.email}</span><span>📱 {data.phone}</span><span>📍 {data.location}</span>
      {data.website && <span>🌐 {data.website}</span>}
    </div>
    {data.summary && <p className="text-gray-600 mb-4">{data.summary}</p>}
    <div className="mb-4">
      <h2 className="text-xs font-bold uppercase mb-2 flex items-center gap-1"><span>💼</span> Experience</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3 pl-4" style={{ borderLeft: '2px solid #f39c12' }}>
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i}>• {b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div><h2 className="text-xs font-bold uppercase mb-2">🎓 Education</h2>
        {data.education.map((edu) => <div key={edu.id}><strong>{edu.degree}</strong>, {edu.school}</div>)}</div>
      <div><h2 className="text-xs font-bold uppercase mb-2">⚡ Skills</h2>
        <div className="flex flex-wrap gap-1">{data.skills.map((s, i) => <span key={i} className="px-2 py-0.5 rounded-full text-[10px] border" style={{ borderColor: '#f39c12', color: '#f39c12' }}>{s}</span>)}</div></div>
    </div>
  </div>
);

// Template 14: Creative Portfolio
const Template14: TemplateComponent = ({ data }) => (
  <div className="font-sans text-[11px]">
    <div className="p-6" style={{ backgroundColor: '#6c5ce7', color: 'white' }}>
      <h1 className="text-3xl font-bold">{data.name}</h1>
      <p className="opacity-80 text-lg">{data.title}</p>
    </div>
    <div className="p-6">
      <div className="flex gap-3 text-[10px] text-gray-500 mb-4">{data.email} | {data.phone} | {data.location}</div>
      {data.summary && <p className="text-gray-700 mb-5">{data.summary}</p>}
      {data.projects && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase mb-3" style={{ color: '#6c5ce7' }}>Featured Projects</h2>
          <div className="grid grid-cols-2 gap-3">
            {data.projects.map((p) => (
              <div key={p.id} className="p-3 rounded-lg border">
                <strong>{p.name}</strong>
                <p className="text-gray-500 text-[10px] mt-1">{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">{p.technologies.map((t, i) => <span key={i} className="text-[9px] px-1.5 py-0.5 rounded" style={{ backgroundColor: '#f3f0ff', color: '#6c5ce7' }}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#6c5ce7' }}>Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-2">
            <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
            <div className="text-gray-500">{exp.company}</div>
            <ul className="list-disc ml-4 mt-1">{exp.bullets.slice(0, 2).map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        ))}
      </div>
      <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#6c5ce7' }}>Skills</h2>
        <div className="flex flex-wrap gap-1">{data.skills.map((s, i) => <span key={i} className="px-2 py-0.5 rounded text-[10px]" style={{ backgroundColor: '#6c5ce7', color: 'white' }}>{s}</span>)}</div></div>
    </div>
  </div>
);

// Template 19: Marketing / Communications
const Template19: TemplateComponent = ({ data }) => (
  <div className="p-8 font-sans text-[11px]">
    <div className="text-center mb-5">
      <h1 className="text-2xl font-bold" style={{ color: '#00b894' }}>{data.name}</h1>
      <p className="text-gray-500 text-sm">{data.title}</p>
      <div className="text-[10px] text-gray-400 mt-1">{data.email} • {data.phone} • {data.location}</div>
    </div>
    {data.summary && <div className="text-center p-3 rounded-lg mb-5" style={{ backgroundColor: '#f0fff4' }}><p>{data.summary}</p></div>}
    <div className="mb-5">
      <h2 className="text-xs font-bold uppercase text-center mb-3" style={{ color: '#00b894' }}>Campaign & Project Highlights</h2>
      {data.experience.map((exp) => (
        <div key={exp.id} className="mb-3">
          <div className="flex justify-between"><strong>{exp.role}</strong><span className="text-gray-400 text-[10px]">{exp.startDate}–{exp.endDate}</span></div>
          <div className="text-gray-500">{exp.company}</div>
          <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, i) => <li key={i} className="flex gap-2"><span style={{ color: '#00b894' }}>▹</span>{b}</li>)}</ul>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#00b894' }}>Education</h2>
        {data.education.map((edu) => <div key={edu.id}>{edu.degree}, {edu.school}</div>)}</div>
      <div><h2 className="text-xs font-bold uppercase mb-2" style={{ color: '#00b894' }}>Skills</h2>
        <p>{data.skills.join(' · ')}</p></div>
    </div>
  </div>
);

// Template 22: Designer Minimalist
const Template22: TemplateComponent = ({ data }) => (
  <div className="p-10 font-sans text-[11px]">
    <h1 className="text-4xl font-extralight tracking-tight mb-1">{data.name}</h1>
    <p className="text-sm text-gray-400 font-light mb-6">{data.title}</p>
    <div className="flex gap-6 text-[10px] text-gray-400 mb-8">
      <span>{data.email}</span><span>{data.phone}</span><span>{data.location}</span>
    </div>
    {data.summary && <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">{data.summary}</p>}
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4">Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-5">
            <div className="font-medium">{exp.role}</div>
            <div className="text-gray-400 text-[10px]">{exp.company} — {exp.startDate}–{exp.endDate}</div>
            <ul className="mt-2 space-y-1 text-gray-600">{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4">Skills</h2>
        <div className="space-y-1">{data.skills.map((s, i) => <div key={i} className="text-gray-600">{s}</div>)}</div>
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-4 mt-6">Education</h2>
        {data.education.map((edu) => <div key={edu.id} className="text-gray-600 mb-1">{edu.degree}<br/><span className="text-gray-400">{edu.school}</span></div>)}
      </div>
    </div>
  </div>
);

export const creativeTemplates: Record<number, TemplateComponent> = {
  4: Template4,
  11: Template11,
  14: Template14,
  19: Template19,
  22: Template22,
};
