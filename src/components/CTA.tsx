import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="comprar" className="py-24 section-glow relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            PRONTO PARA CONQUISTAR <br />
            <span className="text-gradient">SUA LIBERDADE?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Entre em contato agora e descubra a melhor opção de autopropelido para você. 
            Atendimento personalizado via WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/554792097788?text=Olá! Gostaria de saber mais sobre o DUACT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                FALAR NO WHATSAPP
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+554792097788">
                <Phone className="w-5 h-5" />
                LIGAR AGORA
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Atendimento de segunda a sexta, das 9h às 18h
          </p>
        </div>
      </div>
    </section>
  );
}
