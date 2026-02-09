import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";

export default function Footer() {
  const fullAddress = `${SITE_CONFIG.address} – ${SITE_CONFIG.cap} ${SITE_CONFIG.city} (${SITE_CONFIG.province}), ${SITE_CONFIG.country}`;
  const phoneClean = SITE_CONFIG.phone.replace(/\s/g, "");

  return (
    <footer className="bg-foreground/95 text-primary-foreground py-16">
      <div className="mx-auto max-w-5xl px-6">

        {/* Card centrale con colore più chiaro */}
        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-8 py-10 md:px-10 md:py-12 text-center shadow-md">

          {/* Header */}
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary-foreground">
              {SITE_CONFIG.fullTitle}
            </h3>
            <p className="mt-2 text-sm md:text-base opacity-85 text-primary-foreground">
              {SITE_CONFIG.category}
            </p>
          </div>

          {/* Contenuto centrale */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 md:grid-cols-2 gap-10 text-sm">

            {/* Contatti */}
            <div className="text-center">
              <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-4">
                Contatti
              </h4>

              <address className="not-italic space-y-3 leading-relaxed opacity-90">
                <p>{fullAddress}</p>

                <p>
                  Tel:{" "}
                  <a
                    href={`tel:${phoneClean}`}
                    className="underline underline-offset-4 hover:opacity-100 transition-opacity"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </p>

                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="underline underline-offset-4 hover:opacity-100 transition-opacity"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
              </address>
            </div>

            {/* Link legali */}
            <div className="text-center">
              <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-4">
                Informazioni
              </h4>

              <nav
                className="flex flex-col items-center gap-3 opacity-90"
                aria-label="Link legali"
              >
                <Link
                  to="/privacy"
                  className="underline underline-offset-4 hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/cookie"
                  className="underline underline-offset-4 hover:opacity-100 transition-opacity"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>

          {/* Parte legale finale */}
          <div className="mt-12 border-t border-primary-foreground/20 pt-6">
            <p className="text-xs opacity-65">
              P.IVA: {SITE_CONFIG.piva}
            </p>

            <p className="mt-1 text-xs opacity-55">
              © {new Date().getFullYear()} {SITE_CONFIG.fullTitle}. Tutti i diritti riservati.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
