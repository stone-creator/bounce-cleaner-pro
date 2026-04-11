import { XCircle, Clock, AlertTriangle } from "lucide-react";

const BounceSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          바운스(Bounce)란 무엇인가요?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          이메일을 보냈는데 상대방 메일함에 도달하지 못하고
          되돌아오는 것을 바운스라고 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Hard Bounce */}
          <div className="rounded-2xl border border-danger/20 bg-danger/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-danger/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-danger" />
              </div>
              <h3 className="text-xl font-bold text-danger">하드 바운스</h3>
            </div>
            <p className="text-foreground font-medium mb-2">존재하지 않는 이메일 주소</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>→ 영구적으로 도달 불가</li>
              <li>→ 방치하면 계정 정지</li>
            </ul>
          </div>

          {/* Soft Bounce */}
          <div className="rounded-2xl border border-warning/20 bg-warning/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <h3 className="text-xl font-bold text-warning">소프트 바운스</h3>
            </div>
            <p className="text-foreground font-medium mb-2">메일함 용량 초과, 서버 일시 오류</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>→ 일시적 도달 불가</li>
              <li>→ 반복되면 하드 바운스로 전환</li>
            </ul>
          </div>
        </div>

        {/* Warning callout */}
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 flex items-start gap-4 max-w-2xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-foreground text-lg mb-1">바운스율이 5%를 넘으면?</p>
            <p className="text-muted-foreground">
              대부분의 이메일 마케팅 플랫폼이 자동으로 계정을 정지합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BounceSection;
