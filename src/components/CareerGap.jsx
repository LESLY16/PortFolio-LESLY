import React from 'react'

export default function CareerGap() {
  // Edit the reason text below to reflect your actual career gap reason.
  const gap = {
    period: 'Jan 2023 — Dec 2023',
    reasonTitle: 'Family care & upskilling',
    reasonText:
      ` Took a planned break to focus on personal commitments while continuing technical upskilling.`
  }

  return (
    <div className="container section career-gap">
      <h2>Career Gap</h2>
      <p className="gap-period"><strong>{gap.period}</strong></p>
      <h3>{gap.reasonTitle}</h3>
      <p>{gap.reasonText}</p>
      <p>
        If you'd prefer a shorter statement for hiring, use: <em>"Planned career break for family care and professional development (completed projects and courses). Available now."</em>
      </p>
    </div>
  )
}
