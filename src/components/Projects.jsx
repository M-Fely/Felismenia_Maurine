import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Projects.css";

function Projects() {
  const headingRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const projects = [
    {
      number: "01",
      category: "Web Application",
      name: "CEASFind",
      description:
        "A web-based lost-and-found platform designed for the Gordon College College of Education, Arts and Sciences community.",
      technologies: ["React", "Node.js", "Express", "Firestore"],
      featured: true,
      github: "https://github.com/katheasanandres/CEASFind",
      image: "/images/ceasfind.png",
    },
    {
      number: "02",
      category: "AI-Based Application",
      name: "RescueScan",
      description:
        "An AI-based image recognition system designed to support road accident reporting through image analysis and location tracking.",
      technologies: ["React", "Express", "Supabase", "AI"],
      github: "https://github.com/M-Fely/RescueScan",
      image: "/images/rescuescan.png",
    },
    {
      number: "03",
      category: "Full-Stack Application",
      name: "GC Compendium",
      description:
        "A full-stack web application developed to organize and provide access to college-related resources.",
      technologies: ["React", "Express", "MongoDB", "Firebase"],
      github: "https://github.com/M-Fely/GC_Compendium",
      image: "/images/gc-compendium.png",
    },
  ];

  const projectsRef = useRef(null);

  const scrollProjects = (direction) => {
    if (!projectsRef.current) return;

    projectsRef.current.scrollBy({
      left: direction * 544,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div
          className="projects-heading projects-heading-reveal"
          ref={headingRef}
        >
          <p className="section-label">03 — MY PROJECTS</p>
          <h2>Things I've worked on.</h2>
          <p>
            A collection of academic and development projects where I apply my
            skills and learn through building.
          </p>
        </div>

        <div className="projects-gallery">
          <div className="projects-controls">
            <span>EXPLORE PROJECTS</span>

            <div className="projects-arrows">
              <button
                onClick={() => scrollProjects(-1)}
                aria-label="Previous projects"
              >
                ←
              </button>

              <button
                onClick={() => scrollProjects(1)}
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="projects-grid"
            ref={(element) => {
              projectsRef.current = element;
              galleryRef.current = element;
            }}
          >
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.name} application screenshot`}
                    className="project-image"
                  />
                </div>

                <div className="project-info">
                  <div className="project-top">
                    <span>{project.number}</span>

                    {project.featured && (
                      <span className="featured-label">
                        FEATURED CASE STUDY
                      </span>
                    )}
                  </div>

                  <p className="project-category">{project.category}</p>

                  <h3>{project.name}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
