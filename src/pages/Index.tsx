import { useState } from "react";
import { GiftCard } from "@/components/GiftCard";
import { GiftModal } from "@/components/GiftModal";
import { Heart } from "lucide-react";
import coupleImage from "@/assets/gabsdenise.jpeg";
import heroBackground from "@/assets/hero-background.jpg";
import pizzaFund from "@/assets/pizza-fund.jpg";
import survivalKit from "@/assets/survival-kit.jpg";
import netflixFund from "@/assets/netflix-fund.jpg";
import remotePeace from "@/assets/remote-peace.jpg";
import honeymoon from "@/assets/honeymoon.jpg";
import therapy from "@/assets/therapy.jpg";
import roloMacarrao from "@/assets/rolo-macarrão.png";
import capaceteRoloMacarrao from "@/assets/capacete-macarrao.png";
import simSenhora from "@/assets/simsenhor.png";
import videoGame from "@/assets/518xzDbfWbL.png";
import extintor from "@/assets/extintor.png";
import paciencia from "@/assets/tolerato-de-paci25C325AAncia.png";
import nada from "@/assets/nada11-1.png";
import oculos from "@/assets/oculos.png";
import antiTpm from "@/assets/antiTpm.png";
import cobertor from "@/assets/cobertor.png";
import seguro from "@/assets/seguro.png";
import desculpa from "@/assets/desculpa.png";
import quantoCusta from "@/assets/quantoCusta.png";
import top1 from "@/assets/top1.png";
import pcGamer from "@/assets/pc.webp";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGift, setSelectedGift] = useState("");
  const [isNoivo, setIsNoivo] = useState(false);

  const handleGiftClick = (giftTitle: string, noivo: boolean) => {
    setSelectedGift(giftTitle);
    setIsModalOpen(true);
    setIsNoivo(noivo)
  };

  const gifts = [
    {
      title: "Rolo de Macarrão Para Noiva",
      description: "Ferramenta multiuso: culinária e controle emocional.",
      image: roloMacarrao,
    },
    {
      title: "Capacete Contra Rolo de Macarrão Para o Noivo",
      description: "Equipamento de segurança para o noivo prevenido",
      image: capaceteRoloMacarrao,
      noivo: true,
    },
    {
      title: "PC Gamer da Paz Conjugal",
      description:
        "Equipado com botão de emergência: pausa automática quando ela chama.",
      image: pcGamer,
      noivo: true,
    },
    {
      title: "Curso Intensivo de Sim, Senhora!",
      description: "100% de aprovação entre as noivas",
      image: simSenhora,
      noivo: true,
    },
    {
      title: "Alvará Para Jogar Videogame",
      description: "Documento raro e de grande valor sentimental.",
      image: videoGame,
      noivo: true,
    },
    {
      title: "Extintor de DR",
      description: "Apague incêndios conjugais com uma boa dose de humor.",
      image: extintor,
    },
    {
      title: "Pote da Paciência",
      description: "Dura pouco, mas é muito útil",
      image: paciencia,
    },
    {
      title: "Curso de Interpretação de Indiretas",
      description: "Entendendo o que o “nada” significa.",
      image: nada,
      noivo: true,
    },
    {
      title: "Óculos da Compreensão",
      description: "Veja o ponto de vista do parceiro claramente",
      image: oculos,
    },
    {
      title: "Plano Emergencial Anti-TPM",
      description: "Chocolates, elogios, e silêncio estratégico",
      image: antiTpm,
      noivo: true,
    },
    {
      title: "Cobertor Para o Noivo",
      description: "Pois a noiva está sempre coberta de razão",
      image: cobertor,
      noivo: true,
    },
    {
      title: "Seguro Contra Respostas Erradas",
      description: "Cobertura completa para “tô gorda?” e “lembrou da data?”",
      image: seguro,
      noivo: true,
    },
    {
      title: "Assinatura Vitalícia de “Desculpa, Amor”",
      description: "Sem cancelamento”",
      image: desculpa,
      noivo: true,
    },
    {
      title: "Só Pra Não Dizer Que Eu Não Dei Nada",
      description: "Para não passar em branco",
      image: quantoCusta,
      noivo: true,
    },
    {
      title: "Uiii, Ele Quer Ser o Melhor",
      description: "Para aquele amigo que gosta de ser TOP 1 em tudo",
      image: top1,
    },
    {
      title: "Fundo Pizza de Sexta",
      description:
        "Porque todo casal precisa de uma pizza sagrada no fim de semana!",
      image: pizzaFund,
      noivo: true,
    },
    {
      title: "Kit Sobrevivência Conjugal",
      description:
        "Pacote completo para sobreviver aos primeiros anos juntos com humor!",
      image: survivalKit,
    },
    {
      title: "Netflix & Discussão Zero",
      description:
        "Garantir que nunca falte série pra assistir juntos (e debater depois)!",
      image: netflixFund,
    },
    {
      title: "Tratado de Paz do Controle Remoto",
      description: "Para evitar guerras desnecessárias pela escolha do canal!",
      image: remotePeace,
    },
    {
      title: "Lua de Mel Atrasada",
      description:
        "Aquela viagem dos sonhos que ficou pra depois... agora pode acontecer!",
      image: honeymoon,
    },
    {
      title: "Terapia de Casal (Preventiva)",
      description:
        "Porque prevenir é melhor que remediar... e rir é o melhor remédio!",
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
          backgroundSize: "cover",
          backgroundPosition: "center",
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
                <span className="text-primary-foreground font-medium">
                  Lista de Presentes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                Gabriel
                <span className="text-accent"> & </span>
                Denise
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
              Cada presente é uma forma divertida de ajudar o casal a começar
              essa nova fase. Escolha o seu favorito, faça parte dessa história,
              e participe de um sorteio surpresa no dia do casamento!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gifts.map((gift, index) => (
              <GiftCard
                key={index}
                title={gift.title}
                description={gift.description}
                image={gift.image}
                onGift={() => handleGiftClick(gift.title, !!gift.noivo)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para
            Gabriel & Denise
          </p>
        </div>
      </footer>

      <GiftModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        giftTitle={selectedGift}
        noivo={isNoivo}
      />
    </div>
  );
};

export default Index;
