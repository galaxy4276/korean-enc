interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  // R3F가 전역 JSX.IntrinsicElements에 three 요소를 머지하면 ElementType의 children 추론이
  // never로 깨진다. 렌더 태그를 일반 컴포넌트 타입으로 캐스팅해 추론을 분리한다.
  const Tag = Component as React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-5 md:px-[90px] lg:px-[180px] ${className}`}
    >
      {children}
    </Tag>
  );
}
