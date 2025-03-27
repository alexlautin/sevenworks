import React from "react";
import "./InternationalAffairs.css";

const InternationalAffairs_Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="resume-name">HENRY STUDENT</h1>
        <p className="resume-contact-linear">
          Atlanta, GA 30322
        </p>
        <p className="resume-contact-linear">
          (404) 555-1234 hstudent@emory.edu
        </p>
      </header>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="resume-flex">
          <div>
            <p><strong>EMORY UNIVERSITY</strong></p>
            <p>Bachelor of Arts in International Studies</p>
            <p>Cumulative GPA: 3.89/4.00</p>
            <p><strong>Honors and Awards:</strong> Dean’s List (7 semesters); Phi Beta Kappa</p>
          </div>
          <div className="resume-date-location">
            <span><strong>Atlanta, GA</strong></span>
            <span><strong>May 2021</strong></span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>RELATED EXPERIENCE</h2>

        <div className="resume-flex">
          <div>
            <p><strong>CARE International</strong></p>
            <p className="resume-role"><i>Policy Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span><strong>Atlanta, GA</strong></span>
            <span><strong>Jan 2021 – Present</strong></span>
          </div>
        </div>
        <ul>
          <li>Research global women’s health care policy initiatives for use in preparing organization position papers</li>
          <li>Strengthen writing skills by drafting press releases for media advising of research findings as published by the organization</li>
          <li>Make presentations to organization leadership to present research findings and recommendations for policy statements</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>International Rescue Committee</strong></p>
            <p className="resume-role"><i>Volunteer (remote position)</i></p>
          </div>
          <div className="resume-date-location">
            <span><strong>Atlanta, GA</strong></span>
            <span><strong>Sep 2020 – Dec 2020</strong></span>
          </div>
        </div>
        <ul>
          <li>Virtually tutor 14 children of refugees in school subjects, including English, math, and writing</li>
          <li>Provide support to refugees from various countries though referrals for needed services and connections
            to organizations for assistance with housing, food procurement, and employment opportunities
          </li>
          <li>Created new relationships with 12 organizations to provide resources to organization's clients in light of
            COVID-19 challenges
          </li>
          <li>Managed organization social media feeds to build following and market services. Increased following by 15 – 22%
            across various platforms
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>The Carter Center</strong></p>
            <p className="resume-role"><i>Democracy Program Intern (internship completed remotely)</i></p>
          </div>
          <div className="resume-date-location">
            <span><strong>Atlanta, GA</strong></span>
            <span><strong>Jan 2020 – May 2020</strong></span>
          </div>
        </div>
        <ul>
          <li>Researched upcoming foreign elections to identify potential risks to fair and democratic elections</li>
          <li>Made presentations to program directors to advise of findings</li>
          <li>One of two interns selected to participate in overseeing of elections in Ghana, however trip cancelled due
            to COVID-19 pandemic outbreak in March 2020
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Latin American Association</strong></p>
            <p className="resume-role"><i>Policy Research Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span><strong>Atlanta, GA</strong></span>
            <span><strong>Jun 2019 – Aug 2019</strong></span>
          </div>
        </div>
        <ul>
          <li>Investigated allegations of torture in remote villages in central Honduras and El Salvador based on news
            reports and internal sources, and reported on findings to program staff
          </li>
          <li>Participated in interviews of newly-arrived refugees from Latin-American countries to Atlanta</li>
          <li>Provided resources for finding shelter, seeking asylum or citizenship, and finding employment</li>
          <li>Organized and coordinated various fundraising events for the organization, including logistics and guest list
            management. Events raised nearly $500,00 for organization initiatives
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>LEADERSHIP & COMMUNITY SERVICE</h2>

        <div className="resume-flex">
          <div>
            <p><strong>Executive Board Member, Emory PRIDE</strong></p>
          </div>
        </div>
        <ul>
          <li>Host events on campus to encourage more inclusive environment for LGBTQ students at Emory</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Volunteer, Habitat for Humanity</strong></p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>ADDITIONAL SKILLS</h2>
        <ul>
          <li>Fluent in Spanish (speaking, writing, and reading)</li>
          <li>Proficient in MS Word, Excel, PowerPoint, and conducting internet research</li>
          <li>Skilled in use of social media including Facebook, Twitter, Instagram, and WordPress blogging</li>
          <li>Traveled extensively throughout South America, including Argentina, Chile, Ecuador, and Brazil</li>
        </ul>
      </section>
    </div>
  );
};

export default InternationalAffairs_Resume;
