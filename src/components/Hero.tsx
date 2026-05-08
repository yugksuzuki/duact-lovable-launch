// Filosofia visual: Neo-Industrial Mobility — fundo escuro, cortes diagonais, vermelho DUACT como energia e dados técnicos como prova imediata.
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, MessageCircle, ShieldCheck, Zap } from "lucide-react";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-neo-industrial-hero-YmVgyBxjyN4MLuQfY9xAfJ.webp";
const whatsappUrl = "https://wa.me/5551989204839?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20DUACT%20Itapema%20e%20quero%20saber%20mais%20sobre%20a%20Maxus.";

const quickSpecs = [
  { label: "Motor", value: "1000W" },
  { label: "Autonomia", value: "80–120 km" },
  { label: "CNH", value: "Dispensada" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-background">
      <img
        src={heroImage}
        alt="Scooter elétrica Maxus em avenida costeira com estética técnica DUACT"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.94)_31%,hsl(var(--background)/0.60)_58%,hsl(var(--background)/0.16)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,hsl(var(--primary)/0.22),transparent_34%),linear-gradient(135deg,transparent_0%,transparent_62%,hsl(var(--primary)/0.18)_62.4%,transparent_63%)]" />

      <div className="container relative z-10 flex min-h-screen items-center pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-primary/35 bg-card/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary backdrop-blur-md animate-fade-in skew-x-[-8deg]">
            <ShieldCheck className="h-4 w-4 skew-x-[8deg]" />
            <span className="skew-x-[8deg]">DUACT Itapema • Maxus</span>
          </div>

          <h1 className="mt-7 font-display text-6xl tracking-tight sm:text-7xl md:text-8xl lg:text-9xl animate-fade-in text-balance" style={{ animationDelay: "0.08s" }}>
            MOBILIDADE <span className="text-gradient">ELÉTRICA</span>
            <br />SEM BUROCRACIA
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/78 md:text-xl animate-fade-in" style={{ animationDelay: "0.16s" }}>
            Conheça a Maxus na DUACT Itapema: motor de 1000W, bateria LiFePO4, painel digital com NFC e autonomia de fábrica de até 80 km, podendo chegar a 120 km conforme o uso.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.24s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                AGENDAR TEST RIDE
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#specs">
                <Zap className="h-5 w-5" />
                VER FICHA TÉCNICA
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 animate-fade-in" style={{ animationDelay: "0.32s" }}>
            {quickSpecs.map((spec) => (
              <div key={spec.label} className="border border-border/70 bg-card/60 p-4 backdrop-blur-sm diagonal-card">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{spec.label}</p>
                <p className="mt-1 font-display text-2xl text-foreground md:text-3xl">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.40s" }}>
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <span>Av. Nereu Ramos, S/N — entre as ruas 303 e 304, Sala 3, Itapema/SC.</span>
          </div>
        </div>
      </div>

      <a href="#beneficios" className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
        <span className="text-xs uppercase tracking-[0.35em]">Explorar</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
