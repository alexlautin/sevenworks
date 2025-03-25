import React from "react";
import "./Health.css";

const Health_Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <div className="resume-header">
        <div className="resume-name">Juan Garcia</div>
        <div className="resume-contact">
        <div className="resume-contact-linear">
            <p>49 Rockyford Rd | Atlanta, GA 30317 |
                juan.garcia@gmail.com | 404-555-7783 | 
                <a href="https://linkedin.com/in/juangarcia">linkedin.com/in/juangarcia</a>
            </p>
            </div>
        </div>
      </div>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        <hr className="section-divider" />
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong></p>
            <p>Bachelor of Science in Biology</p>
            <p>Cumulative GPA: 3.43/4.00</p>
          </div>
          <div className="resume-date-location">
            <p className="resume-date">May 2021</p>
            <p className="resume-location">Atlanta, GA</p>
          </div>
        </div>
      </section>

      {/* Healthcare & Research */}
      <section className="resume-section">
        <h2>Healthcare & Research Experience</h2>
        <hr className="section-divider" />
        <div className="resume-flex">
          <div>
            <p><strong>Whitehead Biomedical Research Building</strong></p>
            <p><i>Lab Technician</i></p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">August 2019-present</p>
            <p className="resume-location">Atlanta, GA</p>
          </div>
        </div>
        <ul>
          <li>Perform experiments utilizing skills in PCR, gel electrophoresis, western blot, dissection, and autoclaving</li>
          <li>Prepare up to 15 buffers bacterial cultures and other solutions daily</li>
          <li>Gained an understanding of preparing samples, protein assays and inventory tracking in a lab setting</li>
          <li>Received training in OSHA and proper sterilization techniques</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Johnson Orthodontics</strong></p>
            <p><i>Health Assistant</i></p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">May 2019-August 2019</p>
            <p className="resume-location">Savannah, GA</p>
          </div>
        </div>
        <ul>
          <li>Oversaw equipment sterilization, assisted in taking x-rays and filing patient information accurately</li>
          <li>Welcomed 50+ patients daily in a fast-paced environment while maintaining a high-level of professionalism</li>
          <li>Ensured work was in compliance with OSHA guidelines and HIPAA standards</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong></p>
            <p><i>Scholarly Inquiry and Research at Emory (SIRE) Researcher</i></p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">January 2017-December 2017</p>
            <p className="resume-location">Atlanta, GA</p>
          </div>
        </div>
        <ul>
          <li>Recruited 30 participants and conducted data collection for synesthesia and cross-modal correspondences study</li>
          <li>Presented research at the Emory SIRE Symposium 2017 and at the 2017 Society for Neuroscience Conference</li>
        </ul>
      </section>

      {/* Additional Experience */}
      <section className="resume-section">
        <h2>Additional Experience</h2>
        <hr className="section-divider" />
        <div className="resume-flex">
          <div>
            <p><strong>Target</strong></p>
            <p><i>Sales Associate</i></p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">Summers 2016-2018</p>
            <p className="resume-location">Atlanta, GA</p>
          </div>
        </div>
        <ul>
          <li>Acted as leader on duty by performing opening and closing routines of the store as needed</li>
          <li>Received a raise in two months based on customer service skills and performance</li>
          <li>Trained over 10 new hires on inventory management, maintaining the cash register and customer service</li>
        </ul>
      </section>

      {/* Leadership */}
      <section className="resume-section">
        <h2>Leadership & Community Engagement</h2>
        <hr className="section-divider" />
        <div className="resume-flex">
          <div>
            <p><strong>Pre-Health Mentoring Office</strong>, Peer Health Mentor</p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">January 2019-present</p>
          </div>
        </div>
        <ul>
          <li>Teach first-year health course to educate students on how to become more competitive for medical school</li>
          <li>Promoted to lead Peer Health Partner Mentor to teach other Peer Mentors how to lead their classes</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Alpha Epsilon Delta Pre-Health Honor Society</strong>, Member</p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">August 2018-present</p>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Centro Latino</strong>, Advisory Board (2018-2019), Member</p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">September 2018-present</p>
          </div>
        </div>

        <div className="resume-flex">
          <div>
            <p><strong>Emory Residence Life</strong>, Sophomore Advisor</p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">August 2018-May 2019</p>
          </div>
        </div>        

        <div className="resume-flex">
          <div>
            <p><strong>Alternative Spring Break</strong>, Participant</p>
          </div>
          <div className="resume-date-group">
            <p className="resume-date">Spring 2018</p>
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className="resume-section">
        <h2>HONORS & AWARDS</h2>
        <hr className="section-divider" />
            <p>PwC/Fran Weiss Scholarship – awarded due to community service and academic excellence</p>
            <p>National Merit Scholar</p>
            <p>Eagle Scout (May 2017)</p>
      </section>
    </div>
  );
};

export default Health_Resume;
