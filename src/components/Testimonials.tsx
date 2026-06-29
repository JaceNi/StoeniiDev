import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'Repeat Business is the best testament to a team\'s ability to perform, and I have no hesitation in hiring them again. StoneiiDeV\'s pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum towards achieving our objectives.',
    name: 'Brad Mabry',
    role: 'Product Manager at Rolls Royce',
    company: 'Rolls Royce',
  },
  {
    quote:
      'StoneiiDeV provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs.',
    name: 'Adam Isley',
    role: 'Director of Digital Strategy',
    company: 'IQVIA',
  },
  {
    quote:
      'StoneiiDeV is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate, which is a cornerstone of our corporate culture.',
    name: 'Matt Mecham',
    role: 'Program Manager',
    company: 'Instructure',
  },
  {
    quote:
      'By seamlessly integrating with the internal team, StoneiiDeV helped achieve key objectives by performing to the same expectations as full-time employees.',
    name: 'Patrick Mee',
    role: 'VP of Engineering',
    company: 'Next Roll',
  },
  {
    quote:
      'Having access to such a vast talent pool, StoneiiDeV has allowed us to staff our teams with solid engineers and execute our projects faster than ever.',
    name: 'Ropu Rovagnati',
    role: 'SVP, Managing Director, LATAM',
    company: 'RGA',
  },
  {
    quote:
      'StoneiiDeV being in a similar timezone has helped us tremendously in our productivity, especially in an agile structure.',
    name: 'Viiveek Sankar',
    role: 'VP of Engineering',
    company: 'Univision',
  },
  {
    quote:
      'We have been successfully working with StoneiiDeV for the last 7 years. They have excellent resources available in multiple areas.',
    name: 'Lana Shaova',
    role: 'Sr. Director, Business Technology',
    company: 'Associated Press',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title testimonials__title">
          Real testimonials from delighted clients.
        </h2>

        <div className="testimonials__carousel">
          <button type="button" className="testimonials__nav" onClick={prev} aria-label="Previous">
            ‹
          </button>

          <div className="testimonials__card">
            <span className="testimonials__company">{t.company}</span>
            <blockquote className="testimonials__quote">&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="testimonials__author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>

          <button type="button" className="testimonials__nav" onClick={next} aria-label="Next">
            ›
          </button>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
