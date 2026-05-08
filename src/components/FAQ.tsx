// Filosofia visual: Neo-Industrial Mobility — FAQ direto, técnico e comercial, alinhado às objeções reais da compra.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de CNH para pilotar a Maxus?",
    answer: "A comunicação da DUACT enquadra a Maxus como autopropelido conforme a Resolução CONTRAN 996/2023, com dispensa de CNH, emplacamento e licenciamento. Confirme sempre a regra aplicável ao seu município e use equipamentos de segurança.",
  },
  {
    question: "Qual autonomia devo considerar?",
    answer: "Os posts recentes citam até 80 km de autonomia de fábrica, podendo chegar a até 120 km conforme modo de uso, peso, terreno, velocidade e condições de bateria.",
  },
  {
    question: "A bateria é segura?",
    answer: "A DUACT destaca bateria LiFePO4, conhecida por maior estabilidade térmica, durabilidade e segurança em comparação com químicas de lítio mais comuns.",
  },
  {
    question: "Quais diferenciais vêm na Maxus?",
    answer: "Os conteúdos recentes citam motor 1000W, freio a disco estilo moto, farol Full LED, painel digital com NFC/TAG, baú traseiro incluso, capacidade para até 2 pessoas e suspensão reforçada.",
  },
  {
    question: "Como funciona assistência e peças?",
    answer: "A DUACT Itapema comunica atendimento com peças e assistência técnica especializada, além de loja física para suporte e test ride.",
  },
  {
    question: "Dá para parcelar ou receber em outra cidade?",
    answer: "Posts recentes citam parcelamento em até 18x, sujeito à análise de crédito e regras da operadora, além de envio para todo o Brasil com frete sob consulta conforme CEP.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Dúvidas de compra</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            PERGUNTAS <span className="text-gradient">FREQUENTES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Respostas mais específicas para reduzir insegurança antes do contato pelo WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/60 bg-card/80 px-6 overflow-hidden diagonal-card">
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
