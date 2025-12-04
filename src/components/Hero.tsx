import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroScooter from "@/assets/hero-scooter-new.jpg";

const colorOptions = [
  { name: "Branco", color: "#ffffff" },
  { name: "Cinza", color: "#6b7280" },
  { name: "Marrom", color: "#92400e" },
  { name: "Azul", color: "#06b6d4" },
  { name: "Vermelho", color: "#ef4444" },
  { name: "Rosa", color: "#f472b6" },
  { name: "Prata", color: "#9ca3af" },
  { name: "Preto", color: "#1f2937" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Content */}
      <div className="container relative z-10 pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Resolução CONTRAN 996/2023 — Sem CNH
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            O MELHOR <span className="text-gradient">AUTOPROPELIDO</span>
            <br />DO MUNDO
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Design futurista, autonomia de até 90km e tecnologia de ponta. 
            Conquiste sua liberdade com DUACT.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#comprar">COMPRAR AGORA</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#produtos">VER MODELOS</a>
            </Button>
          </div>

          {/* Color Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {colorOptions.map((option, index) => (
              <button
                key={option.name}
                className="w-8 h-8 rounded-full border-2 border-transparent hover:border-primary transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: option.color }}
                aria-label={`Cor ${option.name}`}
                title={option.name}
              />
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
            <img
              src={heroScooter}
              alt="Scooter Elétrico DUACT MAXUS"
              className="relative w-full h-auto object-contain"
            />
          </div>

          {/* Scroll Indicator */}
          <a
            href="#beneficios"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
