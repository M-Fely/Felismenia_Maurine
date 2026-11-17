import "./CaseStudy.css";
import useScrollReveal from "../hooks/useScrollReveal";

function CaseStudy() {
  const headingRef = useScrollReveal();
  const overviewRef = useScrollReveal();
  const problemRef = useScrollReveal();
  const contributionsRef = useScrollReveal();
  const implementationRef = useScrollReveal();
  const testingRef = useScrollReveal();
  const challengesRef = useScrollReveal();
  const conclusionRef = useScrollReveal();
  return (
    <section className="case-study" id="case-study">
      <div className="case-study-container">
        <div className="case-study-heading reveal reveal-left" ref={headingRef}>
          {" "}
          <p className="section-label">04 — FEATURED CASE STUDY</p>
          <h2>Behind the project.</h2>
          <p>
            A closer look at my contributions, development process, and
            experience building CEASFind.
          </p>
        </div>

        <div
          className="case-study-overview reveal reveal-scale"
          ref={overviewRef}
        >
          {" "}
          <div className="case-study-intro">
            <p className="case-study-label">THE PROJECT</p>
            <h3>CEASFind</h3>

            <p>
              A web-based lost-and-found platform developed for the Gordon
              College College of Education, Arts and Sciences community. It
              provides a centralized way to report lost and found items and
              manage claims.
            </p>

            <div className="case-study-meta">
              <div>
                <span>MY ROLE</span>
                <h4>Backend Developer</h4>
                <p>System Analyst & React Migration Coordinator</p>
              </div>

              <div>
                <span>PROJECT TYPE</span>
                <h4>Team Project</h4>
              </div>

              <div>
                <span>DURATION</span>
                <h4>More than 4 months</h4>
              </div>
            </div>
          </div>
          <div className="case-study-image-wrap">
            <img
              src="/images/ceasfind.png"
              alt="CEASFind application dashboard screenshot"
              className="case-study-image"
            />
            <span>CEASFIND — WEB APPLICATION</span>
          </div>
        </div>

        <div className="case-study-block reveal reveal-right" ref={problemRef}>
          {" "}
          <p className="case-study-label">01 — THE PROBLEM</p>
          <h3>Making lost-and-found management more organized.</h3>
          <div className="case-study-problem-grid">
            <div>
              <span>THE CHALLENGE</span>
              <h4>Scattered information.</h4>
              <p>
                Lost-and-found reports and claim requests can become difficult
                to track when information is handled through separate
                communication channels.
              </p>
            </div>

            <div>
              <span>THE GOAL</span>
              <h4>One centralized platform.</h4>
              <p>
                Develop a platform where the CEAS community can report lost and
                found items, browse listings, and manage item claims in one
                place.
              </p>
            </div>
          </div>
        </div>

        <div
          className="case-study-block reveal reveal-up"
          ref={contributionsRef}
        >
          {" "}
          <p className="case-study-label">02 — MY CONTRIBUTIONS</p>
          <h3>What I worked on.</h3>
          <div className="case-study-contributions">
            <div>
              <h4>Backend Development</h4>
              <p>
                Developed backend functionality using Node.js and Express,
                worked with Firebase Firestore, and integrated application
                operations through API routes.
              </p>
            </div>

            <div>
              <h4>Authentication & Notifications</h4>
              <p>
                Worked on Firebase Google Authentication with institutional
                email restrictions and SMTP email notifications for
                claim-related activities.
              </p>
            </div>

            <div>
              <h4>System Analysis</h4>
              <p>
                Helped analyze system requirements, application workflows, and
                the interaction between system features.
              </p>
            </div>

            <div>
              <h4>React Migration Coordination</h4>
              <p>
                Coordinated the gradual migration of existing frontend pages
                into React while helping preserve the existing interface and
                functionality.
              </p>
            </div>
          </div>
        </div>

        <div
          className="case-study-block reveal reveal-up"
          ref={implementationRef}
        >
          {" "}
          <p className="case-study-label">03 — TECHNICAL IMPLEMENTATION</p>
          <h3>How the system was built.</h3>
          <p>
            CEASFind combines a React frontend, an Express backend, and Firebase
            services to support its lost-and-found reporting and item claim
            workflows.
          </p>
          <div className="case-study-implementation">
            <div>
              <span>01 / FRONTEND</span>
              <h4>React & Vite</h4>
              <p>
                Coordinated the gradual migration of existing frontend pages
                into React while helping maintain the existing interface and
                functionality.
              </p>
            </div>

            <div>
              <span>02 / BACKEND</span>
              <h4>Node.js & Express</h4>
              <p>
                Developed backend functionality and API routes to connect
                frontend operations with application services.
              </p>
            </div>

            <div>
              <span>03 / DATABASE</span>
              <h4>Firebase Firestore</h4>
              <p>
                Worked with Firestore to support the storage and retrieval of
                application data.
              </p>
            </div>

            <div>
              <span>04 / AUTHENTICATION & EMAIL</span>
              <h4>Firebase Auth & SMTP</h4>
              <p>
                Worked on Google Authentication with institutional email
                restrictions and SMTP notifications for claim-related
                activities.
              </p>
            </div>
          </div>
          <div className="case-study-tech">
            <span>React</span>
            <span>Vite</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Firebase Firestore</span>
            <span>Firebase Authentication</span>
            <span>SMTP</span>
          </div>
        </div>

        <div className="case-study-block reveal reveal-left" ref={testingRef}>
          {" "}
          <p className="case-study-label">04 — TESTING & LEARNINGS</p>
          <h3>Validating functionality and learning through development.</h3>
          <div className="case-study-testing">
            <div>
              <span>TECHNICAL TESTING</span>
              <h4>Checking application behavior.</h4>
              <p>
                Performed technical checks and browser testing during
                development to examine application behavior, identify issues,
                and verify that frontend operations interacted correctly with
                backend services.
              </p>
            </div>

            <div>
              <span>KEY LEARNINGS</span>
              <h4>Understanding full-stack development.</h4>
              <p>
                Gained practical experience in API development, database
                integration, authentication, email notifications, and
                coordinating frontend changes within a collaborative project.
              </p>
            </div>
          </div>
        </div>

        <div
          className="case-study-block reveal reveal-right"
          ref={challengesRef}
        >
          {" "}
          <p className="case-study-label">05 — CHALLENGES & NEXT STEPS</p>
          <h3>Areas for continued improvement.</h3>
          <div className="case-study-testing">
            <div>
              <span>DEVELOPMENT CHALLENGE</span>
              <h4>Maintaining frontend consistency.</h4>
              <p>
                Coordinating the gradual migration of existing frontend pages
                into React required attention to consistency, functionality, and
                communication between frontend and backend operations.
              </p>
            </div>

            <div>
              <span>FUTURE IMPROVEMENTS</span>
              <h4>Further system refinement.</h4>
              <p>
                Future development could focus on improving the user interface,
                expanding testing, strengthening application validation, and
                refining the item reporting and claim workflows.
              </p>
            </div>
          </div>
        </div>

        <div
          className="case-study-conclusion reveal reveal-scale"
          ref={conclusionRef}
        >
          {" "}
          <p className="case-study-label">KEY TAKEAWAY</p>
          <h3>Building a system is more than writing code.</h3>
          <p>
            CEASFind strengthened my understanding of full-stack application
            development and gave me experience contributing to a collaborative
            project from system analysis through implementation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudy;
