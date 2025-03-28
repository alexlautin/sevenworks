import React from "react";
import "./Museum2.css";

const Museum2_Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-name">MARGEAUX STUDENT</h1>
        <p className="resume-contact-centered">
          Emory PO Box 4321, Atlanta GA 30322 • 1894 Drew Lane, Washington, DC 22321
        </p>
        <p className="resume-contact-centered">
          mlstudent@emory.edu • 404-721-0000 • Margeaux Student | LinkedIn
        </p>
      </div>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <hr className="header-line" />
        <div className="resume-flex">
          <div>
            <p>Emory University, Atlanta, GA</p>
            <p>Bachelor of Arts in Art History, Arts Management Concentration; Minor in Italian Studies</p>
            <p>GPA: 3.85/4.00; Cumulative GPA: 3.63/4.00; Dean's List (3 semesters)</p>
            <p><i>Related Courses:</i> Arts Administration, Non-Profit Marketing, Principles of Organization & Management</p>
            <p><i>Honors: Varner Scholarship, Dean's List (4 semesters)</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">May 2020</span>
          </div>
        </div>
        <br></br>
        <div className="resume-flex">
            <div>
                <p>John Cabot University, Study Abroad Program in Art History, Rome Italy</p>
            </div>
            <div className="resume-date-location">
            <span className="resume-date">Aug 2019 – Dec 2019</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>ARTS RELATED EXPERIENCE</h2>
        <hr className="header-line" />
        <div className="resume-flex">
          <div>
            <p>Solomon R. Guggenheim Museum, New York, NY</p>
            <p className="resume-role"><i>Intern, Education & Library/Archives Department (Remote/Virtual)</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">May 2020 – Aug 2020</span>
          </div>
        </div>
        <ul>
          <li>Conduct research and write fact sheets on select works of Kandisky Collections virtual exhibit</li>
          <li>Help prepare wall texts, write lot notes, and presentation of Frank Lloyd Wright's Usonian House & Pavillion</li>
          <li>Contribute to planning of 37th Museum Mile Festival, create outdoor, socially distant activities for families</li>
          <li>Participate in weekly Museum Cultures Seminar Programs that include staff lectures and virtual field trips to auction
            houses, galleries, corporate collections and artists' studios
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p>Susan Inglett Gallery, New York, NY</p>
            <p className="resume-role"><i>Gallery Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">May 2019 – Sep 2019</span>
          </div>
        </div>
        <ul>
          <li>Assisted gallery owner with daily business operations, including inventory, loans, and contact list</li>
          <li>Led gallery tous and interfaced directly with public at front desk and during exhibits</li>
          <li>Increased views on social media platforms by 50% on Instagram and Facebook and updated website content</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p>C. Carlos Museum, Atlanta, GA</p>
            <p className="resume-role"><i>Volunteer, Education Department</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">Jan 2018 – May 2018</span>
          </div>
        </div>
        <ul>
          <li>Led tours for groups of 15-25 elementary school-aged children and teachers</li>
          <li>Presented interesting facts about special exhibits and answered patrons' questions</li>
          <li>Helped host "Mummies and Milkshakes" and "Artful Stories" programs for families</li>
        </ul>

      </section>

      <section className="resume-section">
        <h2>ADDITIONAL EXPERIENCE</h2>
        <hr className="header-line" />
        <div className="resume-flex">
          <div>
            <p>Walden School, Atlanta, GA</p>
            <p className="resume-role"><i>Volunteer</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">May 2016 – Aug 2018</span>
          </div>
        </div>
        <ul>
          <li>Interacted with Autistic children, providing social and academic developmental support</li>
          <li>Designed classroom exhibits and kept materials neat and properly stored</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p>Island Republic Restaurant, Washington, DC</p>
            <p className="resume-role"><i>Head Waitress</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">Summers 2016, 2017</span>
          </div>
        </div>
        <ul>
          <li>Trained 3 new staff members and coordinated work schedules</li>
        </ul>
      </section>

      <section className="resume-section">
      <h2>LEADERSHIP & ACTIVITIES</h2>
      <hr className="header-line" />
      <div className="resume-flex">
            <div>
                <p>Student Alumni Association, Senior Gift Chair</p>
            </div>
            <div className="resume-date-location">
            <span className="resume-date">Aug 2019 – May 2020</span>
          </div>
        </div>

        <div className="resume-flex">
            <div>
                <p>Emory Arts Underground, Marketing Coordinator</p>
            </div>
            <div className="resume-date-location">
            <span className="resume-date">Jan 2018 – May 2020</span>
          </div>
        </div>

        <div className="resume-flex">
            <div>
                <p>Kappa Alpha Theta Sorority, New Member Educator</p>
            </div>
            <div className="resume-date-location">
            <span className="resume-date">Sep 2019 – May 2020</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>SKILLS</h2>
        <hr className="header-line" />
        <p>Computer skills: Proficient in MS Word, Excel, PowerPoint; Adobe Photoshop; Zoom & Microsoft Teams platforms</p>
        <p>Language skills: Intermediate written and conversational Italian; basic conversational French</p>
        <p>Interests: Foreign travel (Italy, France, Spain, Australia), painting and photography, tennis</p>
      </section>
    </div>
  );
};

export default Museum2_Resume;