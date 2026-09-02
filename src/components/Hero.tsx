import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import HeroTerminal from "@/components/HeroTerminal";
import { site } from "@/data/site";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
} as const;

const ctaClasses = {
  hero: "cta-btn cta-btn--hero",
  secondary: "cta-btn cta-btn--secondary",
  fire: "cta-btn cta-btn--fire",
} as const;

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__gradient" />
      </div>
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">{site.greeting}</div>
            <h1 className="hero__name">
              <span className="hero__name-highlight">{site.firstName}</span>
              <br />
              <span className="hero__name-highlight">{site.lastName}</span>
            </h1>
            <p className="hero__greeting hero__role">{site.role}</p>
            <HeroTerminal />
            {site.heroDescriptions.map((description) => (
              <p className="hero__description" key={description.parts.map((p) => ("text" in p ? p.text : p.strong)).join("")}>
                {description.parts.map((part, index) =>
                  "strong" in part ? (
                    <strong key={index}>{part.strong}</strong>
                  ) : (
                    <span key={index}>{part.text}</span>
                  )
                )}
              </p>
            ))}
            <div className="hero__cta">
              {site.heroCtas.map((cta) => {
                const className = ctaClasses[cta.variant];
                const content = (
                  <>
                    {cta.label}
                    {"badge" in cta && cta.badge ? (
                      <span className="cta-btn__badge">{cta.badge}</span>
                    ) : null}
                  </>
                );

                if (cta.href.startsWith("#")) {
                  return (
                    <a key={cta.label} className={className} href={cta.href}>
                      {content}
                    </a>
                  );
                }

                return (
                  <Link
                    key={cta.label}
                    className={className}
                    href={cta.href}
                    {...("external" in cta && cta.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
            <div className="hero__social">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    aria-label={social.label}
                    {...(isEmail ? {} : { target: "_blank", rel: "noreferrer" })}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__photo-wrapper">
              <div className="hero__photo-glow" />
              <Image
                src={site.heroImage}
                alt={site.name}
                width={400}
                height={400}
                className="hero__photo"
                priority
              />
              <div className="hero__badge">
                <span className="hero__badge-text">{site.badge}</span>
              </div>
            </div>
            <div className="hero__stats">
              {site.stats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <div className="hero__stat-number">{stat.number}</div>
                  <div className="hero__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
