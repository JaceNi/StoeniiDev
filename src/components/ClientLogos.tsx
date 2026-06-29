import './ClientLogos.css';

const clients = [
  {
    name: 'Google',
    logo: (
      <svg viewBox="0 0 120 40" aria-hidden="true">
        <text x="0" y="28" fontFamily="Inter, Arial, sans-serif" fontSize="22" fontWeight="500" fill="#5f6368">Google</text>
      </svg>
    ),
    action: 'Read case study',
  },
  {
    name: 'NextRoll',
    logo: (
      <svg viewBox="0 0 120 40" aria-hidden="true">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="#5f6368">NextRoll</text>
      </svg>
    ),
    action: 'Watch testimonial',
  },
  {
    name: 'Pinterest',
    logo: (
      <svg viewBox="0 0 120 40" aria-hidden="true">
        <circle cx="14" cy="20" r="10" fill="#E60023" />
        <text x="30" y="27" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#5f6368">Pinterest</text>
      </svg>
    ),
    action: 'Read case study',
  },
  {
    name: 'A-lign',
    logo: (
      <svg viewBox="0 0 100 40" aria-hidden="true">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="600" fill="#5f6368">A-lign</text>
      </svg>
    ),
    action: 'Watch testimonial',
  },
  {
    name: 'Azlo',
    logo: (
      <svg viewBox="0 0 80 40" aria-hidden="true">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="800" fill="#5f6368">azlo</text>
      </svg>
    ),
  },
  {
    name: 'Abra',
    logo: (
      <svg viewBox="0 0 80 40" aria-hidden="true">
        <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill="#5f6368" letterSpacing="2">ABRA</text>
      </svg>
    ),
  },
  {
    name: 'Rolls-Royce',
    logo: (
      <svg viewBox="0 0 140 40" aria-hidden="true">
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="16" fontWeight="400" fill="#5f6368" letterSpacing="1">ROLLS-ROYCE</text>
      </svg>
    ),
  },
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
              <div className="clients__logo">{client.logo}</div>
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
