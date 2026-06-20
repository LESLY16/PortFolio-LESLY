import React from 'react'

export default function ResumeEmbed() {
  // The PDF should be at public/Lesly_Max_Dsouza_Resume.pdf
  const resumeUrl = '/Lesly_Max_Dsouza_Resume.pdf'

  return (
    <div className="container section resume">
      <h2>Resume</h2>
      <p>
        Below is the embedded PDF resume. You can download it directly:
        <a className="btn" href={resumeUrl} download>Download Resume (PDF)</a>
      </p>

      <div className="pdf-wrapper" role="region" aria-label="Resume preview">
        <iframe
          title="Resume - Lesly M Dsouza"
          src={resumeUrl}
          frameBorder="0"
          width="100%"
          height="600px"
        >
          This browser does not support embedded PDFs. You can <a href={resumeUrl}>download the PDF</a>.
        </iframe>
      </div>
    </div>
  )
}