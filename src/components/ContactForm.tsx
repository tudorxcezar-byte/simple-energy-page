import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Google Sheets via webhook
      // Users will need to set up a Google Apps Script web app
      const webhookUrl =
        "https://script.google.com/macros/s/AKfycbwxdDvKie4ruS4RQBEtObrFt0_WHmJQRoXP6RTDvQC7FFlcd6hN5LfVhbLYw_aXgP6VHA/exec"; // This should be replaced with actual webhook

      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // Show error message as requested
      toast({
        title: "Lo sentimos",
        description: "Encontramos un error. Nos pondremos en contacto contigo en breve.",
        variant: "destructive",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", postalCode: "" });

      // Close form after a delay
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el formulario. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className="w-full max-w-md bg-white border-gray-200 p-8 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-[#1e293b]">Contactar</h2>
        <p className="text-gray-600 mb-6">Déjanos tus datos y nos pondremos en contacto contigo</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-[#1e293b]">
              Nombre
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 bg-white border-black text-black"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-[#1e293b]">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 bg-white border-black text-black"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#1e293b]">
              Teléfono
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 bg-white border-black text-black"
            />
          </div>

          <div>
            <Label htmlFor="postalCode" className="text-[#1e293b]">
              Código Postal
            </Label>
            <Input
              id="postalCode"
              type="text"
              required
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
              className="mt-1 bg-white border-black text-black"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0d9488] hover:bg-[#0d9488]/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
