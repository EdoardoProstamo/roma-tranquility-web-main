import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servizio1 from "@/assets/servizio1.jpg";
import servizio2 from "@/assets/servizio2.jpg";
import servizio3 from "@/assets/servizio3.jpg";
import servizio4 from "@/assets/servizio4.jpg";
import servizio5 from "@/assets/servizio5.jpg";

const serviceImages = [servizio1, servizio2, servizio3, servizio4, servizio5];
const serviceAlts = [
  "Taccuino e penna, simbolo di supporto psicologico individuale",
  "Pietre zen in equilibrio, gestione ansia e stress",
  "Sentiero nel bosco, percorsi di crescita personale",
  "Bussola su tavolo, sostegno nei cambiamenti",
  "Libro aperto con occhiali, consulenza e orientamento",
];

export default function Servizi() {
  const ref = useScrollReveal();

  return (
    <>
      <Header />
      <main className="pt-20" ref={ref}>
        <section className="section-py bg-background">
          <div className="container-site">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">I servizi</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Ogni percorso è unico, pensato per rispondere alle tue specifiche esigenze
                con professionalità e rispetto.
              </p>
            </div>

            <div className="space-y-16">
              {SITE_CONFIG.services.map((service, i) => (
                <article
                  key={i}
                  className={`animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    i % 2 !== 0 ? "lg:direction-rtl" : ""
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <img
                      src={serviceImages[i]}
                      alt={serviceAlts[i]}
                      className="rounded-2xl shadow-md w-full object-cover h-64 lg:h-80"
                      loading="lazy"
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                      {service.tag}
                    </span>
                    <h2 className="text-2xl md:text-3xl mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-20 animate-fade-in">
              <p className="text-muted-foreground mb-6">
                Vuoi saperne di più o prenotare un primo colloquio?
              </p>
              <a
                href="tel:+393356412261"
                className="cta-gradient inline-block text-primary-foreground px-8 py-4 rounded-full text-sm font-medium transition-opacity hover:opacity-90"
              >
                Prenota un colloquio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
