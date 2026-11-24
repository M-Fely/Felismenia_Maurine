import "./Contact.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {
  const contactRef = useScrollReveal();

  const email = "maurinefelismenia8@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section className="contact" id="contact">
      <div className="contact-container" ref={contactRef}>
        <p className="section-label">05 — GET IN TOUCH</p>

        <h2>
          Let's build something <span>meaningful.</span>
        </h2>

        <p className="contact-description">
          I'm always open to learning opportunities, collaborations, and
          conversations about software development and technology.
        </p>

        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-email"
        >
          Get in Touch ↗
        </a>

        <div className="contact-links">
          <a
            href="https://github.com/M-Fely"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href={gmailLink} target="_blank" rel="noopener noreferrer">
            Email Me ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
