// Filosofia visual: Neo-Industrial Mobility — produto principal em formato de ficha comercial, evitando modelos não evidenciados no Instagram.
import { Button } from "@/components/ui/button";
import { MessageCircle, Route, ShieldCheck, Truck } from "lucide-react";

const productImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-maxus-technical-spec-RZzjPovhoru48StVJ4Hov3.webp";
const whatsappUrl = "https://wa.me/5551989204839?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20DUACT%20Itapema%20e%20quero%20saber%20mais%20sobre%20a%20Maxus.";

const specs = [
  { label: "Motor", value: "1000W" },
  { label: "Autonomia", value: "80 km fábrica / até 120 km" },
  { label: "Velocidade", value: "até 40 km/h" },
  { label: "Capacidade", value: "até 2 pessoas" },
  { label: "Carga", value: "160 kg" },
  { label: "Painel", value: "Digital + NFC" },
];

const serviceCards = [
  { icon: ShieldCheck, title: "Sem burocracia", text: "Sem CNH, emplacamento ou licenciamento conforme comunicação da DUACT e Resolução 996/2023." },
  { icon: Route, title: "Test ride em Itapema", text: "Convite direto para conhecer a Maxus de perto na Av. Nereu Ramos, entre as ruas 303 e 304." },
  { icon: Truck, title: "Envio sob consulta", text: "Posts recentes informam envio para todo o Brasil com frete calculado conforme CEP." },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Produto em destaque</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            DUACT <span className="text-gradient">MAXUS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Em vez de dispersar a atenção em modelos não comprovados, a página passa a concentrar a oferta no produto mais presente no Instagram da loja.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
          <article className="relative overflow-hidden border border-primary/30 bg-card diagonal-card">
            <img src={productImage} alt="Ficha técnica visual da scooter elétrica Maxus" className="h-full min-h-[420px] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="inline-flex border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Mais citada no Instagram</div>
              <h3 className="mt-4 font-display text-5xl md:text-6xl">MAXUS 1000W</h3>
              <p className="mt-2 max-w-2xl text-foreground/75">Scooter elétrica/autopropelido com baú, LED, freio a disco, NFC e assistência especializada em Itapema.</p>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec) => (
                <div key={spec.label} className="border border-border/60 bg-card/80 p-4 diagonal-card">
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{spec.label}</p>
                  <p className="mt-1 font-semibold leading-tight text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>

            {serviceCards.map((card) => (
              <div key={card.title} className="flex gap-4 border border-border/60 bg-card/70 p-5 diagonal-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-2xl">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              </div>
            ))}

            <Button variant="cta" size="xl" className="w-full" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                CONSULTAR CONDIÇÕES
              </a>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
