import { Filter, Send } from "lucide-react";

const ServiceSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          저희가 해드리는 것
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <div className="rounded-2xl border border-border bg-card p-8 card-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Filter className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">1단계 — 필수</span>
                <h3 className="text-xl font-bold text-foreground">바운스 정리</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              저희 발송 인프라로 오염된 리스트를 발송해
              하드/소프트 바운스를 분류하고
              유효한 주소만 추려드립니다.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-border bg-card p-8 card-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Send className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-semibold text-accent tracking-wider uppercase">2단계 — 선택</span>
                <h3 className="text-xl font-bold text-foreground">지속 발송</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              정화된 리스트로 계속 발송하실 수 있습니다.
              저희 발송 인프라를 계속 사용하시거나,
              Amazon SES, Mailgun, Mailjet, Postmark,
              SendGrid, SparkPost 등 타 발송 인프라를
              연결하여 사용하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
