import { Settings, Hand } from "lucide-react";

const WarmupSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          웜업(Warm-up)이란?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 text-lg leading-relaxed">
          웜업은 발송 도메인·서버가
          수신 서버로부터 신뢰를 얻어가는 과정입니다.
        </p>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          새 도메인이 갑자기 대량으로 발송하면
          수신 서버는 비정상 트래픽으로 판단하고
          스팸함으로 분류하거나 차단합니다.
          그래서 발송량은 처음에 적게 시작해 점진적으로 늘려가야 합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 저희가 하는 것 */}
          <div className="rounded-2xl border border-border bg-card p-8 card-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary tracking-wider uppercase">자동 처리</span>
                <h3 className="text-xl font-bold text-foreground">저희가 하는 것</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              저희 인프라가 발송량을 자동으로 조절합니다.
              고객님께서 따로 신경 쓰실 부분은 없습니다.
            </p>
          </div>

          {/* 양해 부탁드리는 부분 */}
          <div className="rounded-2xl border border-border bg-card p-8 card-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Hand className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-semibold text-accent tracking-wider uppercase">초기 발송량</span>
                <h3 className="text-xl font-bold text-foreground">양해 부탁드리는 부분</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              첫 회차 발송량은 의도적으로 적게 시작합니다.
              "왜 이렇게 조금밖에 안 나가지?" 라고 느끼실 수 있지만,
              이는 도달률을 지키기 위한 필수 과정입니다.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              회차가 거듭될수록 발송량은 점진적으로 늘어나며,
              평판이 쌓이면 안정적인 규모로 발송하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarmupSection;
