import ScrollReveal from "@/components/ScrollReveal";
import Container from "@/components/Container";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center md:min-h-[85vh]">
      {/* Gradient placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(13,27,42,0.6)]" />

      <Container className="relative z-10 py-20 md:py-32">
        <ScrollReveal>
          <h1 className="text-[42px] leading-[1.24] font-black tracking-[-0.04em] text-white md:text-[56px] md:leading-[1.34]">
            20년 경험이 만드는
            <br />
            완벽한 수술실
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-[540px] text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-300 md:mt-8 md:text-[18px]">
            병원 클린룸(BCR) 전문 설계 &middot; 시공 &mdash; 수술실,
            중환자실, 격리실
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4 md:mt-12">
            <a
              href="tel:010-8115-0500"
              className="inline-flex items-center rounded-[30px] bg-primary px-8 py-4 text-[16px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 hover:bg-primary-light md:text-[18px]"
            >
              무료 상담 신청
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center rounded-[30px] border-2 border-white/60 px-8 py-4 text-[16px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 hover:border-white hover:bg-white/10 md:text-[18px]"
            >
              시공사례 보기
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
