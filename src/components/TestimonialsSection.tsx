import { Card } from "./ui/card";
import googleLogo from "@/assets/google-logo.svg";
import starIcon from "@/assets/star.svg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      initial: "B",
      name: "Bruno Valencia",
      date: "11/04/2025",
      text: "Estaba na busca de nova compañía e por unha recomendación contratei con con mais enerxía, e non me arrepinto,..."
    },
    {
      initial: "y",
      name: "yaiza Abraldes",
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

  const StarRating = () => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <img key={i} src={starIcon} alt="star" className="w-5 h-5" />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-[#1e293b] mb-2 tracking-wider font-semibold">MÁIS QUE UNA COMPAÑÍA ELÉCTRICA</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Donde la Energía se Siente en <span className="text-primary">Casa</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            No nos respaldamos únicamente en nuestras palabras, sino en las experiencias de quienes forman parte de nuestra familia. Si nuestra compañía de luz y gas es digna de confianza es porque nuestros clientes así lo han expresado con sus propias voces.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
          {/* Rating Badge on the Left */}
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-8 shadow-sm min-w-[240px]">
            <div className="text-3xl font-bold text-[#1e293b] mb-4">BUENO</div>
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={starIcon} alt="star" className="w-8 h-8" />
              ))}
              <div className="relative w-8 h-8">
                <img src={starIcon} alt="star" className="w-8 h-8 opacity-30" />
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">A base de <strong>38 reseñas</strong></p>
            <img src={googleLogo} alt="Google" className="w-24" />
          </div>

          {/* Testimonial Cards */}
          <div className="flex-1 grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e293b] text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                  <img src={googleLogo} alt="Google" className="w-6 h-6" />
                </div>
                
                <StarRating />
                
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{testimonial.text}</p>
                
                <button className="text-sm text-gray-500 mt-2 hover:text-gray-700">
                  Leer más
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
