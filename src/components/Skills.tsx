import { skillCategories } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-wrapper">
          {skillCategories.map((category) => (
            <div className="skills-category" key={category.title}>
              <h3 className="skills-category__title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <i
                      className={`${skill.icon} skill-card__icon`}
                      data-skill-color={skill.color}
                    />
                    <span className="skill-card__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
