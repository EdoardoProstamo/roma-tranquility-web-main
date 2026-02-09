import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Servizi", to: "/servizi" },
  { label: "Contatti", to: "/contatti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-260 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex flex-col leading-tight" aria-label="Home">
          <span className="text-base font-semibold text-foreground" style={{ fontFamily: "Georgia, serif" }}>
            {SITE_CONFIG.name}
          </span>
          <span className="text-xs text-black">{SITE_CONFIG.title}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors duration-200 hover:text-primary ${location.pathname === link.to ? "text-primary font-medium" : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
            className="cta-gradient text-primary-foreground px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
          >
            Chiama ora
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container-site py-4 flex flex-col gap-3" aria-label="Navigazione mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base py-2 transition-colors ${location.pathname === link.to ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="cta-gradient text-primary-foreground px-5 py-3 rounded-full text-sm font-medium text-center mt-2"
            >
              Chiama ora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
