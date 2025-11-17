import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Zap } from "lucide-react";
import casaRustica from "@/assets/casa-rustica.jpeg";
import casaBosque from "@/assets/casa-bosque.jpeg";
import casaIluminada from "@/assets/casa-iluminada.jpeg";

interface PricingSectionProps {
  onPlanClick: () => void;
}

const PricingSection = ({ onPlanClick }: PricingSectionProps) => {
  const plans = [
    {
      name: "Máis Estable Única",
      price: "0,11",
      unit: "€/kWh",
      image: casaRustica,
      features: [
        "نفس السعر طوال اليوم",
        "استقرار بسعر ثابت",
        "بدون جداول زمنية أو زيادات غير متوقعة",
        "100٪ طاقة متجددة",
      ],
    },
    {
      name: "Máis Estable",
      price: "0,08",
      unit: "€/kWh",
      image: casaBosque,
      features: [
        "نفس السعر حسب الفترات",
        "استقرار بسعر ثابت",
        "اضبط استهلاكك على الساعات الأكثر اقتصادية",
        "100٪ طاقة متجددة",
      ],
    },
    {
      name: "Máis Justa",
      price: "0,10",
      unit: "€/kWh",
      image: casaIluminada,
      features: [
        "السعر بتكلفة السوق",
        "اضبط استهلاكك على الساعات الأكثر اقتصادية",
        "وفّر في ساعات الذروة المنخفضة",
        "100٪ طاقة متجددة",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">تعريفات الكهرباء لدينا</h2>
          <p className="text-lg text-gray-600">اختر التعريفة التي تناسب احتياجاتك</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 p-0 hover:border-primary transition-colors shadow-lg overflow-hidden"
            >
              {/* Image at the top */}
              <div className="relative h-48 overflow-hidden">
                <img src={plan.image} alt={plan.name} className="w-full h-full object-cover" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6 min-h-[5rem]">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e293b]">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600">من</span>
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-xl text-gray-600">{plan.unit}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button onClick={onPlanClick} className="w-full bg-primary hover:bg-primary/90">
                    عرض التفاصيل
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
