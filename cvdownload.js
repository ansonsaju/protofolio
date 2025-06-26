// CV Download Function

// This function creates a simple CV in text format
function generateCV() {
  const cv = `
Anson
UI/UX Designer & Web Developer
GPTC PALA | hello@yourname.com | 9747190972
linkedin.com/in/alensmith | github.com/alensmith

PROFESSIONAL SUMMARY
Passionate designer and developer with over 5 years of experience creating stunning digital experiences. 
Combines creativity with technical expertise to deliver solutions that exceed client expectations.

SKILLS
• HTML & CSS
• JavaScript
• React.js
• UI/UX Design
• Figma
• Responsive Design
• Node.js
• WordPress

EXPERIENCE
Senior Web Developer
TechInnovate | San Francisco, CA | 2022 - Present
• Led the redesign of 5 major client websites, improving conversion rates by an average of 35%
• Developed custom web applications using React.js and Node.js for enterprise clients
• Managed a team of 3 junior developers, providing mentorship and code reviews

UI/UX Designer
CreativeWorks | San Francisco, CA | 2019 - 2022
• Created user-centered designs for mobile and web applications
• Conducted user research and usability testing to improve product experiences
• Collaborated with development teams to ensure accurate implementation of designs

Web Designer
Digital Solutions | San Francisco, CA | 2017 - 2019
• Designed responsive websites for small to medium-sized businesses
• Created brand identities including logos, color palettes, and typography systems
• Maintained client websites and implemented analytics solutions

EDUCATION
Bachelor of Fine Arts in Digital Design
California Institute of Arts | 2017

CERTIFICATIONS
• Certified UX Professional (CUXP)
• Advanced JavaScript Development
• Google Analytics Certification
`;
  return cv;
}

// Function to download the CV as a file
function downloadCV() {
  const cvText = generateCV();
  const blob = new Blob([cvText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'Alen_Smith_CV.txt';
  
  // This is needed for Firefox
  document.body.appendChild(downloadLink);
  
  downloadLink.click();
  
  // Clean up
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

// This is another implementation option that creates a more formatted PDF-like CV
function downloadFormattedCV() {
  // Create a hidden iframe to generate the CV document
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  
  // Add HTML content for a nicely formatted CV
  doc.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Anson - CV</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #2563eb;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 10px;
        }
        h2 {
          color: #1f2937;
          margin-top: 20px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 5px;
        }
        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
        }
        .contact-info div {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .skill {
          background-color: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 14px;
        }
        .job {
          margin-bottom: 20px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .job-title {
          color: #2563eb;
        }
        ul {
          margin-top: 5px;
        }
        @media print {
          body {
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <h1>Anson,Selina,Karthik,Punnyalekshmi</h1>
      <div class="contact-info">
        <div>📍 GPTC PALA</div>
        <div>📧 hello@yourname.com</div>
        <div>📱 7510126549,9747190972,9961905710,6282305934</div>
        <div>🔗 linkedin.com/in/alensmith</div>
        <div>💻 github.com/alensmith</div>
      </div>
      
      <h2>PROFESSIONAL SUMMARY</h2>
      <p>passionate Computer Engineering Diploma student and an aspiring full-stack developer.</p>
      
      <h2>SKILLS</h2>
      <div class="skills">
        <span class="skill">HTML & CSS</span>
        <span class="skill">JavaScript</span>
        <span class="skill">React.js</span>
        <span class="skill">UI/UX Design</span>
        <span class="skill">Figma</span>
        <span class="skill">Responsive Design</span>
        <span class="skill">Node.js</span>
        <span class="skill">WordPress</span>
      </div>
      
      <h2>EXPERIENCE</h2>
      <div class="job">
        <div class="job-header">
          <span class="job-title">Senior Web Developer</span>
          <span>2022 - Present</span>
        </div>
        <div>TechInnovate | San Francisco, CA</div>
        <ul>
          <li>Led the redesign of 5 major client websites, improving conversion rates by an average of 35%</li>
          <li>Developed custom web applications using React.js and Node.js for enterprise clients</li>
          <li>Managed a team of 3 junior developers, providing mentorship and code reviews</li>
        </ul>
      </div>
      
      <div class="job">
        <div class="job-header">
          <span class="job-title">UI/UX Designer</span>
          <span>2019 - 2022</span>
        </div>
        <div>CreativeWorks | San Francisco, CA</div>
        <ul>
          <li>Created user-centered designs for mobile and web applications</li>
          <li>Conducted user research and usability testing to improve product experiences</li>
          <li>Collaborated with development teams to ensure accurate implementation of designs</li>
        </ul>
      </div>
      
      <div class="job">
        <div class="job-header">
          <span class="job-title">Web Designer</span>
          <span>2017 - 2019</span>
        </div>
        <div>Digital Solutions | San Francisco, CA</div>
        <ul>
          <li>Designed responsive websites for small to medium-sized businesses</li>
          <li>Created brand identities including logos, color palettes, and typography systems</li>
          <li>Maintained client websites and implemented analytics solutions</li>
        </ul>
      </div>
      
      <h2>EDUCATION</h2>
      <div class="job">
        <div class="job-header">
          <span class="job-title">Bachelor of Fine Arts in Digital Design</span>
          <span>2017</span>
        </div>
        <div>California Institute of Arts</div>
      </div>
      
      <h2>CERTIFICATIONS</h2>
      <ul>
        <li>Certified UX Professional (CUXP)</li>
        <li>Advanced JavaScript Development</li>
        <li>Google Analytics Certification</li>
      </ul>
    </body>
    </html>
  `);
  
  doc.close();
  
  // Print the document which triggers a save dialog
  setTimeout(() => {
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
  }, 500);
}
// Attach event listener when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  const downloadBtn = document.getElementById('downloadCVBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
      e.preventDefault();
      downloadFormattedCV(); // Or use downloadCV() for plain text version
    });
  }
});
