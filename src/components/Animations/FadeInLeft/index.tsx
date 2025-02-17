import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

type FadeInLeftProps = {
  children: React.ReactNode;
};

export default function FadeInLeft({ children }: FadeInLeftProps) {
  const { ref, inView } = useInView({
    rootMargin: "-50px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`animate__animated ${inView ? "animate__fadeInLeft" : "animate__fadeOut"}`}
    >
      {children}
    </div>
  );
}
