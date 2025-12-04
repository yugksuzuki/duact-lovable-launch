import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de CNH para pilotar o DUACT?",
    answer: "Não! De acordo com a Resolução CONTRAN 996/2023, autopropelidos como o DUACT são dispensados de CNH, emplacamento e licenciamento. Basta ter 18 anos e usar capacete.",
  },
  {
    question: "Qual a autonomia real da bateria?",
    answer: "O DUACT MAXUS oferece autonomia de até 90km em condições ideais (piloto de 70kg, terreno plano, velocidade constante de 20km/h). Em uso urbano real, a autonomia média fica entre 60-75km.",
  },
  {
    question: "Quanto tempo leva para carregar a bateria?",
    answer: "A carga completa leva de 6 a 8 horas. Recomendamos carregar durante a noite. A bateria de lítio possui vida útil de aproximadamente 1000 ciclos de carga.",
  },
  {
    question: "Posso andar na chuva?",
    answer: "Sim! O DUACT possui certificação IPX4, resistente a respingos de água. No entanto, recomendamos evitar exposição prolongada a chuvas fortes e nunca submergir o veículo.",
  },
  {
    question: "Como funciona a garantia e assistência técnica?",
    answer: "Oferecemos garantia de 12 meses contra defeitos de fabricação. Contamos com rede de assistência técnica autorizada em todo o Brasil e peças sempre disponíveis em estoque.",
  },
  {
    question: "Qual o peso máximo suportado?",
    answer: "O DUACT MAXUS suporta até 160kg (piloto + bagagem). A suspensão reforçada garante conforto mesmo com carga máxima.",
  },
  {
    question: "Posso financiar meu DUACT?",
    answer: "Sim! Oferecemos diversas opções de pagamento, incluindo parcelamento em até 12x no cartão e financiamento com entrada facilitada. Entre em contato para simular.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            PERGUNTAS <span className="text-gradient">FREQUENTES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o DUACT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
