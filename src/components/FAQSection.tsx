import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "바운스율이 얼마나 되면 위험한가요?",
    a: "업계 기준 5% 초과 시 대부분의 플랫폼에서 계정이 정지됩니다.",
  },
  {
    q: "바운스 정리 후에도 계정이 정지될 수 있나요?",
    a: "네, 가능합니다. 바운스율과 스팸 신고율은 별개의 문제입니다. 바운스율은 저희 서비스로 해결할 수 있지만, 콘텐츠로 인한 스팸 신고율 문제는 서비스 범위 외입니다.",
  },
  {
    q: "발송 콘텐츠는 어떻게 전달하나요?",
    a: "HTML 또는 텍스트 형식으로 전달해주시면 됩니다.",
  },
  {
    q: "월 최대 발송 한도는 얼마인가요?",
    a: "도메인 기준 월 한도는 아래와 같습니다.\n- 네이버 : 약 100만건\n- 구글 : 약 10만건\n- 서버 최대 성능 : 약 200만건",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4">
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
