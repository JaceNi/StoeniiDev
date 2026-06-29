import {
  IconBank,
  IconWallet,
  IconChart,
  IconAnalytics,
  IconPayment,
  IconMobile,
} from './icons';
import ScrollReveal from './ScrollReveal';
import './ServicesSection.css';

const services = [
  {
    title: 'Core Banking Systems',
    desc: 'Specialized software to handle critical functions like account management, transactions, and customer data.',
    Icon: IconBank,
  },
  {
    title: 'Digital Wallets and Payments',
    desc: 'Store and manage digital currencies. Facilitate online transactions, purchases, and transfers with ease.',
    Icon: IconWallet,
  },
  {
    title: 'Trading Platforms',
    desc: 'Facilitate the buying and selling of financial assets, ensuring secure interactions among traders, brokers, and exchanges.',
    Icon: IconChart,
  },
  {
    title: 'Big Data Analytics',
    desc: 'Analyze large volumes of data to gain insights into customer behavior, market trends, and investment strategies.',
    Icon: IconAnalytics,
  },
  {
    title: 'Payment Processing Solutions',
    desc: 'Build payment gateways, point-of-sale (POS) software, and fraud detection systems.',
    Icon: IconPayment,
  },
  {
    title: 'Online Banking and Mobile Apps',
    desc: 'Provide customers with secure and convenient access to their accounts, transaction history and other financial services.',
    Icon: IconMobile,
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="container">
        <ScrollReveal>
          <div className="services__header">
            <h2 className="section-title">
              Build secure financial services applications that scale with you.
            </h2>
          </div>
        </ScrollReveal>
        <div className="services__grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="services__card">
                <div className="services__icon-wrap">
                  <service.Icon className="services__icon" />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="services__more">and more...</p>
      </div>
    </section>
  );
}
