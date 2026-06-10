import Link from "next/link";
import Container from "@/components/Container";

interface EstimateCTAProps {
  heading?: string;
  description?: string;
}

export default function EstimateCTA({
  heading = "병원 클린룸 시공이 필요하신가요?",
  description = "현장 실측 기반으로 정확한 견적과 시공순서를 안내해 드립니다.",
}: EstimateCTAProps) {
  return (
    <section className="py-[80px] md:py-[140px] bg-primary-dark">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-white">
            {heading}
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="tel:010-8115-0500"
              data-analytics-event="phone_click"
              data-analytics-source="estimate_cta"
              data-analytics-label="전화 상담"
              className="inline-flex items-center justify-center gap-2 bg-neutral-800 text-white px-8 py-4 rounded-[30px] font-extrabold hover:bg-white hover:text-neutral-800 border border-neutral-800 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              전화 상담
            </a>

            <Link
              href="/contact"
              data-analytics-event="contact_cta_click"
              data-analytics-source="estimate_cta"
              data-analytics-label="무료 상담 신청"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-[30px] font-extrabold border border-white hover:bg-white hover:text-primary-dark transition-all duration-200"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
