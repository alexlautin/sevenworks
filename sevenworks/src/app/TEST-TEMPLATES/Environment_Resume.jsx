import React from "react";
import "./Environment.css";

const EnvironmentSustainability = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-name">Erica B. Environmental</h1>
        <p className="resume-contact">
          (404) 333-2121 ■ enviro@emory.edu ■ www.linkedin.com/in/erica-environmental
        </p>
      </div>

      <section className="resume-section">
        <h2>OBJECTIVE</h2>
        <p>
          To obtain a full-time environmental assessment position related to wetland management and marine conservation
        </p>
      </section>

      <section className="resume-section">
        <h2>EDUCATION</h2>

        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong>, Atlanta, GA</p>
            <p>Bachelor of Science in Environmental Sciences; Bachelor of Arts in Biology</p>
            <p>Cumulative GPA: 3.5/4.0</p>
            <p><i>Related Coursework:</i> Tropical Marine Ecology; Freshwater Ecology; Coastal Ecology; Ecology of Emory; 
            Field Botany; Cell Biology; Chemistry; Environmental Assessment & Management; Ecological Economics; 
            and, Environmental Policy</p>
          </div>
          <div className="resume-date-location">
            <span>May 2021</span>
          </div>
        </div>
    <br></br>
        <div className="resume-flex">
          <div>
            <p><strong>Oxford College of Emory University</strong>, Oxford, GA</p>
            <p>Associate of Arts</p>
            <p><i>Honors:</i> Merit List (All Semesters); Oxford College Environmental Science Award 2019; Leadership Oxford</p>
          </div>
          <div className="resume-date-location">
            <span>May 2019</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>RELATED EXPERIENCE</h2>

        <div className="resume-flex">
          <div>
            <p><strong>Carbon Sequestration Monitoring Program</strong> Department of Environmental Sciences, Emory University</p>
            <p><i>Independent Study</i></p>
          </div>
          <div className="resume-date-location">
            <span>Feb 2020 – May 2020</span>
          </div>
        </div>
        <ul>
          <li>Developed effective carbon sequestration program for forested creek near Emory’s Math/Science Building</li>
          <li>Selected and planted ground vegetation and shrubs during early pandemic that will aid in reforestation</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Emory University Campus Services</strong>, Atlanta, GA</p>
            <p><i>Environmental Engineer Intern</i></p>
          </div>
          <div className="resume-date-location">
            <span>May 2019 – May 2020</span>
          </div>
        </div>
        <ul>
          <li>Updated Emory's greenhouse gas inventory and evaluated progress of Emory’s climate action plan</li>
          <li>Developed educational outreach material for campus hydroponic water reclamation facility (Water Hub)</li>
          <li>Presented at 2020 Sustainable Campuses Conference and Greenbuild 2019 Convention</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Tropical Marine Ecology Research</strong>, Discovery Bay Marine Lab, Jamaica</p>
            <p><i>Program Participant</i></p>
          </div>
          <div className="resume-date-location">
            <span>Jan 2020</span>
          </div>
        </div>
        <ul>
          <li>Identified more than 100 marine plants, invertebrates and fish as part of Stony Brook SMAS Program</li>
          <li>Conducted research and wrote research paper on species richness on coral reef patches</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Skidaway Institute of Oceanography</strong>, Savannah, GA</p>
            <p><i>Research Assistant</i></p>
          </div>
          <div className="resume-date-location">
            <span>May – July 2019</span>
          </div>
        </div>
        <ul>
          <li>Observed interacting gene regulatory networks that control iron acquisition and carbon metabolism in Vibrio fischeri</li>
          <li>Designed lab illustrating how microbes respond to nutrient limitation for training of high school 
            Marine Biology educators
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Oxford Institute for Environmental Education</strong>, Oxford, GA</p>
            <p><i>Teaching Assistant</i></p>
          </div>
          <div className="resume-date-location">
            <span>Oct 2018 – May 2019</span>
          </div>
        </div>
        <ul>
          <li>Supported professors in instructing K-12 educators on best practices for teaching Environmental Studies and Biology</li>
          <li>Prepared all labs; assisted participants in collecting, identifying and understanding benthic macro invertebrates</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>LEADERSHIP & COMMUNITY ENGAGEMENT</h2>

        <div className="resume-flex">
          <div>
            <p><strong>Greeks Go Green – Emory University</strong><i>, Co-President, Kappa Kappa Gamma Sorority</i></p>
          </div>
          <div className="resume-date-location">
            <span>Oct 2019 – Present</span>
          </div>
        </div>
        <ul>
          <li>Educating Greek Life on topics such as recycling and energy and water conservation.</li>
          <li>Write and apply for grants to make the sorority and fraternity houses more sustainable and for educational events.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Oxford Development & Alumni Relations Office</strong><i>, Office Assistant</i></p>
          </div>
          <div className="resume-date-location">
            <span>Sep 2017 – May 2018</span>
          </div>
        </div>
        <ul>
          <li>Prepared Alumni information for inclusion into University publications. Contacted University donors.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>SKILLS & INTERESTS</h2>
        <p><strong>Lab Skills:</strong> Plant, soil and water sampling; acid washing; agarose gel electrophoresis; 
        DNA and RNA isolation; and, PCR</p>
        <p><strong>Software Skills:</strong> MS Word, Excel, PowerPoint; Basic R and Python</p>
        <p><strong>Foreign Language:</strong> Advanced written and conversational French</p>
        <p><strong>Interests:</strong> SCUBA; snowboarding; tennis; running; backpacking and travel, having spent 17 years living
        in 4 countries</p>
      </section>
      <br></br>
    </div>
    
  );
};

export default EnvironmentSustainability;
