import './TechMarquee.css';

const technologies = [
  'Node.js', 'Java', 'React', '.NET', 'Python', 'C#', 'Rails',
  'Angular', 'PHP', 'Android', 'iOS', 'Golang', 'Vue.js', 'C++', 'JavaScript', 'Swift',
];

export default function TechMarquee() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="tech">
      <div className="container">
        <h2 className="section-title tech__title">We cover 100+ technologies.</h2>
      </div>
      <div className="tech__marquee-wrapper">
        <div className="tech__marquee">
          {doubled.map((tech, i) => (
            <span key={`${tech}-${i}`} className="tech__pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
