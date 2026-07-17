"use client";

import { useInView } from "@/hooks/useAnimations";

export default function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-in ${inView ? "visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
