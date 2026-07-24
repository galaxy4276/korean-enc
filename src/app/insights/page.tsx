import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { getInsights } from "@/lib/insights";

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <>
      <section className="bg-primary-dark pt-[140px] pb-[80px] md:pt-[200px] md:pb-[120px]">
        <Container>
          <ScrollReveal>
            <p className="mb-4 text-sm font-bold tracking-[-0.02em] text-accent">INSIGHTS</p>
            <h1 className="max-w-3xl text-[38px] font-bold leading-[1.25] tracking-[-0.04em] text-white md:text-[56px]">
              병원 클린룸 시공을
              <br />
              준비하는 실무 가이드
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.8] tracking-[-0.02em] text-neutral-300 md:text-lg">
              공사 전 확인할 공간·설비·운영 조건을 이해하기 쉽게 정리합니다.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-[80px] md:py-[140px]">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {insights.map((insight) => (
              <ScrollReveal key={insight.slug}>
                <article className="group h-full border border-neutral-200 bg-white transition-shadow hover:shadow-lg">
                  <Link href={`/insights/${insight.slug}`} className="block">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={insight.heroImage}
                        alt={insight.heroAlt}
                        fill
                        sizes="(max-width: 1080px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-7 md:p-9">
                      <p className="mb-3 text-sm font-bold tracking-[-0.02em] text-primary">
                        {insight.category}
                      </p>
                      <h2 className="text-2xl font-bold leading-[1.35] tracking-[-0.04em] text-neutral-900">
                        {insight.title}
                      </h2>
                      <p className="mt-4 text-sm leading-[1.8] tracking-[-0.02em] text-neutral-600 md:text-base">
                        {insight.description}
                      </p>
                      <p className="mt-6 text-sm font-bold tracking-[-0.02em] text-primary">글 읽기</p>
                    </div>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
