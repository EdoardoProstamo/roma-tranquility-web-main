import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "Come si svolge il primo colloquio?",
    a: "Il primo incontro è dedicato alla conoscenza reciproca. Ascolterò le tue esigenze e insieme valuteremo il percorso più adatto, senza alcun obbligo di proseguire.",
  },
  {
    q: "Quanto dura un percorso psicologico?",
    a: "La durata varia in base alle esigenze individuali. Alcuni percorsi richiedono pochi incontri, altri un impegno più prolungato. Ne parleremo insieme.",
  },
  {
    q: "Le sedute sono in presenza o online?",
    a: "Ricevo principalmente in studio a Roma. In base alle esigenze, è possibile valutare anche colloqui a distanza tramite videochiamata.",
  },
  {
    q: "Come posso prenotare un appuntamento?",
    a: "Puoi contattarmi telefonicamente o via email. Troverai i recapiti nella sezione Contatti del sito.",
  },
  {
    q: "Il percorso è riservato?",
    a: "Assolutamente sì. La riservatezza è tutelata dal codice deontologico degli psicologi. Ogni informazione condivisa resta strettamente confidenziale.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section className="section-py bg-secondary" ref={ref}>
      <div className="container-site max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-4">Domande frequenti</h2>
          <p className="text-muted-foreground">
            Risposte alle domande più comuni sul percorso psicologico.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-fade-in bg-card rounded-xl border border-border overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-foreground text-sm md:text-base">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-260 ${
                  openIndex === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
