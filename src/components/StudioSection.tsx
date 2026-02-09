import studioImg from "@/assets/studio.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StudioSection() {
  const ref = useScrollReveal();

  return (
    <section className="section-py bg-background" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <img
              src={studioImg}
              alt="Interno dello studio di psicologia con due poltrone, piante e luce calda"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[480px]"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4">Lo studio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo studio si trova in Via Ercole Pasquali, 9 a Roma, in un ambiente
              accogliente e riservato, pensato per mettere a proprio agio ogni persona
              fin dal primo incontro.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'ambiente è stato curato nei minimi dettagli per creare un'atmosfera
              di tranquillità e comfort, lontano dalla frenesia della vita quotidiana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
