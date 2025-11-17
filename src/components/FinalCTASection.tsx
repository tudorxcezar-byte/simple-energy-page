import { Button } from "./ui/button";
import logoIcon from "@/assets/logo-icon.svg";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

const FinalCTASection = ({ onCTAClick }: FinalCTASectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-sm text-primary mb-4 tracking-wider">الأفضل متأخراً من عدمه</p>
            <h2 className="text-4xl font-bold mb-6 text-[#1e293b]">
              انتقل إلى <span className="text-primary">Máis Enerxía Galega</span>
              <br />واستمتع بخدمة عملاء شخصية
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              نؤمن بمعاملة أكثر إنسانية. هنا، لن تجد أجهزة رد آلي، فقط أشخاص حقيقيون ملتزمون بتقديم خدمة طاقة شفافة وعادلة. تعرف علينا واختبر خدمة شركة كهرباء وغاز حيث يهتم بك دائماً شخص يهتم بأمرك.
            </p>
            <p className="text-[#1e293b] font-semibold">
              هل أنت مستعد لاكتشاف الفرق؟
            </p>
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
