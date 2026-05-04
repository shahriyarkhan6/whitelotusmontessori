import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <section id={id} className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </section>
  );
}
