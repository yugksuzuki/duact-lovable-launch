import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: gallery1, alt: "Piloto DUACT na cidade - mobilidade urbana" },
  { src: gallery2, alt: "DUACT estacionado em café - estilo de vida" },
  { src: gallery3, alt: "Painel digital futurístico DUACT" },
  { src: gallery1, alt: "Liberdade de ir e vir com DUACT" },
  { src: gallery2, alt: "Design moderno e sofisticado" },
  { src: gallery3, alt: "Tecnologia de ponta DUACT" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            CONQUISTE SUA <span className="text-gradient">LIBERDADE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja como o DUACT transforma o dia a dia de milhares de pessoas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={index === 0 ? "aspect-square" : "aspect-[4/5]"}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
