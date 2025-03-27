import React from "react";
import "./ITConsulting.css";

const ITConsulting_Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
        <div class="resume-header">
            <h1 class="resume-name">Pat C. Student</h1>
            <hr class="header-line" />
            <div class="resume-contact">
                <div class="contact-left">
                    <span>605 Asbury Circle MSC 12345</span>
                    <span>Atlanta, GA 30322</span>
                </div>
                <div class="contact-right">
                    <span>patc@emory.edu</span>
                    <span>(678) 123-1000</span>
                </div>
            </div>
        </div>


      {/* Education Section */}
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <div className="resume-flex">
          <div>
            <p><strong>Emory University</strong>, Atlanta, Georgia</p>
            <p><i>Bachelor of Arts in Computer Science</i>, GPA: 3.81/4.00</p>
            <p><strong>Relevant Coursework:</strong> Introduction to Computer Science I & II, Assembler Programming,
            Calculus I & II, Financial Accounting, Data and Decisions Analytics, Linear Algebra, Multivariable Calculus</p>
          </div>
          <p className="resume-date">May 2021</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="resume-section">
        <h2>PROGRAMMING SKILLS</h2>
        <div className="resume-flex">
            <p>Proficient in <strong>Java</strong>; Familiar with <strong>HTML, CSS, Swift, Python</strong></p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="resume-section">
        <h2>PROGRAMMING PROJECTS (Github...)</h2>
        <div className="resume-flex">
          <div>
            <p><strong>FlashSale mobile and Web Application Projects</strong></p>
          </div>
          <p className="resume-date">Nov 2020</p>
        </div>
        <ul>
          <li>Worked alongside teammates to develop prototypes of our social market place application.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Task Manager and Space Invader Mobile Application Projects</strong></p>
          </div>
          <p className="resume-date">Oct 2020</p>
        </div>
        <ul>
          <li>Created a task manager using table view and a game using SpriteKit to learn and familiarize myself with Swift.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Personal Portfolio Portfolio Website Project</strong></p>
          </div>
          <p className="resume-date">Apr 2020</p>
        </div>
        <ul>
          <li>Designed website for my personal portfolio using HTML to familiarize myself with CSS, Bootstrap, and JavaScript.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><strong>Note-taking Application Project</strong></p>
          </div>
          <p className="resume-date">Nov 2019</p>
        </div>
        <ul>
          <li>Created a fully functioning note-taking application in Java with custom features to suit my needs and
            to develop my skills in object-oriented programming.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>EXPERIENCE</h2>
        <div className="resume-flex">
          <div>
            <p><i><strong>Finalist at HackATL</strong></i>, Atlanta, Georgia</p>
          </div>
          <p className="resume-date">Nov 2020</p>
        </div>
        <ul>
          <li>Competed in the largest hackathon in Southeastern United States and placed 2nd among over 200 participants.</li>
          <li>Designed and created a functioning prototype of a mobile and web application for my team's project idea.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><i><strong>Mentor at Zhang Dou Hua Media Co., Ltd</strong></i>, Atlanta, Georgia</p>
          </div>
          <p className="resume-date">Mar 2019 – Present</p>
        </div>
        <ul>
          <li>Mentored 3-4 Chinese students a week, teaching the English language and American them in preparing for
            success when studying abroad.
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><i><strong>Summer Analyst at Accenture</strong></i>, Bangkok, Thailand</p>
          </div>
          <p className="resume-date">Jul 2020</p>
        </div>
        <ul>
          <li>Researched and presented digital marketing solutions for signature clients in the Thai airline and retail industries.</li>
          <li>Edited and translated manuals and instructions from Thai to English.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><i><strong>Intern at Microchip Technology Co.,</strong></i>, Chachoengsao, Thailand</p>
          </div>
          <p className="resume-date">Jun 2019</p>
        </div>
        <ul>
          <li>Shadowed and assisted various engineers across the manufacturing pipeline.</li>
          <li>Learned about business management and certain production protocols but mainly focused on the processes integral
            to the production of microcontrollers and integrated circuit controllers.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>LEADERSHIP AND COMMUNITY ENGAGEMENT</h2>
        <div className="resume-flex">
          <div>
            <p><i><strong>Publicity Chair for Thai Student Association</strong></i>, Emory University</p>
          </div>
          <p className="resume-date">Jan 2019 – Present</p>
        </div>
        <ul>
        <li>Chartered Emory University's first Thai Student Association with the mission to raise awareness for Thai culture while
            giving back to the Thai community through fundraising and donating to Thai charities.
          </li>
          <li>Spearhead marketing efforts by designing flyers, posters, and online event pages.</li>
          <li>Participate in weekly executive board meetings to plan for future events.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><i><strong>Volunteer for Volunteer Emory</strong></i>, Emory University</p>
          </div>
          <p className="resume-date">Sep 2019 – Present</p>
        </div>
        <ul>
          <li>Engage in weekly service trips to various destinations assisting local charities.</li>
          <li>Paved trails and collected litter at Clyde Shepherd Nature Preserve, and sent messages of hope to sick children
            and their families with the Sending Smiles foundation, volunteered at Lost'n'Found Youth thrift shop to fundraise
            and support Atlanta's LGBT community, among other trips.
          </li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><i><strong>Member of Hack Emory</strong></i>, Emory University</p>
          </div>
          <p className="resume-date">Sep 2019 – Present</p>
        </div>
        <ul>
          <li>Contribute to weekly meetings to learn and share ideas and projects among students with similar interests.</li>
          <li>Work with peers to learn new programming languages and develop web and mobile applications.</li>
        </ul>

        <div className="resume-flex">
          <div>
            <p><i><strong>Marketing Chair for Ambassadors for Global Awareness</strong></i>, Emory University</p>
          </div>
          <p className="resume-date">Sep 2018 – May 2019</p>
        </div>
        <ul>
          <li>Served alongside the local PartnershipInAction core team to educate and fundraise for global issues.</li>
          <li>Focus efforts to alleviate world hunger, poverty, and illiteracy in accordance to Aga Khan Foundation's solutions.</li>
          <li>Contributed to executive decisions for event planning and marketing strategies.</li>
        </ul>


        <div className="resume-flex">
          <div>
            <p><i><strong>Co-Founder and Treasurer for Virtual Architecture Club</strong></i>, International School Bangkok</p>
          </div>
          <p className="resume-date">Aug 2017 – Jun 2018</p>
        </div>
        <ul>
          <li>Established a new club to foster creativity and teamwork among the student body through a virtual platform.</li>
          <li>Organized group builds and events open to the student body as well as led weekly general body meetings for the club.</li>
        </ul>
      </section>

      {/* Additional Skills Section */}
      <section className="resume-section">
        <h2>ADDITIONAL SKILLS AND INTERESTS</h2>
        <div class="resume-contact">
                <div class="contact-left">
                    <span><strong>Languages:</strong> Fluent in <strong>English</strong> and <strong>Thai</strong>;
                    Working proficiency in <strong>Mandarin</strong></span>
                    <span><strong>Martial Arts:</strong> First Dan Black Belt Taekwondo</span>
                </div>
                <div class="contact-right">
                    <span><strong>Fine Arts:</strong> Drawing and Sketching</span>
                    <span><strong>Interests:</strong> App Development, Design, Traveling</span>
                </div>
        </div>        
      </section>
    </div>
  );
};

export default ITConsulting_Resume;
