import React from "react";
import "./DataAnalyst.css";

const SWEResume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-name">Student Name</h1>
        <p className="resume-contact">
          Atlanta, GA | 915-232-5578 | first.last@emory.edu | 
          <a href="https://linkedin.com/in/firstnamelastname">linkedin.com/in/firstnamelastname</a> | 
          <a href="https://github.com/xxxx">github.com/xxxx</a>
        </p>
        <hr className="header-line" />
      </div>

      {/* Title Section */}
      <h2 className="resume-title">Software Engineering Intern</h2>
      <p className="resume-summary">
        Motivated and detail-oriented aspiring data analyst with a strong foundation in data visualization and statistical analysis, 
        complemented by a passion for problem-solving. Eager to apply technical skills in programming, data manipulation, and analytical 
        techniques to contribute to innovative projects. Committed to continuous learning and collaboration within a team environment 
        while delivering high-quality insights that enhance decision-making and support organizational goals.
      </p>

      {/* Education */}
      <section className="resume-section">
        <h2>Education</h2>
        <hr />
        <div className="resume-flex">
          <div>
            <p><strong>Bachelor of Science in Computer Science, Emory University (Expected May 2026)</strong></p>
            <p></p>
          </div>
        </div>
      </section>

      {/* Core Competencies & Technical Skills */}
      <section className="resume-section">
        <h2>Core Competencies & Technical Skills</h2>
        <hr />
        <p><strong><i>Core Competencies: Debugging & Testing, Data Structures & Algorithms, Front-End, Back-End,
            Project Management, Programming Languages, User Experience, Artificial Intelligence</i></strong></p>
        <br></br>
        <p><strong><i>Technical Skills: Excel, SQL, R, Python</i></strong></p>
      </section>

      {/* Technical Projects */}
      <section className="resume-section">
        <h2>Technical Projects</h2>
        <hr />
        <div className="resume-flex">
          <div>
            <p><strong>Smart Recipe Recommender</strong></p>
            <p><strong><a href="#">GitHub Link</a> | Completed: Month Year</strong></p>
            <p><strong>Technologies: Python, Flask, React, MongoDB</strong></p>
          </div>
        </div>
        <ul>
          <li>Created a web application that suggests personalized recipes based on users' dietary preferences and available
            ingredients.
          </li>
          <li>Designed and optimized a search algorithm that improved query processing speed by 50% for high-traffic requests.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Weather Data Analyzer</strong></p>
            <p><strong><a href="#">GitHub Link</a> | Completed: Month Year</strong></p>
            <p><strong>Technologies: Python, Pandas, AWS Lambda, S3</strong></p>
          </div>
        </div>
        <ul>
          <li>Developed a pipeline to process and analyze large weather datasets, reducing processing time by 75% using AWS Lambda
            and S3.
          </li>
          <li>Leveraged real-time data streaming, increasing data update frequency by 3x and enabling real-time trend analysis.</li>
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="resume-section">
        <h2>Professional Experience</h2>
        <hr />
        <div className="resume-flex">
          <div>
            <p><strong><i>Tech Company LLC</i></strong></p>
            <p><strong>Software Engineer Intern</strong></p>
          </div>
          <p className="resume-date"><strong><i>2023</i></strong></p>
        </div>
        <ul>
          <li>Acted as a software engineer intern for an IT consulting firm, contributing to the development of scalable software
            solutions for clients across the healthcare and finance industries, and successfully deployed 1 new pilot product.
          </li>
          <li>Developed and integrated RESTful APIs in Python, enhancing front-end application response times by 30% and supporting
            improved user engagement for over 5,000 monthly users.
          </li>
          <li>Collaborated with a team of 5 to design and implement a customer-facing web app using React and Node.js, streamlining
            user access to key features and boosting retention rates by 15%.
          </li>
        </ul>
      </section>

      {/* Involvement & Engagement */}
      <section className="resume-section">
        <h2>Involvement & Engagement</h2>
        <hr />
        <p>Vice President, Data Club</p>
        <p>Member, Women in STEM</p>
        <p>Volunteer, Second Harvest</p>
      </section>
    </div>
  );
};

export default SWEResume;
