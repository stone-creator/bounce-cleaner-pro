import { Check, ArrowDown } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <p className="text-sm text-muted-foreground text-center mb-4">
          * 플랫폼 = 발송 프로그램 / 인프라 = 이메일 서버
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">패키지</h2>

        {/* Step 1 */}
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-8 mb-6 glow-box max-w-lg mx-auto text-center">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 mb-4 tracking-wider uppercase">
            1단계 — 필수
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3">바운스 정리 + 저희 플랫폼 + 저희 인프라 발송</h3>
          <p className="text-4xl font-black text-gradient mb-2">29만원<span className="text-lg font-semibold text-muted-foreground">/월</span></p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1 my-4 text-muted-foreground">
          <ArrowDown className="w-6 h-6 animate-bounce" />
          <span className="text-sm">바운스 정리 완료 후</span>
        </div>

        {/* Step 2 options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <span className="inline-block text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 mb-4 tracking-wider uppercase">
              2단계 — 선택 A
            </span>
            <h3 className="text-lg font-bold text-foreground mb-3">저희 플랫폼 + 저희 인프라 계속 사용</h3>
            <p className="text-3xl font-black text-foreground mb-2">29만원<span className="text-base font-semibold text-muted-foreground">/월</span></p>
            <ul className="text-sm text-muted-foreground mt-4 space-y-2 text-left">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />발송 인프라 포함</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />관리 일체 대행</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <span className="inline-block text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 mb-4 tracking-wider uppercase">
              2단계 — 선택 B
            </span>
            <h3 className="text-lg font-bold text-foreground mb-3">저희 플랫폼 + 타 발송 인프라로 전환</h3>
            <p className="text-3xl font-black text-foreground mb-2">15만원<span className="text-base font-semibold text-muted-foreground">/월</span></p>
            <ul className="text-sm text-muted-foreground mt-4 space-y-2 text-left">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />SES, Mailgun 등 연결</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />비용 절감 가능</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8 max-w-xl mx-auto leading-relaxed">
          * 바운스 정리는 반드시 저희 발송 인프라로 진행됩니다.
          오염된 리스트를 타 발송 인프라로 직접 발송하면
          해당 서비스 계정이 차단될 수 있기 때문입니다.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
