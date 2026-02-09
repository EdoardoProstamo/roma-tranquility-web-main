import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const fullAddress = `${SITE_CONFIG.address} – ${SITE_CONFIG.cap} ${SITE_CONFIG.city} (${SITE_CONFIG.province}), ${SITE_CONFIG.country}`;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-foreground">{SITE_CONFIG.fullTitle}</h3>
            <p className="text-sm opacity-75">{SITE_CONFIG.category}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-60">Contatti</h4>
            <address className="not-italic text-sm space-y-2 opacity-80">
              <p>{fullAddress}</p>
              <p>
                Tel:{" "}
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="hover:opacity-100 transition-opacity">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:opacity-100 transition-opacity">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider opacity-60">Informazioni</h4>
            <nav className="flex flex-col gap-2 text-sm opacity-80" aria-label="Link legali">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/cookie" className="hover:opacity-100 transition-opacity">Cookie Policy</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-50">
          <p>P.IVA: {SITE_CONFIG.piva}</p>
          <p className="mt-1">© {new Date().getFullYear()} {SITE_CONFIG.fullTitle}. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
