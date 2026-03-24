import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function CeoQuote() {
  return (
    <section className="bg-neutral-100 py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <blockquote className="mx-auto max-w-[720px] text-center">
            {/* Gold accent dash */}
            <span className="mx-auto mb-8 block h-[3px] w-[48px] bg-accent" />
            <p className="text-[18px] leading-[1.7] tracking-[-0.02em] text-neutral-900 md:text-[24px] md:leading-[1.7]">
              &ldquo;항상 최선을 다하며, 정직하고 맡은 바 끝까지 책임을 다하는
              코리아이앤씨가 되도록 노력하고 있습니다.&rdquo;
            </p>
            <footer className="mt-8 text-[14px] tracking-[-0.02em] text-neutral-600 md:text-[16px]">
              &mdash; 남기태 대표이사
            </footer>
          </blockquote>
        </ScrollReveal>
      </Container>
    </section>
  );
}
