import React from "react";
import TypeIt from "typeit-react";
import "./homeStyle.css";
import { useInView } from "react-intersection-observer";
import "./MyComponent";
import Share from "./Share";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
export default function Home() {
  function aboutClick() {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector("#about");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
  function skillClick() {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector("#skills");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }

  function socialClick() {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector("#socials");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
  function projectClick() {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector("#projects");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
  function contactClick() {
    const percentage = 100; // Change this to the desired percentage
    const windowHeight = window.innerHeight;
    const section = document.querySelector("#contact");
    const sectionOffsetTop = section.offsetTop;
    const targetScrollPosition =
      sectionOffsetTop - windowHeight * (1 - percentage / 100);

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
  const { ref, inView } = useInView({
    // threshold:0.4
  });

  return (
    <div ref={ref}>
      {inView ? (
        <div className="content-to-reveal">
          <>
            <script src="typeit.min.js"></script>
            <div
              className="navbar-container"
              style={{ backgroundColor: "black", padding: "10px" }}
            >
              <span
                className="navbar-icons"
                style={{ paddingLeft: "10%", marginLeft: "-10%" }}
              >
                <i
                  className="fa-regular fa-address-card"
                  id="about-click"
                  onClick={aboutClick}
                ></i>
                <h6>About Me</h6>
              </span>
              <span className="navbar-icons" style={{ paddingLeft: "10%" }}>
                <i
                  className="fa-solid fa-laptop"
                  id="skill-click"
                  onClick={skillClick}
                ></i>
                <h6>Skills</h6>
              </span>
              
              <span className="navbar-icons" style={{ paddingLeft: "10%" }}>
                <i
                  className="fa-solid fa-users "
                  id="social-click"
                  onClick={socialClick}
                ></i>
                <h6>Socials</h6>
              </span>
              <span className="navbar-icons" style={{ paddingLeft: "10%" }}>
                <i
                  className="fas fa-project-diagram"
                  id="skill-click"
                  onClick={projectClick}
                ></i>
                <h6>Projects</h6>
              </span>
              <span className="navbar-icons" style={{ paddingLeft: "10%" }}>
                <i
                  className="fa-solid fa-user"
                  id="contact-click"
                  onClick={contactClick}
                ></i>
                <h6>Recruit</h6>
              </span>
            </div>
            <section id="header">
              <h1 className="heading-main">
                <div>
                  <span id="landing-subheading">DEVELOPER</span>
                </div>

                <div id="title">
                  <TypeIt
                    options={{
                      cursor: false,
                      afterComplete: () => {
                        document.querySelector(".ti-cursor").style.display =
                          "none";
                      },
                    }}
                  >
                    <span id="title-heading">Rishabh Gupta</span>
                    <button className="btn-hire" id="typeitspan">
                      Hire Me !
                    </button>
                  </TypeIt>
                </div>
              </h1>
              <div className="hire-contact"></div>

              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z"
                  fill="#777"
                ></path>
              </svg>
            </section>

            <section id="about" className="dark">
              <div className="section-title">
                <h2>ABOUT ME</h2>
                <p>Me In a Nutshell</p>
              </div>
              <div>
                <h3>
                  Hey there, I'm{" "}
                  <TypeIt>
                    <span className="blue" style={{ color: "cyan" }}>
                      Rishabh Gupta
                    </span>
                  </TypeIt>
                </h3>
                <div className="row">
                  <div>
                    <p>
                      In short: I'm a Tech Addict, Web Dev, Fitness Freak,
                      College Student.
                    </p>
                    <p>
                      About Me I'm Rishabh Gupta, a passionate Full-Stack
                      Developer currently studying at BIT Mesra. I'm
                      enthusiastic about creating visually appealing and
                      user-friendly web experiences. With a strong command over
                      HTML, CSS, and JavaScript, along with frameworks like
                      React and Express.js, I've crafted various projects
                      ranging from personal portfolios to dynamic web
                      applications. I'm also well-versed in backend technologies
                      like Node.js and databases like MongoDB and SQL, enabling
                      me to build robust full-stack solutions. Additionally, I
                      have a keen interest in blockchain development, with
                      proficiency in Solidity. Currently seeking internship
                      opportunities to further enhance my skills and contribute
                      to impactful projects. Skills Languages: HTML, CSS,
                      JavaScript, React, Java, SQL, Python, Solidity
                      Frameworks/Libraries: React.js, Node.js, Express.js
                      Databases: MongoDB, SQL Blockchain Development: Solidity
                      🌐 Web Development 📱 Front End Design 💻 Full Stack
                      Development ⛓️ Blockchain Technology
                    </p>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span>Name:</span> Rishabh Gupta
                      </li>
                      <li>
                        <span>Contact Me: </span>hellolucifer007@gmail.com
                      </li>
                      <li>
                        <span>Age:</span> 21
                      </li>
                      <li>
                        <img
                          src="https://imagetolink.com/ib/NhHapVr1Ry.gif"
                          className="tech-gif"
                        ></img>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="skills">
              <div className="section-title">
                <h2>SKILLS</h2>
                <p>My Toolbox</p>
              </div>
              <div className="row">
                <div className="card">
                  <div className="card-title">
                    {/* <i className="fa-solid fa-pen-ruler"></i> */}
                    <i class="fa-solid fa-laptop"></i>
                    <h3>FRONT-END DEVELOPMENT</h3>
                  </div>
                  <p>
                    I utilize the foundational trio of HTML, CSS, and JavaScript
                    to craft visually appealing and interactive user interfaces.
                    Whether it's creating the structure with HTML, styling
                    elements with CSS, or adding dynamic behavior with
                    JavaScript, I ensure that every frontend aspect of my
                    projects is meticulously crafted to deliver an exceptional
                    user experience. React: Leveraging the power of React, I
                    build modern and responsive user interfaces that are not
                    only dynamic but also highly reusable. By breaking down
                    complex UIs into manageable components and efficiently
                    managing state, I ensure that my applications are both
                    scalable and maintainable.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">
                    {/* <i className="fa-solid fa-palette"></i> */}
                    <i class="fa-solid fa-code-branch"></i>
                    <h3>BACK-END DEVELOPMENT</h3>
                  </div>
                  <p>
                    Python: With Python, I develop robust backend solutions that
                    power my web applications. Whether it's building RESTful
                    APIs, handling data processing tasks, or implementing
                    business logic, Python's versatility and readability enable
                    me to create efficient and scalable backend systems.
                    Node.js, Express.js utilizing Node.js and Express.js, I
                    develop scalable server-side applications and APIs. By
                    leveraging the asynchronous, event-driven nature of Node.js
                    and the minimalist framework provided by Express.js, I
                    create high-performance backend solutions that handle a wide
                    range of client requests seamlessly.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">
                    {/* <i className="fa-solid fa-desktop"></i> */}
                    <i class="fa-solid fa-database"></i>
                    <h3>DATABASE</h3>
                  </div>
                  <p>
                    SQL (Structured Query Language): I design and manage
                    relational databases using SQL to ensure efficient data
                    storage and retrieval. From creating database schemas to
                    writing complex queries, I leverage SQL to handle structured
                    data effectively and maintain data integrity. MongoDB as a
                    proponent of NoSQL databases, I utilize MongoDB to manage
                    document-oriented data seamlessly. Whether it's storing
                    flexible data structures or performing CRUD operations on
                    JSON-like documents, MongoDB enables me to build scalable
                    and adaptable database solutions.
                  </p>
                </div>
                <div className="card">
                  <div className="card-title">
                    <i className="fa-solid fa-code"></i>
                    <h3>Utilities</h3>
                  </div>
                  <p>
                    Bootstrap, I use Bootstrap to create responsive,
                    mobile-first web applications quickly and efficiently.
                    Firebase, Leveraging Firebase's real-time database and
                    authentication services, I develop scalable web and mobile
                    applications with seamless integration across platforms.
                    Linux, I utilize Linux-based operating systems to optimize
                    development workflows, from efficient file management to
                    deployment strategies.
                  </p>
                </div>
              </div>
            </section>

            <section id="socials" className="dark">
              <div className="section-title">
                <h2>SOCIALS</h2>
                <p>Let's Connect</p>
              </div>
              <Share />
            </section>
            <section id="projects">
              <div className="section-title">
                <h2>Projects</h2>
                <p style={{ marginTop: "30px" }}>Creations</p>
              </div>
              <Projects />
            </section>
            <section id="contact" className="dark">
              <div className="section-title">
                <h2>Contact</h2>
                <p style={{ marginTop: "30px" }}>Get In Touch</p>
              </div>
              <div className="outerFormContainer" style={{marginLeft:'25%'}}>
              <ContactUs />
              </div>
            </section>
          </>
        </div>
      ) : null}
    </div>
  );
}
