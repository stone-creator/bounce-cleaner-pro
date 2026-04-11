import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          지금 바로 바운스를 정리하세요.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          리스트가 깨끗해야 어디서든 발송할 수 있습니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="kakao" size="lg" className="h-14 px-8 text-lg rounded-xl" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              카카오톡 문의
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="h-14 px-8 text-lg rounded-xl" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              크몽 바로가기
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
