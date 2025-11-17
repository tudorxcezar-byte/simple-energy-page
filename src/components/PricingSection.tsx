import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Zap } from "lucide-react";

interface PricingSectionProps {
  onPlanClick: () => void;
}

const PricingSection = ({ onPlanClick }: PricingSectionProps) => {
  const plans = [
    {
      name: "Tarifa Estable",
      price: "0,12",
      unit: "€/kWh",
      features: [
        "Precio fijo garantizado",
        "Sin sorpresas en la factura",
        "Atención personalizada",
        "100% energía renovable"
      ]
    },
    {
      name: "Tarifa Flexible",
      price: "0,10",
      unit: "€/kWh",
      features: [
        "Precio variable según mercado",
        "Ahorro en horas valle",
        "Control de consumo",
        "100% energía renovable"
      ]
    },
    {
      name: "Tarifa Nocturna",
      price: "0,08",
      unit: "€/kWh",
      features: [
        "Descuento en horario nocturno",
        "Ideal para vehículos eléctricos",
        "Ahorro hasta 40%",
        "100% energía renovable"
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nuestras Tarifas de Luz</h2>
          <p className="text-lg text-muted-foreground">
            Elige la tarifa que mejor se adapta a tus necesidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className="bg-card border-border p-8 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xl text-muted-foreground">{plan.unit}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <Button 
                  onClick={onPlanClick}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Ver Detalles
                </Button>
                <Button 
                  onClick={onPlanClick}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  Calcular
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={onPlanClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto"
          >
            Cámbiate a Máis Enerxía
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
