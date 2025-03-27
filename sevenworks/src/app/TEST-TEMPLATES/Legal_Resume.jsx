import React from "react";
import "./Legal.css";

const Legal_Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-name">MARGEAUX L. STUDENT</h1>
        <p className="resume-contact">New York, NY 10012</p>
        <p className="resume-contact">mlstudent@emory.edu 414-444-6453</p>
      </div>

      {/* Education */}
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong>, Atlanta GA</p>
            <p>Bachelor of Arts, Art History, Minor: Italian Studies</p>
            <p>Major GPA: 3.91/4.00; Cumulative GPA: 3.59/4.00</p>
          </div>
          <p className="resume-date-location">May 2021</p>
        </div>
        <br></br>
        <div className="resume-flex">
          <div>
            <p><strong>John Cabot University</strong>, Rome, Italy</p>
            <p>Art History Study Abroad Program</p>
          </div>
          <p className="resume-date-location">Aug 2019 – Dec 2019</p>
        </div>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>RELATED EXPERIENCE</h2>

        <div className="resume-flex">
          <p><strong>Atwater & Bibbley LLP</strong> New York, NY <i>Legal Assistant</i></p>
          <p className="resume-date-location">Jan 2021 – Present</p>
        </div>
        <ul>
            <li>Conduct legal research using legal databases to find case law for use in building cases</li>
            <li>Communicate with clients both by phone and email to confer case progress and gather additional information needed for case resolution</li>
            <li>Assist in preparing depositions of witnesses and other parties involved in cases</li>
        </ul>

        <div className="resume-flex">
          <p><strong>Federal Defender Program</strong>, Atlanta, GA <i>Intern (remote position)</i></p>
          <p className="resume-date-location">Sep 2020 – Dec 2020</p>
        </div>
        <ul>
          <li>Worked on federal death row cases, including conducting research on case law and reviewing evidence</li>
          <li>Drafted ~15 legal briefs and memoranda. Received top feedback from staff attorneys on quality of writing</li>
          <li>Created exhibits and attended court hearings with attorneys</li>
          <li>Learned to use legal research databases, including West Law and Lexis Nexis</li>
        </ul>

        <div className="resume-flex">
          <p><strong>Pre-Law Undergraduate Scholars Program, Howard Law</strong>, Washington, DC <i>Program Scholar</i></p>
          <p className="resume-date-location">Jun 2019 – Aug 2019</p>
        </div>
        <ul>
          <li>Took first-year law classes, including Contracts, Legal Research & Writing, Criminal Law, and Constitutional Law.
            Received top grade in Contracts for the program
          </li>
          <li>Experiences Socratic method of learning in classes and learned how to outline cases</li>
          <li>Attended lectures by local judges and state Supreme Court justices</li>
          <li>Networked with lawyers through the program and shadowed a real estate attorney</li>
        </ul>

        <div className="resume-flex">
          <p><strong>Dekalb County Child Advocacy Center</strong>, Decatur, GA <i>Intern</i></p>
          <p className="resume-date-location">Jan 2019 – May 2019</p>
        </div>
        <ul>
          <li>Conducted research for investigations of child abuse and neglect cases</li>
          <li>Helped prepare interview questions for children involved in abuse cases</li>
          <li>Attended court hearings to assist attorneys advocating for children's rights</li>
        </ul>
      </section>

      {/* Leadership */}
      <section className="resume-section">
        <h2>LEADERSHIP & COMMUNITY ENGAGEMENT</h2>
        <p>Black Pre-Law Society, Vice President & Publicity Chair</p>
        <p>Alpha Epsilon Phi Sorority, New Member Educator</p>
        <p>Student Alumni Association, Senior Gift Chair</p>
        <p>Court-Appointed Special Advocate (CASA), Volunteer in training</p>
        <p>Emory READ, Volunteer</p>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>ADDITIONAL SKILLS</h2>
        <p>Proficient in MS Word, Excel, PowerPoint</p>
        <p>Fluent in French; Conversational Spanish</p>
        <p>Adept in various social media including Facebook, Twitter, YouTube, and WordPress</p>
      </section>
    </div>
  );
};

export default Legal_Resume;
