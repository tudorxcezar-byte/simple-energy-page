import heroImage from "@/assets/hero-background.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center pt-24 pb-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ILUMINANDO
            <br />
            <span className="text-primary">O NOSO</span>
          </h1>
          
          <p className="text-xl text-foreground/90 leading-relaxed">
            Somos Máis, la Compañía de Luz gallega que te ofrece tarifas justas, facturas claras y atención personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
