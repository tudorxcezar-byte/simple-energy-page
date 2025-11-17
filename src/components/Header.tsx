import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Rúa do Doutor Cadaval, 3, 2º, Vigo (Pontevedra)</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-8">
              <div className="text-lg font-bold text-foreground">
                Máis
                <span className="block text-xs font-normal text-muted-foreground">enerxía galega</span>
              </div>
            </div>
            
            <Button onClick={onContactClick} size="lg" className="bg-primary hover:bg-primary/90">
              CONTRATAR
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
