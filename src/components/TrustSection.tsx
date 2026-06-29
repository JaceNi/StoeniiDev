import type { CSSProperties } from 'react';
import ScrollReveal from './ScrollReveal';
import './TrustSection.css';

const stats = [
  {
    value: '120+',
    desc: 'Projects delivered for dozens of clients in the financial services industry.',
  },
  {
    value: 'Fortune 500',
    desc: 'From startups to household names, including Credit One Bank and Rolls-Royce.',
  },
  {
    value: '91%',
    desc: 'Industry-leading customer satisfaction score across all engagements.',
  },
  {
    value: '3+ yrs',
    desc: 'Average client relationship — built on trust and consistent delivery.',
  },
];

const roles = [
  { label: 'Software\ndevelopers', color: '#0066d4', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { label: 'Data\nscientists', color: '#00a3e0', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face' },
  { label: 'UX\ndesigners', color: '#7c3aed', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face' },
  { label: 'Project\nmanagers', color: '#059669', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face' },
  { label: 'QA\nengineers', color: '#d97706', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face' },
];

export default function TrustSection() {
  return (
    <section className="trust">
      <div className="container">
        <ScrollReveal>
          <div className="trust__header">
            <h2 className="section-title">
              Trust a partner with a <span className="highlight">proven</span> track record.
            </h2>
          </div>
        </ScrollReveal>

        <div className="trust__stats">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.value} delay={i * 80}>
              <div className="trust__stat">
                <span className="trust__stat-value">{stat.value}</span>
                <p className="trust__stat-desc">{stat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="trust__roles">
          {roles.map((role, i) => (
            <ScrollReveal key={role.label} delay={i * 60}>
              <div className="trust__role" style={{ '--role-color': role.color } as CSSProperties}>
                <div className="trust__role-photo-wrap">
                  <img src={role.photo} alt="" className="trust__role-photo" width={72} height={72} />
                  <div className="trust__role-ring" />
                </div>
                <span className="trust__role-label">{role.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="trust__tagline">Tap into the top 1% of tech talent.</p>
          <div className="trust__cta">
            <a href="#contact" className="btn btn-blue">
              Book a Discovery Call
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
