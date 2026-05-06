import { ShieldCheck } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto text-center">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 glow-box">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-xl font-bold text-foreground mb-2">
            문제는 차단이 아니라<br />
            리스트 그 자체입니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            오염된 리스트는 그대로 두면 영영 정리되지 않습니다.<br />
            다른 플랫폼은 바운스율 5%를 넘으면 계정을 정지하기 때문에,<br />
            정작 정리가 필요한 리스트는 발송조차 시도하지 못합니다.<br />
            <br />
            저희는 바운스율에 관계없이 발송하면서<br />
            바운스를 자동 수집·제외해 리스트를 정리해드립니다.<br />
            한 번 발송할 때마다 리스트는 자산이 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
