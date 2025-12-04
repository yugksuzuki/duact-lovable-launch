const specs = [
  { label: "Motor", value: "1000W Brushless" },
  { label: "Bateria", value: "Lítio 72V 20Ah" },
  { label: "Autonomia", value: "Até 90km" },
  { label: "Velocidade Máxima", value: "32 km/h" },
  { label: "Capacidade de Carga", value: "160 kg" },
  { label: "Tempo de Recarga", value: "6-8 horas" },
  { label: "Freios", value: "Disco dianteiro e traseiro" },
  { label: "Suspensão", value: "Hidráulica reforçada" },
  { label: "Pneus", value: '10" Tubeless' },
  { label: "Painel", value: "LCD Digital Inteligente" },
  { label: "Iluminação", value: "LED Full (frontal + traseira)" },
  { label: "Resistência à Água", value: "IPX4" },
];

export default function Specs() {
  return (
    <section id="specs" className="py-24 section-glow">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              ESPECIFICAÇÕES <span className="text-gradient">TÉCNICAS</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Cada detalhe projetado para oferecer a melhor experiência de 
              mobilidade urbana, combinando performance, segurança e conforto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary to-secondary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-8xl md:text-9xl text-primary/20">90</p>
                  <p className="font-display text-2xl md:text-3xl -mt-4">KM DE AUTONOMIA</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
              <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-primary/5 animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
