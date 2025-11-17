import aboutImage from "@/assets/contratar-online.webp";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1e293b]">
          شركة الكهرباء والغاز الخاصة بك، قريبة منك
        </h2>
        
        <div className="grid md:grid-cols-2 gap-0 max-w-7xl mx-auto">
          <div className="relative h-full min-h-[500px]">
            <img 
              src={aboutImage} 
              alt="منزل مضاء" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-white p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="text-[#1e293b] leading-relaxed">
                في Máis Enerxía، نريد أن نقربك من الكهرباء والغاز{" "}
                <span className="font-semibold">بخدمة بدون تعقيدات</span>. نحن شركة كهرباء وغاز من غاليسيا وهدفنا الوحيد هو إضاءة منازل عملائنا. إضاءة منطقتنا وما نفخر به بعمق.
              </p>
              
              <p className="text-[#1e293b] leading-relaxed">
                كواحدة من شركات الكهرباء والغاز الرائدة في غاليسيا، قمنا بتطوير مجموعة كاملة من تعريفات كلا الخدمتين لتوفير{" "}
                <span className="font-semibold">الراحة والأمان والتوفير</span>. بالإضافة إلى ذلك، نمنحك العديد من التسهيلات: تغيير التعريفة متى شئت، بشفافية وخدمة عملاء شخصية.
              </p>
              
              <p className="text-[#1e293b] leading-relaxed">
                التزامنا بمنطقتنا ورضاك جعلنا شركة الغاز والكهرباء المفضلة لآلاف العملاء في جميع أنحاء غاليسيا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
