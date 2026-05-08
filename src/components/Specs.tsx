// Filosofia visual: Neo-Industrial Mobility — especificações como dossiê técnico com imagem de engenharia e dados comerciais auditáveis.
const techImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-maxus-technical-spec-RZzjPovhoru48StVJ4Hov3.webp";

const specs = [
  { label: "Motor", value: "1000W" },
  { label: "Bateria", value: "LiFePO4" },
  { label: "Autonomia", value: "até 80 km de fábrica / até 120 km conforme uso" },
  { label: "Velocidade", value: "até 40 km/h" },
  { label: "Capacidade", value: "até 2 pessoas" },
  { label: "Carga suportada", value: "160 kg" },
  { label: "Freios", value: "Freio a disco estilo moto" },
  { label: "Iluminação", value: "Farol Full LED" },
  { label: "Painel", value: "Digital com NFC/TAG" },
  { label: "Baú", value: "Traseiro incluso" },
  { label: "Serviço", value: "Peças e assistência técnica" },
  { label: "Pagamento", value: "Até 18x, sujeito à análise" },
];

export default function Specs() {
  return (
    <section id="specs" className="py-24 section-glow">
      <div className="container">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <div>
            <p className="eyebrow">Ficha técnica comercial</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              DADOS QUE <span className="text-gradient">GERAM CONFIANÇA</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              A seção técnica foi alinhada às informações mais repetidas no Instagram da DUACT Itapema, destacando o que influencia a decisão: autonomia, legalidade, bateria, segurança e suporte.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex min-h-[82px] flex-col justify-between border border-border/60 bg-card/70 p-4 transition-colors hover:border-primary/40 diagonal-card">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">{spec.label}</span>
                  <span className="mt-2 font-semibold leading-tight text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-primary/25 bg-card diagonal-card">
            <img src={techImage} alt="Visual técnico da Maxus com componentes e linhas de engenharia" className="h-full min-h-[520px] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="bg-background/80 p-4 backdrop-blur-sm">
                <p className="font-display text-4xl text-primary">1000W</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Motor</p>
              </div>
              <div className="bg-background/80 p-4 backdrop-blur-sm">
                <p className="font-display text-4xl text-primary">120</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">km até</p>
              </div>
              <div className="bg-background/80 p-4 backdrop-blur-sm">
                <p className="font-display text-4xl text-primary">18x</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">consulta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
