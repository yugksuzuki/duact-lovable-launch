// Filosofia visual: Neo-Industrial Mobility — narrativa local e verificável, com loja, assistência e métricas do Instagram conectado.
import { Instagram, MapPin, MessageCircle, Wrench } from "lucide-react";

const storeImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-store-test-ride-atKoTMXXQbsfNnW8h7hUrx.webp";
const whatsappUrl = "https://wa.me/5551989204839?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20DUACT%20Itapema%20e%20quero%20saber%20mais%20sobre%20a%20Maxus.";

const proof = [
  { value: "1.186", label: "seguidores no Instagram" },
  { value: "108", label: "posts publicados" },
  { value: "18x", label: "parcelamento sob consulta" },
];

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="eyebrow">DUACT Itapema</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              LOJA, PEÇAS E <span className="text-gradient">ASSISTÊNCIA</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A página agora deixa claro o que o Instagram comunica todos os dias: a DUACT Itapema atende quem busca autopropelidos elétricos, bicicletas elétricas, peças, assistência técnica e orientação para comprar com mais segurança.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              O convite principal é simples: visitar a loja, fazer um test ride e conversar pelo WhatsApp para consultar estoque, frete, condições de pagamento e suporte técnico.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {proof.map((item) => (
                <div key={item.label} className="border border-border/60 bg-card/70 p-4 text-center diagonal-card">
                  <p className="font-display text-4xl text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Av. Nereu Ramos, S/N — entre as ruas 303 e 304 — Sala 3, Itapema/SC.</p>
              <p className="flex items-start gap-3"><Wrench className="mt-0.5 h-4 w-4 text-primary" /> Assistência técnica especializada, peças e atendimento local.</p>
              <p className="flex items-start gap-3"><Instagram className="mt-0.5 h-4 w-4 text-primary" /> Instagram oficial da loja: @duact_itapema.</p>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary hover:text-primary/80">
              <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
            </a>
          </div>

          <div className="relative overflow-hidden border border-primary/25 bg-card diagonal-card">
            <img src={storeImage} alt="Loja DUACT com scooter elétrica pronta para test ride" className="h-full min-h-[520px] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 border-l-2 border-primary bg-background/75 p-5 backdrop-blur-md">
              <p className="font-display text-3xl">Test ride em Itapema</p>
              <p className="text-sm text-muted-foreground">Experimente antes de decidir e tire dúvidas com a equipe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
