import React from "react";
import "./PublicPolicy.css";

const PublicPolicy_Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="resume-name">JOHN STUDENT</h1>
        <p className="resume-contact-linear">
          New York, NY 01234
        </p>
        <p className="resume-contact-linear">
          jstudent@emory.edu (212) 123-4567
        </p>
      </header>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong>, Atlanta, GA</p>
            <p>Bachelor of Arts in Political Science</p>
            <p>GPA: 3.8/4.0</p>
            <p><strong><i>Honors and Awards</i></strong></p>
          </div>
          <div className="resume-date-location">
            <span>May 2021</span>
          </div>
        </div>
        <ul>
          <li>Dean's List, 6 semesters</li>
          <li>Pi Sigma Alpha (Political Science Honor Society) – Inducted April 2019</li>
          <li>Selected to Political Science Honors Program; Thesis completed with Honors</li>
          <li>Thesis: <i>Political Engagement in High-Risk Urban Young Adults: Encouraging Activism, Discouraging Apathy</i></li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Lisa Melguine for Mayor</strong>, Syracuse, NY</p>
            <p className="resume-role"><i>Campaign Intern (remote position)</i></p>
          </div>
          <div className="resume-date-location">
            <span>Jun 2020 - Nov 2020</span>
          </div>
        </div>
        <ul>
          <li>Utilized strong communication and presentation skills while canvassing neighborhoods to introduce candidate's
            platform to residents and other community establishments
          </li>
          <li>Designed campaign marketing materials including posters, flyers, and banners</li>
          <li>Drafted press releases and brief articles for use by media, strengthening writing skills</li>
          <li>Gained knowledge of inner workings of politcs and campaigns, including coalition building, persuasive
            presentations, and constituent responsiveness
          </li>
        </ul>
        <br></br>

        <div className="resume-flex">
          <div>
            <p><strong>The Governor's Intern Program</strong>, Albany, NY</p>
            <p className="resume-role"><i>Policy Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span>Jun 2019 - Aug 2019</span>
          </div>
        </div>
        <ul>
          <li>Conducted researched and prepared reports on education and health care policy reform, including estimating
            costs and other logistical processes
          </li>
          <li>Conducted presentations to the Governor and staff on research findings. Received Governor's Research
            Award, top award for best presentation and research results
          </li>
          <li>Learned the process of creating policy initiatives and transforming them into law</li>
        </ul>
        <br></br>

        <div className="resume-flex">
          <div>
            <p><strong>Office of the Honorable J.C. Bradford</strong>, Brooklyn, NY</p>
            <p className="resume-role"><i>Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span>May 2018 - Aug 2018</span>
          </div>
        </div>
        <ul>
          <li>Researched policy initiatives and made recommendations to the Congressman for appropriate actions to 
            take on various bills before the House of Representatives
          </li>
          <li>Drafted a weekly email newsletter sent to district constituents on the Congressman's activities and voting record.
            Increased constituent engagement with newsletter by 35% over previous newsletter format
          </li>
          <li>Responded to constituent concerns by writing response. Received favorable constituent praise for thoroughness of
            replies multiple times
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>LEADERSHIP & SERVICE</h2>

        <div className="resume-flex">
          <div>
            <p><strong>Students for a Better Tomorrow</strong>, <i>Founder & President</i></p>
          </div>
          <div className="resume-date-location">
            <span>Aug 2019 - Present</span>
          </div>
        </div>
        <ul>
          <li>Chartered a student group for Latinx students to become better educated on understanding policy initiatives
            and how they impact their specific communities
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Beta Theta Pi Fraternity</strong>, <i>Vice President</i></p>
          </div>
          <div className="resume-date-location">
            <span>Feb 2019 - May 2020</span>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Emory University Intra-Mural Tennis</strong>, <i>Champion</i></p>
          </div>
          <div className="resume-date-location">
            <span>Aug 2019 - May 2020</span>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Refugee Center of Atlanta</strong>, <i>Volunteer</i></p>
          </div>
          <div className="resume-date-location">
            <span>Jan 2017 - May 2019</span>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Children's Division of Brooklyn Community Hospital</strong>, <i>Volunteer</i></p>
          </div>
          <div className="resume-date-location">
            <span>May 2018 - Aug 2018</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>ADDITIONAL SKILLS</h2>
        <p>Proficient in Microsoft Word, Excel, Access, PowerPoint, & Adobe Dreamweaver</p>
        <p>Fluent in speaking, writing, and reading Spanish; Conversatinoal in Italian</p>
        <p>Proficient in social media platforms including Facebook, Twitter, YouTube, Tumblr, and WordPress</p>
      </section>
    </div>
  );
};

export default PublicPolicy_Resume;
