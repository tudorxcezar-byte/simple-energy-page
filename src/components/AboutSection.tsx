import aboutImage from "@/assets/contratar-online.webp";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Casa iluminada" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-sm text-primary tracking-wider">TU COMPAÑÍA DE LUZ Y GAS, CERCA DE TI</p>
            
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                En Máis Enerxía, queremos acercarte la electricidad y el gas con un{" "}
                <span className="font-semibold">servicio sin complicaciones</span>. Somos una compañía de luz y gas de Galicia y nuestro único objetivo es iluminar los hogares de nuestros clientes. Iluminar O Noso, nuestra región y lo que nos enorgullece profundamente.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Como una de las principales compañías de luz y gas en Galicia, hemos desarrollado una gama completa de tarifas de ambos servicios para brindarte{" "}
                <span className="font-semibold">comodidad, seguridad y ahorro</span>. Además, te damos multitud de facilidades: cambio de tarifa siempre que lo desees, transparente y con atención al cliente personalizada.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Nuestro compromiso con lo nuestro y tu satisfacción nos ha convertido en la compañía de gas y electricidad preferida de miles de clientes en toda Galicia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
