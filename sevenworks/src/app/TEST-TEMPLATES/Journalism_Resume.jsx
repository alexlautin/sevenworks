import React from "react";
import "./Journalism.css";

const Journalism_Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-name">JANE R. JOURNALIST</h1>
        <p className="resume-contact-centered">
          1 Emory Way | Atlanta, GA 30322 | (404) 514-2387 | jjourn@emory.edu | www.linkedin.com/in/jane-journalist/
        </p>
      </div>

      <section className="resume-section">
        <h2>OBJECTIVE</h2>
        <hr className="header-line" />
        <p>
          Utilize my strong research and reporting skills to obtain a full-time multimedia reporter role at a major metro daily
        </p>
      </section>

      <section className="resume-section">
        <h2>EDUCATION</h2>
        <hr className="header-line" />
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong></p>
            <p>Bachelor of Arts in Film & Media Studies, double major in Sociology</p>
            <p>GPA: 3.5/4.0; Dean’s List (2 semesters)</p>
            <p><i>Related coursework:</i> Intro to Digital Video; Mass Media and Social Influences; Documentary Filmmaking I & II; Gender, Race, and Inequality; Racial Violence in America; Georgia Civil Rights Cold Cases</p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">Atlanta, GA</span>
            <span className="resume-date">May 2021</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>RELATED EXPERIENCE</h2>
        <hr className="header-line" />
        <div className="resume-flex">
          <div>
            <p><strong>The Emory Wheel</strong></p>
            <p className="resume-role"><em>Staff Feature Writer</em></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">Atlanta, GA</span>
            <span className="resume-date">Oct 2019 – Present</span>
          </div>
        </div>
        <ul>
          <li>Average two feature articles weekly (print and video content) for student-run weekly campus digital newspaper</li>
          <li>Pitched and wrote more than 25 feature stories and news articles since start of pandemic in March 2020</li>
          <li>Received 225 follows for Dec 2020 feature about Emory alum and showrunner for Netflix series <i>Bridgerton</i></li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Elle Magazine</strong></p>
            <p className="resume-role"><em>Remote Beauty Writer Intern</em></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">New York, NY</span>
            <span className="resume-date">May – Aug 2020</span>
          </div>
        </div>
        <ul>
          <li>Worked remotely to research and report weekly on industry trends and features stories</li>
          <li>Represented the publication at Zoom press conferences, launches, and industry events</li>
          <li>Interviewed and maintained relationships with prestige market beauty executives</li>
          <li>Coordinated annual "Beauty Top 100" Survey with Public Relations directors and Elle Paris Bureau
            to ensure entries were received and re-written for publication
          </li>
          <li>Served as photography liaison to assign photographers, schedule shoots, and select art for stories</li>
          <li>Nominated for <em>Fashion First</em> award for excellent performance as remote intern</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>CNN International Network, Special Projects</strong></p>
            <p className="resume-role"><i>Special Projects Intern (cut short due to pandemic)</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">Atlanta, GA</span>
            <span className="resume-date">Jan – Mar 2020</span>
          </div>
        </div>
        <ul>
          <li>Worked with producers to create high-end sales tapes and promotions</li>
          <li>Assisted in production of special projects and catalogued sound bytes from videotape for future airing</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>NBC News 8</strong></p>
            <p className="resume-role"><i>Production Assistant/Associate Producer Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">Akron, OH</span>
            <span className="resume-date">May – Jul 2019</span>
          </div>
        </div>
        <ul>
          <li>Collaborated with Investigative Team reporters to formulate pitches and assist with story production</li>
          <li>Wrote copy and helped producers to select for noon, 5 and 6 p.m. broadcasts</li>
          <li>Interacted with assignment desk, producers, and reporters on story pitches and breaking news</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>CNN Student Bureau</strong></p>
            <p className="resume-role"><i>Correspondent</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">Atlanta, GA</span>
            <span className="resume-date">Jan – Aug 2018</span>
          </div>
        </div>
        <ul>
          <li>Wrote, produced, and reported for CNN-aired story about college student abuse of prescription drugs</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>The Raleigh News & Observer</strong></p>
            <p className="resume-role"><i>Student Writer/Reporter</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-location">Raleigh, NC</span>
            <span className="resume-date">Summers 2017, 2018</span>
          </div>
        </div>
        <ul>
          <li>Published more than 20 news and feature stories as high school student covering Triangle region</li>
          <li>Became proficient in inter- and intra-media relations in fast-paced, detail-oriented environment</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>LEADERSHIP & COMMUNITY ENGAGEMENT</h2>
        <hr className="header-line" />
        <div className="resume-flex">
          <div>
            <p><strong>Asian American Journalists Association</strong>, <i>Atlanta Chapter Member</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">Oct 2019 – Present</span>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Gamma Xi Gamma Sorority</strong>, <i>Publicity Chair</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">Aug 2020 – Present</span>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Volunteer Emory</strong>, <i>Volunteer</i></p>
          </div>
          <div className="resume-date-location">
            <span className="resume-date">Sep 2018 – Apr 2019</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>SKILLS & INTERESTS</h2>
        <hr className="header-line" />
        <p><strong>Software Skills:</strong> Proficient in MS Word, Excel, PowerPoint, Wordpress, Adobe Premiere, InDesign, Photoshop; basic podcast skills with Audacity; online research using LexisNexis, other online dbases</p>
        <p><strong>Social Media Skills:</strong> Proficient in Hootsuite and Twitter, Instagram</p>
        <p><strong>Language Skills:</strong> Intermediate conversational and written French; basic conversational Spanish</p>
        <p><strong>Interests:</strong> Freelance writing on entertainment, travel, and fashion; fashion and set still photography; British lit</p>
      </section>
    </div>
  );
};

export default Journalism_Resume;