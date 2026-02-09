import { useScrollReveal } from "@/hooks/useScrollReveal";
import dettaglioImg from "@/assets/dettaglio.jpg";

const strengths = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Ascolto autentico",
    description: "Ogni percorso inizia dall'ascolto. Creo uno spazio di fiducia dove ogni parola trova accoglienza e rispetto.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Riservatezza garantita",
    description: "La privacy è un pilastro fondamentale. Tutto ciò che viene condiviso resta in uno spazio protetto e confidenziale.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Approccio scientifico",
    description: "Utilizzo metodologie validate dalla ricerca scientifica, aggiornandomi costantemente sulle ultime evidenze.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Percorsi su misura",
    description: "Non esistono soluzioni uguali per tutti. Ogni percorso è costruito insieme, rispettando tempi e bisogni individuali.",
  },
];

export default function Strengths() {
  const ref = useScrollReveal();

  return (
    <section className="section-py bg-secondary" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 animate-fade-in">Come lavoro</h2>
            <p className="text-muted-foreground mb-10 animate-fade-in leading-relaxed">
              Il mio approccio si fonda sull'empatia, la competenza e il rispetto per
              la persona. Ogni incontro è un passo verso una maggiore consapevolezza di sé.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((s, i) => (
                <div
                  key={i}
                  className="animate-fade-in"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-primary mb-3">{s.icon}</div>
                  <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in">
            <img
              src={dettaglioImg}
              alt="Libri di psicologia e pianta su scaffale, dettaglio dello studio"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
