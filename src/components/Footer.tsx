import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i className="fa-solid fa-angle-up fa-2x" aria-hidden />
        </a>
        <div className="social-links">
          {site.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
              <i className={`${s.icon} fa-inverse`} />
            </a>
          ))}
        </div>
        <hr />
        <p className="footer__text">
          © 2026 - Developed by{" "}
          <a href="https://github.com/MohsanCodes" target="_blank" rel="noreferrer">
            Mohsan Iqbal
          </a>
        </p>
        <p className="mt-3 pt-3" />
      </div>
    </footer>
  );
}
