// Filosofia visual: Neo-Industrial Mobility — prova social sem depoimentos fictícios, usando sinais públicos de conteúdo e engajamento do Instagram.
import { MessageCircle, Star } from "lucide-react";

const socialSignals = [
  {
    title: "Maxus em destaque",
    text: "Post recente apresenta motor 1000W, até 80 km de autonomia de fábrica, NFC, baú e ausência de CNH/emplacamento.",
    metric: "9 curtidas • 1 comentário",
  },
  {
    title: "Loja e assistência",
    text: "Reel sobre a DUACT Itapema reforça bicicletas elétricas, peças, assistência técnica e atendimento presencial.",
    metric: "35 curtidas • 18 comentários",
  },
  {
    title: "Mobilidade com liberdade",
    text: "Conteúdo recorrente comunica economia, praticidade, sustentabilidade e fuga do trânsito sem depender de combustível.",
    metric: "posts frequentes",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 section-glow">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Prova social real</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            O INSTAGRAM JÁ <span className="text-gradient">VALIDA A OFERTA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Removi depoimentos genéricos e transformei a seção em prova social baseada no conteúdo recente da conta conectada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialSignals.map((signal) => (
            <article key={signal.title} className="border border-border/60 bg-card/75 p-6 card-hover diagonal-card">
              <div className="mb-5 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <h3 className="font-display text-3xl mb-3">{signal.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{signal.text}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 text-xs uppercase tracking-[0.2em] text-primary">
                <MessageCircle className="h-4 w-4" /> {signal.metric}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
