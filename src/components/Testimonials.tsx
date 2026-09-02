import { testimonials } from "@/data/site";

function TestimonialCard({
  name,
  title,
  quote,
  relationship,
}: {
  name: string;
  title: string;
  quote: string;
  relationship: string;
}) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__header">
        <div className="testimonial-card__info">
          <h3 className="testimonial-card__name">{name}</h3>
          <span className="testimonial-card__title">{title}</span>
        </div>
      </div>
      <div className="testimonial-card__content">
        <p className="testimonial-card__quote">&quot;{quote}&quot;</p>
      </div>
      <div className="testimonial-card__footer">
        <span className="testimonial-card__relationship">{relationship}</span>
        <i className="fa-brands fa-linkedin-in testimonial-card__linkedin-logo" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section id="testimonials">
      <div className="container-fluid">
        <div className="testimonials__header">
          <div className="testimonials__badge">
            <i className="fa-brands fa-linkedin-in" /> <span>LinkedIn Endorsements</span>
          </div>
          <h2 className="section-title">Expert Endorsements</h2>
          <p className="section-description">
            Professional recognition from industry colleagues, team members, and engineering leaders
            around the world.
          </p>
          <div className="testimonials__meta">
            <div className="testimonials__meta-item">
              <span className="testimonials__meta-number">9+</span>
              <span className="testimonials__meta-label">Reviews</span>
            </div>
            <div className="testimonials__meta-divider" />
            <div className="testimonials__meta-item">
              <span className="testimonials__meta-number">4+</span>
              <span className="testimonials__meta-label">Companies</span>
            </div>
            <div className="testimonials__meta-divider" />
            <div className="testimonials__meta-item">
              <span className="testimonials__meta-number">★ 5</span>
              <span className="testimonials__meta-label">Rating</span>
            </div>
          </div>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-track">
            {track.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
