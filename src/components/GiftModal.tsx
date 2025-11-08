import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import qrcodeImage from "@/assets/qrcode-pix.jpg";

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  giftTitle: string;
}

export const GiftModal = ({ isOpen, onClose, giftTitle }: GiftModalProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendToWhatsApp = () => {
    if (!name.trim()) {
      toast.error("Por favor, preencha seu nome!");
      return;
    }

    const whatsappMessage = `Olá! Eu sou *${name}* e acabei de enviar um presente: *${giftTitle}* para apoiar vocês nessa nova jornada ❤️‍🔥!\n\n${
      message ? `Mensagem: ${message}` : ""
    }`;
    const whatsappUrl = `https://wa.me/5511945309222?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Obrigado pelo presente! ❤️");

    setName("");
    setMessage("");
    onClose();
  };

  const pixCopiaECola = `00020126800014BR.GOV.BCB.PIX0111427908038030243Obrigado por colaborar com nossa nova
  vida!5204000053039865802BR5925GABRIEL NATHAN SUEITT
  QUE6007GUARUJA62070503***63049075`;

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCopiaECola);
      toast.success("Código Pix copiado com sucesso! ✅");
    } catch {
      toast.error("Não foi possível copiar o código Pix 😢");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary">
            Fazer PIX para {giftTitle}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          <div className="rounded-lg overflow-hidden shadow-card border border-border p-4 flex flex-col items-center">
            <img
              src={qrcodeImage}
              alt="QR Code PIX"
              className="w-64 h-64 object-cover"
            />

            <div className="w-full mt-4 space-y-2">
              <Button
                onClick={handleCopyPix}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Copiar código Pix (copia e cola)
              </Button>

              <Button
                onClick={() => {
                  navigator.clipboard.writeText("42790803803");
                  toast.success("Chave Pix copiada! 📋");
                }}
                variant="outline"
                className="w-full"
              >
                Copiar chave Pix
              </Button>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Seu Nome *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Input
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Deixe uma mensagem para os noivos"
                className="border-border"
              />
            </div>

            <Button
              onClick={handleSendToWhatsApp}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Confirmar no WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
