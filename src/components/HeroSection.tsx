import { Button } from "@/components/ui/button";
import { MessageCircle, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="relative z-20 px-6 py-5">
        <a href="/" className="inline-block">
          <img src="/logo.png" alt="Maily.biz" className="h-8" />
        </a>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 text-center px-4 py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 mb-8">
          <AlertTriangle className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">바운스 정리 없이는 대량 메일이 불가능합니다</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-foreground">대량 메일 발송,</span>
          <br />
          <span className="text-gradient">왜 안 될까요?</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          바운스 정리 없이는 어떤 대량 메일 발송 서비스도 소용없습니다.
        </p>

        <Button variant="kakao" size="lg" className="h-14 px-10 text-lg rounded-xl" asChild>
          <a href="http://pf.kakao.com/_wixdxlX/chat" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            카카오톡 문의
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
