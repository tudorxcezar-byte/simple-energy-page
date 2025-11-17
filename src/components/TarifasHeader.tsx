import { Lightbulb } from "lucide-react";
import { Button } from "./ui/button";

const TarifasHeader = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm tracking-wider text-gray-600 mb-4">شركة كهرباء وغاز</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1e293b]">
          تعريفات <span className="text-primary">أكثر</span> عدالة. فواتير <span className="text-primary">أكثر</span> وضوحاً.
          <br />
          <span className="text-primary">أقرب</span> إليك
        </h2>
        
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-full px-8"
          >
            <Lightbulb className="w-5 h-5 ml-2" />
            كهرباء
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TarifasHeader;
