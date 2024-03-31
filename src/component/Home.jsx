import React from "react";
import TypeIt from "typeit-react";
import "./homeStyle.css";
import { useInView } from "react-intersection-observer";
import "./MyComponent";
import Contact from "./Contact";
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
                  <span id="landing-subheading">WEB DEVELOPER</span>
                </div>

                <div id="title">
                  <TypeIt>
                    <span id="title-heading">Rishabh Gupta</span>
                  </TypeIt>
                </div>
              </h1>
              <div></div>

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
              <div className="parent">
                <div className="child child-1">
                  <button className="button btn-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="#1e90ff"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                    </svg>
                  </button>
                </div>
                <div className="child child-2">
                  <button className="button btn-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      fill="#ff00ff"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </button>
                </div>
                <div className="child child-3">
                  <button className="button btn-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </button>
                </div>
                <div className="child child-4">
                  <button className="button btn-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                      fill="#4267B2"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </section>
            <section id="contact">
              <div className="section-title">
                <h2>Contact Me</h2>
                <p>Recruit Me</p>
              </div>
              <Contact />
            </section>
          </>
        </div>
      ) : null}
    </div>
  );
}
