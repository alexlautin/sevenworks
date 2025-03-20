import React from "react";
import "./Technology.css";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-name">Name</h1>
        <hr className="header-line" />
        <p className="resume-contact">
          <span>PO Box 100000, Atlanta GA 30322</span>
          <span>303-111-2222</span>
          <span>name@emory.edu</span>
          <span><a href="http://website.com">http://website.com</a></span>
        </p>
      </div>

      {/* Education Section */}
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong>, Emory College, Atlanta, GA</p>
            <p><i>Bachelor of Science in Mathematics and Computer Science</i></p>
            <p>Cumulative GPA: 3.89/4.00</p>
          </div>
          <p className="resume-date">May 2022</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="resume-section">
        <h2>RELEVANT TECHNICAL SKILLS</h2>
        <p><strong>Computing Languages and Technologies</strong> – Java, C, JUnit, Spring, Windows, Unix</p>
        <p><strong>Database Technologies</strong> – SQL, PL/SQL, Oracle, MySQL</p>
        <p><strong>Web Development</strong> – XHTML, CSS, JavaScript, AJAX, Dojo, jQuery, PHP, APEX, XML, XSL</p>
      </section>

      {/* Honors */}
      <section className="resume-section">
        <h2>HONORS</h2>
        <p>2020 Deborah Jackson Award Recipient</p>
        <p>Dean’s Achievement Scholar</p>
        <p>International Baccalaureate Diploma Recipient</p>
      </section>

      {/* Work Experience */}
      <section className="resume-section">
        <h2>WORK EXPERIENCE</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Southwest Airlines</strong>, Dallas, TX</p>
            <p><i>Southwest.com Air Team Intern</i></p>
            <ul>
              <li>Developed new back-end architecture and defect fixes for southwest.com online interface</li>
              <li>Engaged in test-driven development practices while demonstrating agile values as part of a team environment</li>
            </ul>
          </div>
          <p className="resume-date">May 2021 – Aug 2021</p>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Home Depot Corporate Headquarters</strong>, Atlanta, GA</p>
            <p><i>Information Technology Intern</i></p>
            <ul>
              <li>Led several Oracle APEX applications through the development life-cycle, communicating with the business analysts, 
                creating the data model, and designing the applications</li>
              <li>Designed and implemented new methods for unit tests with the Spring framework</li>
              <li>Optimized and upgraded Java back-end and JavaScript/AJAX front-end of web applications</li>
              <li>Drafted UML technical designs for existing and future projects</li>
            </ul>
          </div>
          <p className="resume-date">May 2019 – Aug 2019, May 2020 – Aug 2020</p>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Emory University Technology Services</strong>, Atlanta, GA</p>
            <p><i>Clean Room Technician</i></p>
            <ul>
              <li>Remove malware from computer, resolve software issues and assit with wireless network configuration</li>
            </ul>
          </div>
          <p className="resume-date">Aug 2019 – Aug 2020, Aug 2021 – Present</p>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Global Health, Education, and Economic Development</strong>, Atlanta, GA</p>
            <p><i>Technical Lead</i></p>
            <ul>
              <li>Develop a website providing online applications for trips to Guatemala and Nepal</li>
              <li>Implemented collaboration tools for communication among interns and executive board</li>
            </ul>
          </div>
          <p className="resume-date">Jan 2019 – Present</p>
        </div>        

      </section>

      {/* Leadership */}
      <section className="resume-section">
        <h2>LEADERSHIP & COMMUNITY ENGAGEMENT</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Volunteer Emory</strong>, Atlanta, GA</p>
            <p><i>Student Co-Director</i></p>
            <ul>
              <li>Established, recruited participants, and led a new weekly service trip to Computers for Youth,
                a program designed to refurbish computers for low income families
              </li>
              <li>Coordinating and leading a 2010 spring break trip to Leland, MS to work with Habitat for Humanity</li>
              <li>Support organization with major events throughout the year, including co-leading Gandhi/Be the Change Day</li>
              <li>Volunteered on service trips to New Orleans, LA and Leland, MS to re-construct homes in 2009/2010</li>
              <li>Volunteered with various agencies, including the Open Door community, Briar Vista Elementary School, and
                Jones Boys and Girls Club
              </li>
            </ul>
          </div>
          <p className="resume-date">Aug 2018 – Present</p>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>PAWS Atlanta</strong>, Atlanta, GA</p>
            <p><i>Volunteer</i></p>
            <ul>
              <li>Cleaned kennels, walked and fed the animals, and set up live video feeds</li>
              <li>Worked with assistant manager to repair older kennels for the shelter and helped cut down dead tress
                for the shelter to ensure the safety of the animals and neighboring properties
              </li>
              <li>Raised $200 for PAWS selling t-shirts at the Pets EXPO in Atlanta</li>
            </ul>
          </div>
          <p className="resume-date">Feb 2018 – Aug 2019</p>
        </div>        
      </section>

      {/* Additional Skills */}
      <section className="resume-section">
        <h2>ADDITIONAL SKILLS & INTERESTS</h2>
        <p><i>Languages:</i> Fluent in Spanish; Conversational in German</p>
        <p><i>Fine Arts:</i> Piano (14 years – high mastery); Sketch and Charcoal Painting (8 years)</p>
        <p><i>Interests:</i> Soccer; Mountain Climbing; Organic Gardening; Strategic Gaming</p>
      </section>
    </div>
  );
};

export default Technology_Resume;
