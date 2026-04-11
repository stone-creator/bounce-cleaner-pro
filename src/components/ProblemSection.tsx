import { ShieldCheck } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          그런데 이상하지 않나요?
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            대부분의 대량 메일 플랫폼은<br />
            바운스율이 높으면 계정을 정지합니다.
          </p>
          <p className="font-semibold text-foreground">
            하지만 정작 바운스를 제거해주는 곳은 없습니다.
          </p>
          <p>
            "바운스율을 낮추세요"라고 경고만 할 뿐,<br />
            어떻게 낮춰야 하는지는 알려주지 않습니다.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 glow-box">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-xl font-bold text-foreground mb-2">
            저희는 국내에서 보기 드문<br />바운스 제거 서비스를 제공합니다.
          </p>
          <p className="text-muted-foreground">
            오염된 리스트를 가져오세요.<br />
            깨끗하게 정리해서 돌려드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
