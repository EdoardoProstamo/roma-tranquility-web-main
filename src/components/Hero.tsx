import { Link } from "react-router-dom";
import heroImg from "@/assets/hero.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[85vh] flex items-center" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Studio di psicologia accogliente con poltrona, libreria e luce naturale"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-site relative z-10 py-24 md:py-32">
        <div className="max-w-xl bg-card/92 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in visible">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            Psicologo a Roma
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Dott. Nicola Francesco Milano
          </h1>
          <p className="text-muted-foreground text-white md:text-lg mb-8 leading-relaxed">
            Un percorso di ascolto e comprensione per ritrovare il benessere psicologico.
            Ogni persona merita uno spazio sicuro in cui essere ascoltata.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+393356412261"
              className="cta-gradient text-primary-foreground px-7 py-3 rounded-full text-sm font-medium text-center transition-opacity hover:opacity-90"
            >
              Prenota un colloquio
            </a>
            <Link
              to="/servizi"
              className="border border-border bg-card text-foreground px-7 py-3 rounded-full text-sm font-medium text-center transition-colors hover:bg-secondary"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
