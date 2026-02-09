import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import servizio1 from "@/assets/servizio1.jpg";
import servizio2 from "@/assets/servizio2.jpg";
import servizio3 from "@/assets/servizio3.jpg";
import servizio4 from "@/assets/servizio4.jpg";
import servizio5 from "@/assets/servizio5.jpg";

const serviceImages = [servizio1, servizio2, servizio3, servizio4, servizio5];
const serviceAlts = [
  "Taccuino e penna su scrivania di legno, simbolo di supporto psicologico individuale",
  "Pietre zen in equilibrio, simbolo di gestione ansia e stress",
  "Sentiero nel bosco illuminato dal sole, simbolo di crescita personale",
  "Bussola su tavolo, simbolo di orientamento nei cambiamenti di vita",
  "Libro aperto con occhiali su poltrona, simbolo di consulenza e orientamento",
];

export default function ServicesPreview() {
  const ref = useScrollReveal();

  return (
    <section className="section-py bg-background" id="servizi" ref={ref}>
      <div className="container-site">
        <div className="text-center mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-4">I servizi offerti</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Percorsi personalizzati per il tuo benessere psicologico, con un approccio
            professionale e rispettoso della tua unicità.
          </p>
        </div>

        <div className="space-y-6">
          {SITE_CONFIG.services.map((service, i) => (
            <article
              key={i}
              className="animate-fade-in flex flex-col md:flex-row items-stretch bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-260"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="md:w-48 lg:w-56 flex-shrink-0">
                <img
                  src={serviceImages[i]}
                  alt={serviceAlts[i]}
                  className="w-full h-48 md:h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link
            to="/servizi"
            className="inline-block border border-primary text-primary px-8 py-3 rounded-full text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Tutti i servizi
          </Link>
        </div>
      </div>
    </section>
  );
}
