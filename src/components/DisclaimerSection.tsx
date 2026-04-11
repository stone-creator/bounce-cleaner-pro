import { Info } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container max-w-3xl mx-auto">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-bold text-foreground">주의사항</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li>※ 발송 속도는 수신자 메일 서버 정책에 따라 달라질 수 있습니다.</li>
            <li>※ 바운스율과 스팸 신고율은 별개의 문제입니다. 콘텐츠로 인한 스팸 신고율 문제는 서비스 범위 외입니다.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
