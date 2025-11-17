const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1e293b]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-3xl font-bold mb-2">عملاء سعداء،</h3>
            <p className="text-xl text-muted-foreground">ليس أرقاماً فارغة</p>
          </div>
          
          <div>
            <div className="text-5xl font-bold text-foreground mb-2">45000+</div>
            <p className="text-sm tracking-wider text-muted-foreground">منازل غاليسية</p>
          </div>
          
          <div>
            <div className="text-5xl font-bold text-foreground mb-2">97%</div>
            <p className="text-sm tracking-wider text-muted-foreground">رضا العملاء</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
