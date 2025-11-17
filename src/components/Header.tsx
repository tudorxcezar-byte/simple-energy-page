import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-claro.png";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Máis Enerxía" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Address in the center */}
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            <span>Rúa do Doutor Cadaval, 3, 2º, Vigo (Pontevedra)</span>
          </div>
          
          {/* Button on the right */}
          <Button onClick={onContactClick} size="lg" className="bg-primary hover:bg-primary/90">
            CONTRATAR
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
