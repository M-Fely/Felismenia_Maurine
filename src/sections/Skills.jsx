import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Skills.css";

function Skills() {
  const headingRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const skillsRef = useRef(null);

  const skillGroups = [
    {
      number: "01",
      title: "Programming Languages",
      skills: ["JavaScript", "Python"],
    },
    {
      number: "02",
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
    },
    {
      number: "03",
      title: "Frameworks & Runtime",
      skills: ["React", "Node.js", "Express", "Vite"],
    },
    {
      number: "04",
      title: "Databases & Services",
      skills: ["MongoDB", "MySQL", "Firebase Firestore", "Supabase"],
    },
    {
      number: "05",
      title: "Tools & Environment",
      skills: ["Git", "GitHub", "VS Code", "Bash", "Figma"],
    },
  ];

  const scrollSkills = (direction) => {
    if (!skillsRef.current) return;

    const container = skillsRef.current;
    const card = container.querySelector(".skills-card");

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading reveal reveal-left" ref={headingRef}>
          <p className="section-label">02 — MY SKILLS</p>
          <h2>Technologies I work with.</h2>
          <p>
            Tools and technologies I've used while building projects and
            developing my technical foundation.
          </p>
        </div>

        <div className="skills-gallery">
          <div className="skills-controls">
            <span>EXPLORE SKILLS</span>

            <div className="skills-arrows">
              <button
                onClick={() => scrollSkills(-1)}
                aria-label="Previous skills"
              >
                ←
              </button>

              <button onClick={() => scrollSkills(1)} aria-label="Next skills">
                →
              </button>
            </div>
          </div>

          <div
            className="skills-grid reveal reveal-up"
            ref={(element) => {
              skillsRef.current = element;
              galleryRef.current = element;
            }}
          >
            {skillGroups.map((group) => (
              <article className="skills-card" key={group.number}>
                <div className="skills-card-info">
                  <span className="skills-number">{group.number}</span>

                  <h3>{group.title}</h3>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
