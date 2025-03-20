import React from "react";
import "./Business.css";

const BusinessResume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
        <div class="resume-header">
            <h1 class="resume-name">Jo B. Seeker</h1>
            <div class="resume-contact">
                <div class="contact-left">
                    <span>5032 Forbes Avenue</span>
                    <span>Atlanta, GA 30322</span>
                </div>
                <div class="contact-right">
                    <span>(404) 555-2121</span>
                    <span>intern@emory.edu</span>
                </div>
            </div>
            <hr class="header-line" />
        </div>


      {/* Education Section */}
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong>, Atlanta, GA</p>
            <p><i>Bachelor of Arts in Economics</i></p>
            <p>Relevant Coursework: Accounting, Regression, Multivariate Analysis, Microeconomics</p>
            <p>GPA: 3.7/4.0</p>
          </div>
          <p className="resume-date">May 2022</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2>EXPERIENCE</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Morgan Stanley, Private Wealth Management</strong> Boise, ID</p>
            <p className="resume-role">Financial Advising Intern</p>
          </div>
          <p className="resume-date">May – August 2020</p>
        </div>
        <ul>
          <li>Researched equities and debt securities, issuing securities, and investment company products and 
            economic analysis through studying the Series 7 License Exam Manual
          </li>
          <li>Utilized Morgan Stanley resources to enhance understanding of financial service providers</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Piper Jaffray, Private Client Services</strong> Boise, ID</p>
            <p className="resume-role">Financial Advising Team Assistant</p>
          </div>
          <p className="resume-date">May – August 2019</p>
        </div>
        <ul>
          <li>Contributed to a team achieving $1 million in new assets under management each month</li>
          <li>Utilized Excel, Bloomberg, and other software to complete various operational tasks</li>
          <li>Prepared quarterly newsletters and client meeting materials such as stock research</li>
          <li>Determined and executed the most efficient method for contacting clients</li>
        </ul>
      </section>

      {/* Leadership Section */}
      <section className="resume-section">
        <h2>LEADERSHIP AND COMMUNITY ENGAGEMENT</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Undergraduate Finance Association</strong></p>
            <p className="resume-role">Events and Sports Coordinator</p>
          </div>
          <p className="resume-date">November 2020 – Present</p>
        </div>
        <ul>
          <li>Help coordinate various events, such as keynote speaker presentations, to develop members' interests
            in finance and to create opportunities in pursuit of professional goals
          </li>
          <li>Increased membership by planning events targeted at athletes</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Emory University Solutions High School Conversion Project</strong></p>
            <p className="resume-role">Finance Committee Member</p>
          </div>
          <p className="resume-date">September 2019 – Present</p>
        </div>
        <ul>
          <li>Assist the Mt. Washington Community Development Center in launching a $21 million project to convert an
            abandoned high school into a neighborhood center
          </li>
          <li>Research criteria and restrictions for low income tax credits</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>UBS Freshman Frenzy Program</strong> New York, NY</p>
            <p className="resume-role">Participant</p>
          </div>
          <p className="resume-date">June 2019</p>
        </div>
        <ul>
          <li>Selected, as one of 25 freshmen, to participate in a four-day program at UBS</li>
          <li>Explored equities, fixed income, rates and currencies, municipal securities, operations and private banking
            from UBS employees of all levels
          </li>
          <li>Engaged in interactive trading simulations and pitch book preparations</li>
        </ul>
      </section>

      {/* Honors Section */}
      <section className="resume-section">
        <h2>HONORS</h2>
        <ul>
          <li>Marine Corps Outstanding Achievement Award</li>
          <li>Co-Captain and 2020 MVP, Emory Women's Varsity Soccer</li>
        </ul>
      </section>

      {/* Additional Skills Section */}
      <section className="resume-section">
        <h2>ADDITIONAL SKILLS AND INTERESTS</h2>
        <p><strong>Languages:</strong> Intermediate in written and spoken Spanish</p>
        <p><strong>Computing:</strong> Microsoft Excel, Word, and PowerPoint; Minitab, Adobe Acrobat Reader;
        Microsoft Outlook and Contact Manager; Windows Operating System</p>
        <p><strong>Interests:</strong> Photography, Travel, Table Tennis, Soccer, Yoga</p>
      </section>
    </div>
  );
};

export default BusinessResume;
