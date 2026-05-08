// Filosofia visual: Neo-Industrial Mobility — benefícios em cartões técnicos, com ícones objetivos e microcopy comercial baseada no Instagram.
import { BatteryCharging, Box, Cpu, Lightbulb, Shield, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Sem CNH e emplacamento",
    description: "Autopropelido enquadrado na Resolução CONTRAN 996/2023, reduzindo burocracia para o uso urbano.",
  },
  {
    icon: BatteryCharging,
    title: "Bateria LiFePO4",
    description: "Química mais estável e durável, citada pela DUACT como diferencial de segurança, vida útil e sustentabilidade.",
  },
  {
    icon: Cpu,
    title: "NFC + painel digital",
    description: "Painel inteligente e aproximação por TAG/NFC para uma rotina mais prática e tecnológica.",
  },
  {
    icon: Box,
    title: "Baú traseiro incluso",
    description: "Mais utilidade para compras, mochila e deslocamentos diários, mantendo a proposta urbana da Maxus.",
  },
  {
    icon: Lightbulb,
    title: "LED e freio a disco",
    description: "Farol Full LED, sinalização e freios de alta performance para uma condução mais segura.",
  },
  {
    icon: Wrench,
    title: "Peças e assistência",
    description: "Atendimento local em Itapema com estoque, peças e assistência técnica especializada.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 section-glow">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Argumentos que vendem</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            POR QUE A <span className="text-gradient">MAXUS</span> CHAMA ATENÇÃO?
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A landing agora fala com o mesmo foco do Instagram: liberdade, economia, tecnologia e suporte de loja para quem quer rodar em Itapema e região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="group relative overflow-hidden border border-border/60 bg-card/80 p-6 card-hover diagonal-card">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex h-14 w-14 items-center justify-center border border-primary/35 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
