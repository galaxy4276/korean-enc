import Link from "next/link";
import Container from "@/components/Container";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

interface RelatedLink {
  href: string;
  title: string;
  description?: string;
}

interface SeoRelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

export default function SeoRelatedLinks({
  title = "관련 페이지",
  links,
}: SeoRelatedLinksProps) {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
          Related
        </p>
        <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
          {title}
        </h2>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <StaggerItem key={link.href}>
              <Link
                href={link.href}
                className="block border border-neutral-200 bg-white p-8 hover:border-primary transition-colors duration-200 group"
              >
                <div className="w-12 h-1 bg-accent mb-6" />
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-200">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {link.description}
                  </p>
                )}
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
