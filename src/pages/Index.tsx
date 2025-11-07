import { useState } from "react";
import { GiftCard } from "@/components/GiftCard";
import { GiftModal } from "@/components/GiftModal";
import { Heart } from "lucide-react";
import coupleImage from "@/assets/couple-illustration.jpeg";
import heroBackground from "@/assets/hero-background.jpg";
import pizzaFund from "@/assets/pizza-fund.jpg";
import survivalKit from "@/assets/survival-kit.jpg";
import netflixFund from "@/assets/netflix-fund.jpg";
import remotePeace from "@/assets/remote-peace.jpg";
import honeymoon from "@/assets/honeymoon.jpg";
import therapy from "@/assets/therapy.jpg";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGift, setSelectedGift] = useState("");

  const handleGiftClick = (giftTitle: string) => {
    setSelectedGift(giftTitle);
    setIsModalOpen(true);
  };

  const gifts = [
    {
      title: "Fundo Pizza de Sexta",
      description: "Porque todo casal precisa de uma pizza sagrada no fim de semana!",
      image: pizzaFund,
    },
    {
      title: "Kit Sobrevivência Conjugal",
      description: "Pacote completo para sobreviver aos primeiros anos juntos com humor!",
      image: survivalKit,
    },
    {
      title: "Netflix & Discussão Zero",
      description: "Garantir que nunca falte série pra assistir juntos (e debater depois)!",
      image: netflixFund,
    },
    {
      title: "Tratado de Paz do Controle Remoto",
      description: "Para evitar guerras desnecessárias pela escolha do canal!",
      image: remotePeace,
    },
    {
      title: "Lua de Mel Atrasada",
      description: "Aquela viagem dos sonhos que ficou pra depois... agora pode acontecer!",
      image: honeymoon,
    },
    {
      title: "Terapia de Casal (Preventiva)",
      description: "Porque prevenir é melhor que remediar... e rir é o melhor remédio!",
      image: therapy,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <img 
                  src={coupleImage} 
                  alt="Gabriel e Denise"
                  className="relative rounded-2xl shadow-elegant max-w-sm w-full border-4 border-primary-foreground/20"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4 bg-accent/20 px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" />
                <span className="text-primary-foreground font-medium">Lista de Presentes</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                Gabriel várias situações<br />
                <span className="text-accent">&</span><br />
                Denise transtorno
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
                Presentes com muito amor... e muito humor! 😄
              </p>
              
              <div className="h-1 w-24 bg-accent rounded-full mx-auto md:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Escolha um Presente Especial
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada presente é uma forma divertida de ajudar o casal a começar essa nova fase.
              Escolha o seu favorito e faça parte dessa história!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gifts.map((gift, index) => (
              <GiftCard
                key={index}
                title={gift.title}
                description={gift.description}
                image={gift.image}
                onGift={() => handleGiftClick(gift.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para Gabriel & Denise
          </p>
        </div>
      </footer>

      <GiftModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        giftTitle={selectedGift}
      />
    </div>
  );
};

export default Index;
