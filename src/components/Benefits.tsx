import { Shield, Zap, Box, Lightbulb, Cpu, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Sem CNH",
    description: "Não precisa de habilitação, emplacamento ou licenciamento (Resolução 996/2023)",
  },
  {
    icon: Zap,
    title: "90km de Autonomia",
    description: "Motor de 1000W de potência com sistema FTS para melhor desempenho em subidas",
  },
  {
    icon: Box,
    title: "Baú de 32L",
    description: "Porta-malas resistente à água com capacidade para transportar suas compras",
  },
  {
    icon: Lightbulb,
    title: "LED Full",
    description: "Farol LED de alto desempenho, freios de alta performance e suspensão reforçada",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    description: "Painel digital inteligente e TAG de proximidade para condução intuitiva",
  },
  {
    icon: Wrench,
    title: "Assistência",
    description: "Estoque completo de peças e assistência técnica especializada em todo Brasil",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 section-glow">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            POR QUE ESCOLHER <span className="text-gradient">DUACT?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Qualidade, inovação e liberdade em cada detalhe do seu autopropelido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
