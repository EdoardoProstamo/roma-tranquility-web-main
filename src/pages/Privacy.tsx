import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/site";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-py bg-background">
          <div className="container-site max-w-3xl mx-auto prose prose-sm">
            <h1 className="text-3xl md:text-4xl mb-8">Privacy Policy</h1>

            <p className="text-muted-foreground leading-relaxed">
              Informativa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR).
            </p>

            <h2 className="text-xl mt-8 mb-3">Titolare del trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              {SITE_CONFIG.fullTitle}<br />
              {SITE_CONFIG.address} – {SITE_CONFIG.cap} {SITE_CONFIG.city} ({SITE_CONFIG.province}), {SITE_CONFIG.country}<br />
              Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">{SITE_CONFIG.email}</a><br />
              P.IVA: {SITE_CONFIG.piva}
            </p>

            <h2 className="text-xl mt-8 mb-3">Tipologia di dati raccolti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il presente sito web non raccoglie dati personali degli utenti in modo automatico.
              Non sono presenti form di contatto, cookie di profilazione, strumenti di analisi
              o tracciamento. I dati di navigazione (log del server) possono essere trattati
              dal provider di hosting per finalità tecniche e di sicurezza.
            </p>

            <h2 className="text-xl mt-8 mb-3">Finalità del trattamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il sito ha finalità esclusivamente informative. Eventuali comunicazioni inviate
              dall'utente via email o telefono saranno trattate nel rispetto della normativa
              vigente e del segreto professionale.
            </p>

            <h2 className="text-xl mt-8 mb-3">Diritti dell'interessato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ai sensi degli articoli 15-22 del GDPR, l'interessato ha diritto di accesso,
              rettifica, cancellazione, limitazione, portabilità e opposizione al trattamento
              dei propri dati personali. Per esercitare tali diritti è possibile contattare il
              titolare all'indirizzo email sopra indicato.
            </p>

            <h2 className="text-xl mt-8 mb-3">Aggiornamenti</h2>
            <p className="text-muted-foreground leading-relaxed">
              La presente informativa può essere aggiornata. Si consiglia di consultare
              periodicamente questa pagina.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
