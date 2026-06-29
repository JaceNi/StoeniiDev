import './ServicesSection.css';

const services = [
  {
    title: 'Core Banking Systems',
    desc: 'Specialized software to handle critical functions like account management, transactions, and customer data.',
    icon: '🏦',
  },
  {
    title: 'Digital Wallets and Payments',
    desc: 'Store and manage digital currencies. Facilitate online transactions, purchases, and transfers with ease.',
    icon: '💳',
  },
  {
    title: 'Trading Platforms',
    desc: 'Facilitate the buying and selling of financial assets, ensuring secure interactions among traders, brokers, and exchanges.',
    icon: '📈',
  },
  {
    title: 'Big Data Analytics',
    desc: 'Analyze large volumes of data to gain insights into customer behavior, market trends, and investment strategies.',
    icon: '📊',
  },
  {
    title: 'Payment Processing Solutions',
    desc: 'Build payment gateways, point-of-sale (POS) software, and fraud detection systems.',
    icon: '💰',
  },
  {
    title: 'Online Banking and Mobile Apps',
    desc: 'Provide customers with secure and convenient access to their accounts, transaction history and other financial services.',
    icon: '📱',
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="section-title">
            Build secure financial services applications that scale with you.
          </h2>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="services__card">
              <span className="services__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
        <p className="services__more">and more...</p>
      </div>
    </section>
  );
}
