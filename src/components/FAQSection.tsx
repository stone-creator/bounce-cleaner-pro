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
    q: "정화 후 유효 주소가 몇 % 남나요?",
    a: "리스트 상태에 따라 다르며, 발송 결과 통계를 직접 확인하실 수 있습니다.",
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
    q: "발송 완료까지 얼마나 걸리나요?",
    a: "발송량과 서버 한도에 따라 다릅니다. 발송량이 많을수록 기간이 길어집니다.",
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
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
