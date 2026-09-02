import { contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-card">
            <div className="contact-card__content">
              <p className="contact-card__text">
                Have a visionary project or a challenging problem to solve? I&apos;m currently{" "}
                <strong>open to high-impact collaborations</strong> and engineering leadership
                roles. Let&apos;s build the future together.
              </p>
              <div className="contact-info">
                <div className="contact-info__item">
                  <i className="fa-solid fa-envelope contact-info__icon" />
                  <div className="contact-info__details">
                    <span className="contact-info__label">Email</span>
                    <a href={`mailto:${contact.email}`} className="contact-info__value">
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="fa-solid fa-phone contact-info__icon" />
                  <div className="contact-info__details">
                    <span className="contact-info__label">Phone</span>
                    <a href={contact.phoneHref} className="contact-info__value">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="fa-solid fa-location-dot contact-info__icon" />
                  <div className="contact-info__details">
                    <span className="contact-info__label">Location</span>
                    <span className="contact-info__value">{contact.location}</span>
                  </div>
                </div>
                <div className="contact-info__item">
                  <i className="fa-solid fa-globe contact-info__icon" />
                  <div className="contact-info__details">
                    <span className="contact-info__label">Website</span>
                    <a href={contact.website.href} target="_blank" rel="noreferrer" className="contact-info__value">
                      {contact.website.label}
                    </a>
                  </div>
                </div>
                <div className="contact-info__item contact-info__item--full contact-info__item--whatsapp-active">
                  <i className="fa-brands fa-whatsapp contact-info__icon contact-info__icon--whatsapp" />
                  <div className="contact-info__details">
                    <span className="contact-info__label">WhatsApp</span>
                    <a href={contact.whatsapp.href} target="_blank" rel="noreferrer" className="contact-info__value">
                      {contact.whatsapp.label}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-actions">
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href={`https://mail.google.com/mail/?view=cm&fs=1&to=:${contact.email}`}>
                  <i className="fa-solid fa-envelope" /> Send Email
                </a>
                <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--secondary" href={contact.linkedin}>
                  <i className="fa-brands fa-linkedin-in" /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
