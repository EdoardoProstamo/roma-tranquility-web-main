import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contatti() {
  const ref = useScrollReveal();
  const fullAddress = `${SITE_CONFIG.address} – ${SITE_CONFIG.cap} ${SITE_CONFIG.city} (${SITE_CONFIG.province}), ${SITE_CONFIG.country}`;

  return (
    <>
      <Header />
      <main className="pt-20" ref={ref}>
        <section className="section-py bg-background">
          <div className="container-site max-w-3xl mx-auto">
            <div className="text-center mb-14 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">Contatti</h1>
              <p className="text-muted-foreground text-lg">
                Per informazioni o per prenotare un primo colloquio conoscitivo.
              </p>
            </div>

            <div className="animate-fade-in bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Indirizzo</h2>
                <p className="text-foreground">{fullAddress}</p>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-primary text-sm font-medium hover:underline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Apri su Google Maps
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Telefono</h2>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email</h2>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-foreground hover:text-primary transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Orari di ricevimento</h2>
                <p className="text-foreground">{SITE_CONFIG.hours}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
