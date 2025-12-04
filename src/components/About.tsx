import duactLogo from "@/assets/duact-logo.png";

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              QUALIDADE <span className="text-gradient">É DUACT</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nascida da paixão por mobilidade urbana sustentável, a DUACT se tornou 
              referência em autopropelidos elétricos no Brasil. Combinamos design 
              inovador, tecnologia de ponta e compromisso com a qualidade para 
              oferecer a melhor experiência de deslocamento urbano.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Com assistência técnica especializada em todo o país e peças sempre 
              disponíveis, garantimos que você nunca fique na mão. Cada DUACT é 
              projetado para durar e performar, levando você mais longe com 
              segurança e estilo.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="font-display text-4xl text-primary">5K+</p>
                <p className="text-sm text-muted-foreground">Clientes Felizes</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary">27</p>
                <p className="text-sm text-muted-foreground">Estados Atendidos</p>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-card border border-border/50 p-8 flex items-center justify-center">
              <img 
                src={duactLogo} 
                alt="DUACT - Qualidade em Mobilidade Elétrica" 
                className="max-w-[80%] h-auto opacity-80"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
