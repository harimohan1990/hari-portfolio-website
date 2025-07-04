import React from 'react';
import './Awards.css';

const awards = [
  {
    title: '🏆 Best Full Stack Engineer',
    org: 'UST Global',
    year: '2024',
    reason: 'Recognized for leading the architecture and deployment of high-impact analytics systems.'
  },
  {
    title: '🤝 Best Team Player',
    org: 'Genpact',
    year: '2024',
    reason: 'Awarded for collaboration, cross-functional problem solving, and mentoring engineers.'
  },
  {
    title: '🌟 Mentorship Excellence',
    org: 'Atos',
    year: '2022',
    reason: 'For conducting technical training and upskilling programs across frontend teams.'
  }
];

const Awards = () => {
  return (
    <div className="awards">
      <h1>Awards & Recognition</h1>
      <div className="award-list">
        {awards.map((award, idx) => (
          <div className="award-card" key={idx}>
            <h2>{award.title}</h2>
            <h3>{award.org} • {award.year}</h3>
            <p>{award.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
