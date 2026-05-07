import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "저희 서비스는 바운스율 제한이 없나요?",
    a: "네, 정리되지 않은 리스트도 그대로 받습니다. 바운스율에 관계없이 발송하면서 바운스를 수집·정리해 깨끗한 리스트로 만들어드리는 것이 저희의 역할입니다.",
  },
  {
    q: "바운스 정리 후에도 계정이 정지될 수 있나요?",
    a: "네, 가능합니다. 바운스율과 스팸 신고율은 별개의 문제입니다. 바운스율은 저희 서비스로 해결할 수 있지만, 콘텐츠로 인한 스팸 신고율 문제는 서비스 범위 외입니다.",
  },
  {
    q: "월 최대 발송 한도는 얼마인가요?",
    a: "서버 최대 성능 기준 약 200만건입니다. 실제 발송 가능량과 도달률은 도메인·발신자 평판과 수신 서버 상태에 따라 결정되며, 평판이 높아질수록 서버 최대 성능까지 확장 가능합니다.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">자주 묻는 질문</h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:glow-box"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed whitespace-pre-line">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
