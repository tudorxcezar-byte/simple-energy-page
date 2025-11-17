import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface CTASectionProps {
  onCTAClick: () => void;
}

const CTASection = ({ onCTAClick }: CTASectionProps) => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-white border-gray-200 p-12 relative z-10 shadow-lg">
            <p className="text-sm text-primary mb-4">بدون التزامات!</p>
            <h2 className="text-3xl font-bold mb-6 text-[#1e293b]">
              غيّر التعريفة في أي وقت
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              نحن نقدم المرونة بدون قيود: في شركتنا للكهرباء والغاز يمكنك تغيير التعريفة أو إلغاء الاشتراك في أي وقت، دون القلق بشأن الالتزامات. اكتشف خياراتنا واستمتع بحرية اختيار{" "}
              <span className="font-semibold">ما يناسبك، دون تعقيدات أو قيود</span>. طاقتك، قرارك مع Máis Enerxía!
            </p>
            <Button 
              onClick={onCTAClick}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              احسب التوفير في الكهرباء والغاز
            </Button>
          </Card>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2 text-[#1e293b]">
            كهرباء وغاز <span className="text-primary">بثقة أكبر</span>
          </h3>
          <p className="text-sm tracking-wider text-gray-600">
            تعريفات أكثر وضوحاً وخدمة بدون انتظار لحل استفساراتك بشكل أسرع
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
