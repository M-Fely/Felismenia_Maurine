import "./About.css";
import useScrollReveal from "../hooks/useScrollReveal";

function About() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const detailsRef = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-heading reveal reveal-left" ref={headingRef}>
          <p className="section-label">01 — ABOUT ME</p>
          <h2>A little about me.</h2>
        </div>

        <div className="about-content reveal reveal-right" ref={contentRef}>
          <p className="about-description">
            I'm a Computer Science student with a growing interest in backend
            development and cybersecurity. I enjoy understanding how systems
            work behind the scenes and building applications that solve
            practical problems.
          </p>

          <p className="about-description">
            Through academic and personal projects, I've been developing my
            skills in software engineering, working with APIs, databases, and
            application development. I'm continuously learning and looking for
            opportunities to grow as a developer.
          </p>
        </div>

        <div className="about-details reveal reveal-up" ref={detailsRef}>
          <div className="about-card">
            <span>EDUCATION</span>
            <h3>BS Computer Science</h3>
          </div>

          <div className="about-card">
            <span>PRIMARY FOCUS</span>
            <h3>Backend Development</h3>
          </div>

          <div className="about-card">
            <span>AREA OF INTEREST</span>
            <h3>Cybersecurity</h3>
          </div>

          <div className="about-card">
            <span>CURRENT STATUS</span>
            <h3>Student Developer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
