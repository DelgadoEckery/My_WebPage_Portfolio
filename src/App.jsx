import { useState } from "react";
import "./App.css";

const github = "https://github.com/DelgadoEckery";
const projects = [
  {
    number: "01",
    name: "Drugs Medicine Inventory System",
    type: "Inventory management system",
    description: "A repository for a medicine inventory system project.",
    repo: "https://github.com/DelgadoEckery/Drugs_Medicine_Inventory_System.git",
    tag: "View repository",
    visual: "inventory-visual",
  },
  {
    number: "02",
    name: "CCS112 Application Programming Interfaces",
    type: "Course project",
    description:
      "Programming Interfaces coursework and project files for CCS112.",
    repo: "https://github.com/DelgadoEckery/CCS112_Application-_Programming-_Interfaces.git",
    tag: "View repository",
    visual: "api-visual",
  },
  {
    number: "03",
    name: "React Website",
    type: "Web development",
    description: "A website project built with React.",
    repo: "https://github.com/DelgadoEckery/react-website.git",
    tag: "View repository",
    visual: "react-visual",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      <path d={diagonal ? "M5 15 15 5M6 5h9v9" : "M3 10h13M11 5l5 5-5 5"} />
    </svg>
  );
}

function ProjectVisual({ visual }) {
  if (visual === "inventory-visual")
    return (
      <div className="project-visual inventory-visual" aria-hidden="true">
        <div className="inventory-window">
          <div className="inventory-sidebar">
            <b>
              MED<span>+</span>
            </b>
            <i>Overview</i>
            <i>Inventory</i>
            <i>Suppliers</i>
            <i>Reports</i>
          </div>
          <div className="inventory-main">
            <div className="preview-top">
              <b>Inventory</b>
              <span>Search medicines...</span>
            </div>
            <div className="inventory-stats">
              <div>
                <small>Products</small>
                <b>248</b>
              </div>
              <div>
                <small>Low stock</small>
                <b>12</b>
              </div>
              <div>
                <small>Categories</small>
                <b>08</b>
              </div>
            </div>
            <div className="inventory-table">
              <div>
                MEDICINE <span>QUANTITY</span>
                <span>STATUS</span>
              </div>
              <p>
                Amoxicillin <span>120 units</span>
                <i>In stock</i>
              </p>
              <p>
                Paracetamol <span>18 units</span>
                <i>Low stock</i>
              </p>
              <p>
                Vitamin C <span>84 units</span>
                <i>In stock</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  if (visual === "api-visual")
    return (
      <div className="project-visual api-visual" aria-hidden="true">
        <div className="api-window">
          <div className="api-top">
            <span />
            <span />
            <span /> <b>API Playground</b>
          </div>
          <div className="api-sidebar">
            <i>Collections</i>
            <i>GET　/ users</i>
            <i className="active">POST / users</i>
            <i>GET　/ items</i>
            <i>PUT　/ items/:id</i>
          </div>
          <div className="api-content">
            <small>REQUEST BUILDER</small>
            <div className="api-request">
              <b>POST</b>
              <span>api.example.dev/users</span>
              <i>Send</i>
            </div>
            <div className="api-code">
              <span>01</span> {"{"}
              <br />
              <span>02</span>　"name": "student",
              <br />
              <span>03</span>　"active": true
              <br />
              <span>04</span> {"}"}
            </div>
            <div className="api-response">
              200 OK <span>Response received</span>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="project-visual react-visual" aria-hidden="true">
      <div className="react-browser">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <i>my-react-website.dev</i>
        </div>
        <div className="react-page">
          <div className="react-nav">
            <b>
              studio<span>.</span>
            </b>
            <i>Work　About　Contact</i>
          </div>
          <div className="react-hero-copy">
            <small>CREATIVE STUDIO / EST. 2024</small>
            <b>
              Ideas into
              <br />
              <em>experiences.</em>
            </b>
            <span>Digital things for a changing world.</span>
            <i>EXPLORE WORK　+</i>
          </div>
          <div className="react-shape shape-one" />
          <div className="react-shape shape-two" />
          <div className="react-foot">SELECTED PROJECTS　　01 — 04</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Delgado home">
          ev<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#journey" onClick={closeMenu}>
            Journey
          </a>
          <a
            className="nav-contact"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon diagonal />
          </a>
        </nav>
      </header>
      <section className="hero section-shell" id="top">
        <div className="hero-kicker">
          <span className="availability-dot" /> THIRD YEAR COMPUTER SCIENCE
          STUDENT{" "}
          <span className="kicker-location">
            BUILDING AND LEARNING, ONE PROJECT AT A TIME
          </span>
        </div>
        <h1>
          Delgado
          <br />
          <span className="serif-word">.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Computer Science student exploring software development through
            hands-on projects and curious problem solving.
          </p>
          <a href="#work" className="text-link">
            Explore my repositories{" "}
            <span className="round-arrow">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <span>*</span>
          </div>
          <span className="art-label label-one">LEARN BY BUILDING</span>
          <span className="art-label label-two">CURIOUS BY NATURE</span>
          <span className="art-coordinate">CS / YEAR 03</span>
        </div>
        <div className="hero-index">
          <span>GITHUB PROJECTS</span>
          <span>COMPUTER SCIENCE</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>
      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROJECTS ON GITHUB</span>
            <h2>
              Things I have <span className="serif-word">built.</span>
            </h2>
          </div>
          <p>
            A few projects from my computer science studies and web development
            practice.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card ${project.visual}`}
              key={project.number}
            >
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`Open ${project.name} GitHub repository`}
              >
                <ProjectVisual visual={project.visual} />
                <div className="project-meta">
                  <div className="project-title">
                    <span className="project-number">{project.number}</span>
                    <div>
                      <h3>{project.name}</h3>
                      <span>{project.type}</span>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <span className="project-tag">
                    {project.tag}
                    <span className="project-arrow">
                      <ArrowIcon diagonal />
                    </span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <p className="project-disclaimer">
          Open a project to view its source code on GitHub.
        </p>
      </section>
      <section className="about-section" id="about">
        <div className="about-inner section-shell">
          <div className="about-heading">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <div className="about-stamp" aria-hidden="true">
              <span>
                LEARN
                <br />
                BUILD
                <br />
                REPEAT
              </span>
              <b>*</b>
            </div>
          </div>
          <div className="about-copy">
            <h2>
              Learning to build
              <br />
              <span className="serif-word">useful things.</span>
            </h2>
            <p className="about-lede">
              I am <strong>Delgado </strong>, a third year Computer Science
              student.
            </p>
            <p>
              I use projects to put what I learn into practice, from application
              programming interfaces to inventory systems and React websites. I
              am growing my skills one build at a time.
            </p>
            <div className="about-facts">
              <div>
                <span>01 / STUDYING</span>
                <b>Computer Science</b>
              </div>
              <div>
                <span>02 / CURRENTLY</span>
                <b>Third year student</b>
              </div>
              <div>
                <span>03 / LEARNING</span>
                <b>By making projects</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section section-shell" id="journey">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MY LEARNING JOURNEY</span>
            <h2>
              Study, practice,
              <br />
              <span className="serif-word">repeat.</span>
            </h2>
          </div>
          <p>My GitHub is where I keep the projects I work on as I learn.</p>
        </div>
        <div className="service-list">
          <a
            className="service-row journey-row"
            href={projects[0].repo}
            target="_blank"
            rel="noreferrer"
          >
            <span>01</span>
            <h3>Medicine inventory system</h3>
            <p>Explore the project repository and source code.</p>
            <span className="service-plus">
              <ArrowIcon diagonal />
            </span>
          </a>
          <a
            className="service-row journey-row"
            href={projects[1].repo}
            target="_blank"
            rel="noreferrer"
          >
            <span>02</span>
            <h3>Application programming interfaces</h3>
            <p>Open the CCS112 project files on GitHub.</p>
            <span className="service-plus">
              <ArrowIcon diagonal />
            </span>
          </a>
          <a
            className="service-row journey-row"
            href={projects[2].repo}
            target="_blank"
            rel="noreferrer"
          >
            <span>03</span>
            <h3>React website</h3>
            <p>See the website project source on GitHub.</p>
            <span className="service-plus">
              <ArrowIcon diagonal />
            </span>
          </a>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-inner section-shell">
          <span className="eyebrow">FIND ME ON GITHUB</span>
          <h2>
            See what I am
            <br />
            <span className="serif-word">working on.</span>
          </h2>
          <div className="contact-bottom">
            <a
              className="contact-email"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/DelgadoEckery <ArrowIcon diagonal />
            </a>
            <p>
              Browse my repositories and follow along as I keep learning and
              building.
            </p>
          </div>
          <span className="contact-spark" aria-hidden="true">
            *
          </span>
        </div>
      </section>
      <footer className="site-footer section-shell">
        <a className="wordmark" href="#top">
          ev<span>.</span>
        </a>
        <span>DELGADO, ECKERY VRAIME / COMPUTER SCIENCE STUDENT</span>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            GITHUB PROFILE <ArrowIcon diagonal />
          </a>
        </div>
        <span>2026</span>
      </footer>
    </main>
  );
}

export default App;
