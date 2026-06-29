import './ClientLogos.css';

const clients = [
  { name: 'Google', action: 'Read case study' },
  { name: 'NextRoll', action: 'Watch testimonial' },
  { name: 'Pinterest', action: 'Read case study' },
  { name: 'A-lign', action: 'Watch testimonial' },
  { name: 'Azlo', action: null },
  { name: 'Abra', action: null },
  { name: 'Rolls Royce', action: null },
];

export default function ClientLogos() {
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__label">
          Trusted partner for startups and Fortune 500 companies.
        </p>
        <div className="clients__rating">
          <span className="clients__stars">★★★★★</span>
          <span className="clients__score">Clutch 4.9/5</span>
        </div>
        <div className="clients__grid">
          {clients.map((client) => (
            <div key={client.name} className="clients__item">
              <span className="clients__name">{client.name}</span>
              {client.action && (
                <a href="#" className="clients__link">
                  {client.action}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
