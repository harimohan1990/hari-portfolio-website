import React from 'react';
import './Skills.css';

const skills = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'Python'],
  Frontend: ['React.js', 'Next.js', 'Redux Toolkit', 'Material UI'],
  Backend: ['Node.js', 'FastAPI', 'Express.js', 'REST APIs', 'JWT', 'WebSockets'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis'],
  DevOps: ['AWS (EC2, S3, Lambda, CloudFront)', 'Docker', 'GitHub Actions', 'Terraform'],
  Observability: ['Prometheus', 'Grafana', 'CloudWatch', 'Sentry'],
  Testing: ['Jest', 'Playwright', 'React Testing Library'],
  Practices: ['Agile', 'TDD', 'Clean Code', 'CI/CD', 'Code Reviews', 'Mentorship'],
};

const Skills = () => {
  return (
    <div className="skills">
      <h1>Technical Skills</h1>
      {Object.entries(skills).map(([category, items], idx) => (
        <div className="skill-category" key={idx}>
          <h2>{category}</h2>
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
