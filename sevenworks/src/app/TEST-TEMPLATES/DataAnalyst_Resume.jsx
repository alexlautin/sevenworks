import React from "react";
import "./DataAnalyst.css";

const DataAnalystResume = () => {
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
      <h2 className="resume-title">Data Analyst Intern</h2>
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
            <p><strong>Bachelor of Science in Quantitative Theory & Methodology, Emory University (Expected May 2026)</strong></p>
            <p></p>
          </div>
        </div>
      </section>

      {/* Core Competencies & Technical Skills */}
      <section className="resume-section">
        <h2>Core Competencies & Technical Skills</h2>
        <hr />
        <p><strong><i>Core Competencies: Data Visualization, Statistical Analysis, Big Data, Database Design, Documentation & Reporting, 
          Machine Learning, Artificial Intelligence, Automation, Data Cleaning</i></strong></p>
        <br></br>
        <p><strong><i>Technical Skills: Excel, SQL, R, Python</i></strong></p>
      </section>

      {/* Technical Projects */}
      <section className="resume-section">
        <h2>Technical Projects</h2>
        <hr />
        <div className="resume-flex">
          <div>
            <p><strong>Employee Performance Dashboard</strong></p>
            <p><strong><a href="#">Project Link</a> | Completed: Month Year</strong></p>
            <p><strong>Technologies: SQL, Python, Excel</strong></p>
          </div>
        </div>
        <ul>
          <li>Developed a comprehensive employee performance dashboard using SQL for data extraction and Python 
            for data visualization, enabling HR to track key peformance indicators effectively.</li>
          <li>Reduced reporting time from 2 weeks to 1 week by automating data collection processes and 
            enhancing visualization clarity, leading to more informed decision-making.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Customer Satisfaction Survey Analysis</strong></p>
            <p><strong><a href="#">Project Link</a> | Completed: Month Year</strong></p>
            <p><strong>Technologies: R, Excel</strong></p>
          </div>
        </div>
        <ul>
          <li>Processed and analyzed customer feedback data in R to assess satisfaction levels and identify areas for improvement.</li>
          <li>Created an interactive dashboard in Excel that displayed survey results and key metrics, improving
            accessibility of insights for the management team.
          </li>
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="resume-section">
        <h2>Professional Experience</h2>
        <hr />
        <div className="resume-flex">
          <div>
            <p><strong><i>Tech Company LLC</i></strong></p>
            <p><strong>Data Analyst Intern</strong></p>
          </div>
          <p className="resume-date"><strong><i>2023</i></strong></p>
        </div>
        <ul>
          <li>Assisted in the collection, cleaning, and analysis of data from various sources, ensuring data integrity
            and accuracy for insightful reporting, which contributed to a 30% reduction in reporting errors.
          </li>
          <li>Created dynamic dashboards and visualizations using Tableau and Excel to present key metrics to stakeholders,
            facilitating data-driven decisions that resulted in a 15% increase in project efficiency.
          </li>
          <li>Collaborated with cross-functional teams to identify data needs and optimize reporting processes, 
            improving report generation time by 20%, and allowing for faster decision-making in ongoing projects.
          </li>
        </ul>
      </section>

      {/* Involvement & Engagement */}
      <section className="resume-section">
        <h2>Involvement & Engagement</h2>
        <hr />
        <p>Vice President, Data Club</p>
      </section>
    </div>
  );
};

export default DataAnalystResume;
