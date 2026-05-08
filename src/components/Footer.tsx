// Filosofia visual: Neo-Industrial Mobility — rodapé enxuto, sem links mortos, priorizando contato real e presença local.
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import duactLogo from "@/assets/duact-logo.png";

const whatsappUrl = "https://wa.me/5551989204839?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20DUACT%20Itapema%20e%20quero%20saber%20mais%20sobre%20a%20Maxus.";
const phoneHref = "tel:+5551989204839";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <img src={duactLogo} alt="DUACT" className="h-10 mb-6" />
            <p className="text-muted-foreground mb-6 max-w-md">
              DUACT Itapema conecta mobilidade elétrica, peças e assistência técnica para quem quer rodar com economia, praticidade e menos burocracia.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/duact_itapema/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary/20 hover:text-primary transition-colors" aria-label="Instagram DUACT Itapema">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary hover:bg-primary/20 hover:text-primary transition-colors" aria-label="WhatsApp DUACT Itapema">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl mb-4">CONTATO</h3>
            <ul className="space-y-3">
              <li>
                <a href={phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  (51) 98920-4839
                </a>
              </li>
              <li>
                <a href="mailto:contato@duact.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  contato@duact.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Av. Nereu Ramos, S/N — Sala 3, Itapema/SC</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl mb-4">ATENDIMENTO</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Consulte disponibilidade da Maxus, condições de parcelamento, frete por CEP, peças e assistência técnica.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-[0.2em] text-primary hover:text-primary/80">
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DUACT Itapema. Todos os direitos reservados.</p>
          <p className="text-sm text-muted-foreground">Informações técnicas e condições comerciais sujeitas à confirmação no atendimento.</p>
        </div>
      </div>
    </footer>
  );
}
