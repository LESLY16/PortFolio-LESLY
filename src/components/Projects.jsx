import React from 'react'

export default function Projects() {
  // Add your projects here. Replace sample entries below with real ones.
  const projects = [
    {
      title: 'Portfolio Site',
      desc: 'This React + Vite portfolio showcasing resume and projects.',
      link: '#'
    },
    {
      title: 'Project Two',
      desc: 'A short description of project two.',
      link: '#'
    }
  ]

  return (
    <div className="container section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="btn" href={p.link}>View</a>
          </article>
        ))}
      </div>
    </div>
  )
}