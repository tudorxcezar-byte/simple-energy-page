import { Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

const TarifasHeader = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm tracking-wider text-muted-foreground mb-4">COMPAÑÍA DE LUZ Y GAS</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Tarifas <span className="text-primary">Máis</span> Justas. Facturas <span className="text-primary">Máis</span> claras.
          <br />
          <span className="text-primary">Máis</span> Cerca
        </h2>
        
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-full px-8"
          >
            <Lightbulb className="w-5 h-5 mr-2" />
            LUZ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TarifasHeader;
