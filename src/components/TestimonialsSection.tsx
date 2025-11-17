import { Star } from "lucide-react";
import { Card } from "./ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      initial: "B",
      name: "Bruno Valencia",
      date: "11/04/2025",
      text: "Estaba na busca da nova compañía e por unha recomendación contatei con mais enerxía, e non me arrepiento..."
    },
    {
      initial: "Y",
      name: "Yaiza Abraldes",
      date: "11/04/2025",
      text: "Soy clienta desde hace 5 meses y las facturas me han bajado una barbaridad, el trato es exquisito por parte de los agentes, después..."
    },
    {
      initial: "J",
      name: "Jose",
      date: "19/02/2025",
      text: "Onrradez e bo trato."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sm text-primary mb-2">MÁIS QUE UNA COMPAÑÍA ELÉCTRICA</p>
          <h2 className="text-4xl font-bold mb-4">
            Donde la Energía se Siente en <span className="text-primary">Casa</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            No nos respaldamos únicamente en nuestras palabras, sino en las experiencias de quienes forman parte de nuestra familia. Si nuestra compañía de luz y gas es digna de confianza es porque nuestros clientes así lo han expresado con sus propias voces.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div>
            <div className="text-3xl font-bold">BUENO</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">A base de 38 reseñas</p>
          </div>
          <div className="text-4xl font-bold text-blue-600">Google</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.initial}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
                <div className="text-blue-600 text-xl">G</div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm text-foreground/90">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
