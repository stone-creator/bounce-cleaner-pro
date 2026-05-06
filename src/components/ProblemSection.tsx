import { ShieldCheck } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto text-center">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 glow-box">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-xl font-bold text-foreground mb-2">
            다른 플랫폼도 바운스를 자동으로 걸러줍니다.<br />
            하지만 바운스율이 5%를 넘으면 계정을 정지합니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            저희는 다릅니다.<br />
            바운스율에 관계없이 계정 차단 없이 계속 발송할 수 있습니다.<br />
            발송하면서 바운스를 자동으로 수집하고<br />
            다음 발송 시 자동으로 제외합니다.<br />
            갈수록 깨끗해지는 리스트를 경험하세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
