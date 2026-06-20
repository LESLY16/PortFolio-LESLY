import React from 'react'

export default function CareerGap() {
  // Edit the reason text below to reflect your actual career gap reason.
  const gap = {
    period: 'Jan 2023 — Dec 2023',
    reasonTitle: 'Family care & upskilling',
    reasonText:
      `I took a planned career gap from Jan 2023 to Dec 2023 to care for my personal care and to focus on
      upskilling in modern front-end technologies (React, accessibility, and testing). I'm now fully available and eager to
      contribute to new projects.`
  }

  return (
    <div className="container section career-gap">
      <h2>Career Gap</h2>
      <p className="gap-period"><strong>{gap.period}</strong></p>
      <h3>{gap.reasonTitle}</h3>
      <p>{gap.reasonText}</p>
    </div>
  )
}
