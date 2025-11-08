import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

interface GiftCardProps {
  title: string;
  description: string;
  image: string;
  onGift: () => void;
}

export const GiftCard = ({ title, description, image, onGift }: GiftCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-gradient-card border-border/50">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={onGift}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          <Gift className="mr-2 h-4 w-4" />
          Presentear
        </Button>
      </CardFooter>
    </Card>
  );
};
