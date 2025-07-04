import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Dog Community App (MERN)',
    link: 'https://github.com/harimohan-dev/dog-community',
    description:
      'A real-time social platform with chat, matchmaking, and posts. Built using React, Node.js, MongoDB, WebSockets.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets']
  },
  {
    title: 'FastAPI Deployment System',
    link: 'https://github.com/harimohan1990/pythonwithfastapi_deploy',
    description:
      'Scalable backend system using FastAPI + PostgreSQL deployed to AWS with CI/CD and Docker. Internal tooling.',
    tech: ['FastAPI', 'PostgreSQL', 'AWS', 'CI/CD', 'Docker']
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <p className="tech-stack">
              <strong>Tech:</strong> {proj.tech.join(', ')}
            </p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
