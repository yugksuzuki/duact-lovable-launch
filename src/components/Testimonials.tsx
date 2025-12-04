import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    text: "O DUACT mudou minha vida! Economizo tempo e dinheiro todos os dias. A autonomia de 90km é incrível, nunca fico na mão.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    location: "Rio de Janeiro, RJ",
    text: "Finalmente encontrei a solução perfeita para a mobilidade urbana. Design lindo, silencioso e super prático. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    location: "Curitiba, PR",
    text: "Assistência técnica excelente e qualidade superior. Uso meu MAXUS há 8 meses sem nenhum problema. Melhor investimento!",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    location: "Belo Horizonte, MG",
    text: "O baú é enorme, cabe tudo que preciso! E o melhor: não preciso de CNH. Liberdade total para ir e vir.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 section-glow">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            O QUE DIZEM <span className="text-gradient">NOSSOS CLIENTES</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
