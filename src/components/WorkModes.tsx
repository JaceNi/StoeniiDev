import { useState } from 'react';
import './WorkModes.css';

const modes = [
  {
    id: 'staff',
    title: 'Staff Augmentation',
    desc: 'Our software developers in your team. Integrate skilled professionals directly into your existing workflow.',
    highlight: 'software developers',
    sub: 'your team.',
  },
  {
    id: 'teams',
    title: 'Software Development Teams',
    desc: 'Get a dedicated, cross-functional team built around your project goals and timeline.',
    highlight: 'dedicated team',
    sub: 'your project.',
  },
  {
    id: 'outsourcing',
    title: 'Software Development Outsourcing',
    desc: 'Outsource entire projects to us and focus on your core business while we handle delivery.',
    highlight: 'entire projects',
    sub: 'end-to-end.',
  },
];

export default function WorkModes() {
  const [active, setActive] = useState('staff');
  const current = modes.find((m) => m.id === active)!;

  return (
    <section className="work-modes">
      <div className="container">
        <h2 className="section-title work-modes__title">
          Flexible ways we can work with you.
        </h2>
        <p className="work-modes__subtitle">
          Our <strong>{current.highlight}</strong> in <strong>{current.sub}</strong>
        </p>

        <div className="work-modes__tabs">
          {modes.map((mode) => (
            <button
              key={mode.id}
              type="button"
              className={`work-modes__tab ${active === mode.id ? 'work-modes__tab--active' : ''}`}
              onClick={() => setActive(mode.id)}
            >
              {mode.title}
            </button>
          ))}
        </div>

        <p className="work-modes__desc">{current.desc}</p>
      </div>
    </section>
  );
}
