import './ClientLogos.css';

const clients = [
  { name: 'Google', logo: '/logos/google.svg', height: 36 },
  { name: 'NextRoll', logo: '/logos/nextroll.svg', height: 32 },
  { name: 'Pinterest', logo: '/logos/pinterest.svg', height: 32 },
  { name: 'A-lign', logo: '/logos/align.svg', height: 32 },
  { name: 'Azlo', logo: '/logos/azlo.svg', height: 32 },
  { name: 'Abra', logo: '/logos/abra.svg', height: 32 },
  { name: 'Rolls-Royce', logo: '/logos/rolls-royce.svg', height: 28 },
];

export default function ClientLogos() {
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__label">
          Trusted partner for startups and Fortune 500 companies.
        </p>
        <div className="clients__rating">
          <span className="clients__clutch">Clutch</span>
          <span className="clients__stars">★★★★★</span>
          <span className="clients__score">Clutch 4.9/5</span>
          <span className="clients__reviews">· 127 reviews</span>
        </div>
        <div className="clients__grid">
          {clients.map((client) => (
            <div key={client.name} className="clients__item">
              <div className="clients__logo-wrap">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="clients__logo"
                  style={{ height: client.height }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
