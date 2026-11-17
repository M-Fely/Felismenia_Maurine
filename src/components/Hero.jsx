import useScrollReveal from "../hooks/useScrollReveal";
import "./Hero.css";

function Hero() {
  const heroRef = useScrollReveal();

  return (
    <section className="hero reveal" id="home" ref={heroRef}>
      <div className="hero-content">
        <p className="hero-intro">HELLO, I'M A COMPUTER SCIENCE STUDENT</p>

        <h1>
          Building systems.
          <br />
          <span>Solving problems.</span>
        </h1>

        <p className="hero-description">
          I'm an aspiring backend developer interested in building reliable
          applications, exploring cybersecurity, and continuously learning
          through real-world projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-primary-btn">
            Explore My Work ↗
          </a>

          <a href="#contact" className="hero-secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-interests">
          <span>BACKEND DEVELOPMENT</span>
          <span>CYBERSECURITY</span>
          <span>SOFTWARE ENGINEERING</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
