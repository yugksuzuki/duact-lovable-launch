import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import duactLogo from "@/assets/duact-logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={duactLogo} alt="DUACT" className="h-10 mb-6" />
            <p className="text-muted-foreground mb-6 max-w-md">
              DUACT é a marca líder em autopropelidos elétricos no Brasil. 
              Qualidade, inovação e liberdade para sua mobilidade urbana.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/duactoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-4">CONTATO</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+554792097788"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (47) 9209-7788
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@duact.com.br"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@duact.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Santa Catarina, Brasil</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl mb-4">NEWSLETTER</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades e ofertas exclusivas
            </p>
            {subscribed ? (
              <p className="text-primary font-medium">Obrigado por se inscrever!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 focus:border-primary focus:outline-none transition-colors"
                  required
                />
                <Button type="submit" variant="cta" className="w-full">
                  Inscrever-se
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DUACT. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
