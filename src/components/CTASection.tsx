import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CTASectionProps {
  onCTAClick: () => void;
}

const CTASection = ({ onCTAClick }: CTASectionProps) => {
  return (
    <section className="py-16 bg-[#1e293b] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-card border-border p-12 relative z-10">
            <p className="text-sm text-primary mb-4">¡SIN PERMANENCIAS!</p>
            <h2 className="text-3xl font-bold mb-6">
              Cambia de Tarifa en Cualquier Momento
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Ofrecemos flexibilidad sin ataduras: en nuestra empresa de luz y gas puedes cambiar de tarifa o darte de baja en cualquier momento, sin preocuparte por permanencias. Explora nuestras opciones y disfruta de la libertad de elegir{" "}
              <span className="font-semibold">lo que mejor se adapte a ti, sin complicaciones ni restricciones</span>. ¡Tu energía, tu decisión con Máis Enerxía!
            </p>
            <Button 
              onClick={onCTAClick}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Calcular ahorro en Luz y Gas
            </Button>
          </Card>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">
            Luz y Gas con <span className="text-primary">Máis</span> confianza
          </h3>
          <p className="text-sm tracking-wider text-muted-foreground">
            TARIFAS MÁIS CLARAS Y ATENCIÓN SIN ESPERAS PARA RESOLVER TUS CONSULTAS MÁIS RÁPIDO
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
