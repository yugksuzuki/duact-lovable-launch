// Filosofia visual: Neo-Industrial Mobility — galeria curta e premium, usando ativos próprios em vez de repetição genérica.
const images = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-neo-industrial-hero-YmVgyBxjyN4MLuQfY9xAfJ.webp", alt: "Maxus em avenida costeira com iluminação técnica", title: "Mobilidade urbana" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-store-test-ride-atKoTMXXQbsfNnW8h7hUrx.webp", alt: "Loja e assistência DUACT com scooter pronta para test ride", title: "Atendimento local" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663615502027/im2wYMZpvAR2mhsQ9mnNsT/duact-maxus-technical-spec-RZzjPovhoru48StVJ4Hov3.webp", alt: "Visual técnico com componentes da scooter Maxus", title: "Tecnologia aplicada" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Visual de marca</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            LIBERDADE COM <span className="text-gradient">PRESENÇA TÉCNICA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            As imagens reforçam uma DUACT mais premium: produto, loja, oficina, tecnologia e cidade em uma única narrativa comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <article key={image.title} className={`relative overflow-hidden border border-border/60 group diagonal-card ${index === 0 ? "md:col-span-2" : ""}`}>
              <div className={index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}>
                <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-3xl">{image.title}</p>
                <div className="mt-2 h-px w-20 bg-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
