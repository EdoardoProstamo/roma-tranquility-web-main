import ctaImg from "@/assets/cta.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt="Alba su un prato verde, simbolo di un nuovo inizio"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-site relative z-10 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4" style={{ color: "white" }}>
          Il primo passo è il più importante
        </h2>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-8" style={{ color: "white" }}>
          Ogni cambiamento inizia con la decisione di chiedere aiuto.
          Sono qui per accompagnarti.
        </p>
        <a
          href="tel:+393356412261"
          className="cta-gradient inline-block text-primary-foreground px-8 py-4 rounded-full text-base font-medium transition-opacity hover:opacity-90 shadow-lg"
        >
          Contattami oggi
        </a>
      </div>
    </section>
  );
}
