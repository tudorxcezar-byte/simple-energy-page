import aboutImage from "@/assets/contratar-online.webp";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1e293b]">
          TU COMPAÑÍA DE LUZ Y GAS, CERCA DE TI
        </h2>
        
        <div className="grid md:grid-cols-2 gap-0 max-w-7xl mx-auto">
          <div className="relative h-full min-h-[500px]">
            <img 
              src={aboutImage} 
              alt="Casa iluminada" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-white p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-[#1e293b] leading-relaxed">
                En Máis Enerxía, queremos acercarte la electricidad y el gas con un{" "}
                <span className="font-semibold">servicio sin complicaciones</span>. Somos una compañía de luz y gas de Galicia y nuestro único objetivo es iluminar los hogares de nuestros clientes. Iluminar O Noso, nuestra región y lo que nos enorgullece profundamente.
              </p>
              
              <p className="text-[#1e293b] leading-relaxed">
                Como una de las principales compañías de luz y gas en Galicia, hemos desarrollado una gama completa de tarifas de ambos servicios para brindarte{" "}
                <span className="font-semibold">comodidad, seguridad y ahorro</span>. Además, te damos multitud de facilidades: cambio de tarifa siempre que lo desees, transparente y con atención al cliente personalizada.
              </p>
              
              <p className="text-[#1e293b] leading-relaxed">
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
