import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config/site";

export default function Cookie() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-py bg-background">
          <div className="container-site max-w-3xl mx-auto prose prose-sm">
            <h1 className="text-3xl md:text-4xl mb-8">Cookie Policy</h1>

            <p className="text-muted-foreground leading-relaxed">
              Informativa sull'utilizzo dei cookie ai sensi dell'art. 122 del D.Lgs. 196/2003
              e del Regolamento (UE) 2016/679 (GDPR).
            </p>

            <h2 className="text-xl mt-8 mb-3">Cosa sono i cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano
              al browser, dove vengono memorizzati per essere ritrasmessi nelle visite successive.
            </p>

            <h2 className="text-xl mt-8 mb-3">Cookie utilizzati da questo sito</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il presente sito web <strong>non utilizza cookie di profilazione</strong> né
              cookie di terze parti per finalità di marketing. Il sito potrebbe utilizzare
              esclusivamente cookie tecnici strettamente necessari al funzionamento della
              navigazione, che non richiedono il consenso dell'utente.
            </p>

            <h2 className="text-xl mt-8 mb-3">Cookie di terze parti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Il sito non integra servizi di terze parti che installano cookie (es. analytics,
              social media, mappe). Non sono presenti strumenti di tracciamento.
            </p>

            <h2 className="text-xl mt-8 mb-3">Gestione dei cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'utente può gestire le preferenze sui cookie attraverso le impostazioni del
              proprio browser. La disattivazione dei cookie tecnici potrebbe compromettere
              alcune funzionalità del sito.
            </p>

            <h2 className="text-xl mt-8 mb-3">Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per qualsiasi informazione relativa alla presente Cookie Policy, è possibile
              contattare il titolare del sito all'indirizzo:{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
