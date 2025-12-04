import { Button } from "@/components/ui/button";
import scooterProduct from "@/assets/scooter-product.png";

const products = [
  {
    name: "MAXUS",
    tagline: "O mais completo",
    image: scooterProduct,
    specs: {
      motor: "1000W",
      autonomia: "90km",
      velocidade: "32km/h",
      peso: "160kg",
    },
    colors: ["#ffffff", "#1f2937", "#ef4444", "#06b6d4"],
    featured: true,
  },
  {
    name: "LITE",
    tagline: "Compacto e ágil",
    image: scooterProduct,
    specs: {
      motor: "800W",
      autonomia: "60km",
      velocidade: "28km/h",
      peso: "120kg",
    },
    colors: ["#ffffff", "#1f2937", "#f472b6"],
    featured: false,
  },
  {
    name: "PRO",
    tagline: "Performance máxima",
    image: scooterProduct,
    specs: {
      motor: "1200W",
      autonomia: "120km",
      velocidade: "35km/h",
      peso: "180kg",
    },
    colors: ["#1f2937", "#ef4444", "#92400e"],
    featured: false,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            NOSSOS <span className="text-gradient">MODELOS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o autopropelido perfeito para seu estilo de vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.name}
              className={`relative rounded-3xl overflow-hidden card-hover ${
                product.featured
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary/30"
                  : "bg-card border border-border/50"
              }`}
            >
              {product.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  DESTAQUE
                </div>
              )}

              <div className="p-6 pb-0">
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
                  <img
                    src={product.image}
                    alt={`Scooter DUACT ${product.name}`}
                    className="relative max-h-full w-auto object-contain"
                  />
                </div>
              </div>

              <div className="p-6 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-display text-3xl">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
                  </div>
                  <div className="flex gap-1">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="text-center p-2 rounded-lg bg-secondary/50">
                      <p className="text-xs text-muted-foreground uppercase">{key}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <Button
                  variant={product.featured ? "cta" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="#comprar">Ver Detalhes</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
