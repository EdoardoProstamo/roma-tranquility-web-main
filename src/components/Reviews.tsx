import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE_CONFIG } from "@/config/site";

export default function Reviews() {
  const ref = useScrollReveal();

  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ));

  return (
    <section className="section-py bg-background" ref={ref}>
      <div className="container-site text-center max-w-2xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-4">Valutazioni dei pazienti</h2>
          <p className="text-muted-foreground mb-8">
            La fiducia dei pazienti è il fondamento del mio lavoro. Ogni percorso è unico,
            e il feedback ricevuto è testimonianza di un impegno condiviso.
          </p>
        </div>

        <div className="animate-fade-in bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-center gap-1 mb-4">
            {stars}
          </div>
          <p className="text-2xl font-semibold text-foreground mb-1">
            Valutazione media: <span className="text-primary">4,9</span> su 5,0
          </p>
          <p className="text-sm text-muted-foreground mb-8">(su Y recensioni)</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Le valutazioni riflettono l'esperienza complessiva dei pazienti e il loro
            percorso di benessere psicologico.
          </p>
          <a
            href={SITE_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Consulta le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  );
}
