import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-grid">
            {experience.map((job) => (
              <div className="experience-card" key={job.company}>
                <div className="experience-card__header">
                  <span className="experience-card__location">{job.location}</span>
                  <small className="experience-card__date">{job.date}</small>
                </div>
                <h3 className="experience-card__title">{job.company}</h3>
                <div className="experience-card__role">{job.role}</div>
                <ul className="experience-card__achievements">
                  {job.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="experience-card__technologies">
                  <div className="tech-tags">
                    {job.tech.map((t) => (
                      <span className="tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
