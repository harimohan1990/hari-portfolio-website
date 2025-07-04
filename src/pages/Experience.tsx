import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'UST Global – Merck',
    duration: 'Oct 2024 – Present',
    role: 'Full Stack Engineer (Healthcare)',
    details: [
      'Architected analytics platform for global clinical trials using AWS (Lambda, S3, CloudFront).',
      'Improved frontend performance by 20% via lazy loading and route splitting.',
      'Led DevOps workflows using GitHub Actions and Docker.'
    ]
  },
  {
    company: 'Genpact – Morgan Stanley',
    duration: 'Feb 2024 – Sep 2024',
    role: 'Full Stack Engineer (Fintech)',
    details: [
      'Migrated React to Next.js with ISR/SSR, saving $50K/year in server costs.',
      'Implemented secure micro-auth using OAuth and JWT.',
      'Used Redis for edge caching and request deduplication.'
    ]
  },
  {
    company: 'Atos Syntel – PayPal, State Street',
    duration: 'Oct 2022 – Dec 2023',
    role: 'Frontend Developer',
    details: [
      'Re-architected dashboards with Redux Toolkit and achieved 95% test coverage.',
      'Enhanced observability using Sentry and Prometheus.'
    ]
  },
  {
    company: 'Altisource – HubZu',
    duration: 'Jul 2021 – Oct 2022',
    role: 'Software Engineer (E-commerce)',
    details: [
      'Built high-conversion UIs with React-Raphael.',
      'Optimized Lighthouse scores for SEO and performance.'
    ]
  },
  {
    company: 'ATCS – Mercedes Benz, Gifticon',
    duration: 'Jan 2021 – Jul 2021',
    role: 'Frontend Developer',
    details: [
      'Developed real-time search dashboards.',
      'Led refactoring for component isolation.'
    ]
  },
  {
    company: 'Moonraft (UST Global) – ICICI Bank, Taj Hotels',
    duration: 'Aug 2018 – Aug 2019',
    role: 'UI Developer',
    details: [
      'Built cross-platform UIs for banking and hospitality.',
      'Integrated REST APIs for booking and transactions.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience">
      <h1>Professional Experience</h1>
      {experiences.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <h2>{exp.company}</h2>
          <h3>{exp.role} | <span>{exp.duration}</span></h3>
          <ul>
            {exp.details.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
