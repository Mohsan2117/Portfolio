import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                key={project.title}
                href={"href" in project ? project.href : undefined}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <span className={`project-card__badge ${project.badgeClass}`}>{project.badge}</span>
                </div>
                <p className="project-card__description">{project.description}</p>
                <ul className="project-card__technologies">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
