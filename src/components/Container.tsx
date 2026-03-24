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
  return (
    <Component
      className={`mx-auto max-w-[1440px] px-5 md:px-[90px] lg:px-[180px] ${className}`}
    >
      {children}
    </Component>
  );
}
