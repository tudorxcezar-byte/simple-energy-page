import { Button } from "./ui/button";
import logoIcon from "@/assets/logo-icon.png";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-sm text-primary mb-4 tracking-wider">MÁIS VALE TARDE QUE NUNCA</p>
            <h2 className="text-4xl font-bold mb-6">
              Cámbiate a <span className="text-primary">Máis Enerxía Galega</span>
              <br />y disfruta de atención personalizada
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Creemos en un trato más humano. Aquí, no encontrarás contestadores automáticos, solo personas reales comprometidas en ofrecerte un servicio energético, transparente y justo. Conócenos y experimenta el servicio de una compañía de luz y gas donde siempre te atiende alguien que se preocupa.
            </p>
            <p className="text-foreground font-semibold mb-8">
              ¿Listo para descubrir la diferencia?
            </p>
            <Button 
              onClick={onCTAClick}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Cámbiate a Máis Enerxía
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src={logoIcon} 
              alt="Máis Enerxía Logo" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
