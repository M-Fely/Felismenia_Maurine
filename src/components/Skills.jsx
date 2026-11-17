import useScrollReveal from "../hooks/useScrollReveal";
import "./Skills.css";

function Skills() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Runtime",
      skills: ["React", "Node.js", "Express", "Vite"],
    },
    {
      title: "Databases & Services",
      skills: ["MongoDB", "Firebase Firestore", "Supabase"],
    },
    {
      title: "Tools & Environment",
      skills: ["Git", "GitHub", "VS Code", "Bash", "Figma"],
    },
  ];

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

        <div className="skills-grid reveal reveal-up" ref={gridRef}>
          {skillGroups.map((group, index) => (
            <div className="skills-card" key={index}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
