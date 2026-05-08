// Filosofia visual: Neo-Industrial Mobility — CTA como painel de comando: direto, vermelho e orientado ao test ride/WhatsApp.
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const whatsappUrl = "https://wa.me/5551989204839?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20DUACT%20Itapema%20e%20quero%20saber%20mais%20sobre%20a%20Maxus.";
const phoneHref = "tel:+5551989204839";

export default function CTA() {
  return (
    <section id="comprar" className="py-24 section-glow relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--primary)/0.18),transparent_34%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl border border-primary/30 bg-card/80 p-8 text-center backdrop-blur-md md:p-12 diagonal-card">
          <p className="eyebrow justify-center">Próximo passo</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            AGENDE UM <span className="text-gradient">TEST RIDE</span> EM ITAPEMA
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Chame a equipe da DUACT Itapema para consultar estoque, condições em até 18x, frete e disponibilidade da Maxus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                FALAR NO WHATSAPP
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href={phoneHref}>
                <Phone className="w-5 h-5" />
                LIGAR AGORA
              </a>
            </Button>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Av. Nereu Ramos, entre as ruas 303 e 304 — Sala 3, Itapema/SC.
          </p>
        </div>
      </div>
    </section>
  );
}
