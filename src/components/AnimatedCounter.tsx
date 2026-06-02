"use client";
import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  target,
  suffix,
  prefix,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const observerSetRef = useRef(false);

  useEffect(() => {
    if (observerSetRef.current) return;

    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
      observerSetRef.current = true;
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hasStarted) {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [hasStarted, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
