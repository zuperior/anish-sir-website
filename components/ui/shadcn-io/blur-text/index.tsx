'use client';

import { motion, Transition, Easing } from 'motion/react';
import React, { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
  text?: string;
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;

  /** 🔥 NEW PROP */
  preserveSegments?: string[];
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s))
  ]);
  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

/* ---------------------------------------------------
     ❇️ TEXT SPLITTER WITH PRESERVE SUPPORT
---------------------------------------------------- */
const splitTextWithPreserve = (
  text: string,
  mode: 'words' | 'letters',
  preserve: string[]
) => {
  if (preserve.length === 0) {
    return mode === 'words' ? text.split(' ') : text.split('');
  }

  let safeText = text;
  const markers: string[] = [];

  preserve.forEach((phrase, idx) => {
    if (!phrase) return;
    const marker = `@@SEG${idx}@@`;
    markers[idx] = phrase;
    safeText = safeText.split(phrase).join(marker);
  });

  const tokens = safeText.split(/(@@SEG\d+@@)/).filter(Boolean);
  const final: string[] = [];

  tokens.forEach((token) => {
    const match = token.match(/^@@SEG(\d+)@@$/);
    if (match) {
      final.push(markers[Number(match[1])]);
    } else {
      if (mode === 'words') {
        final.push(...token.split(' ').filter(Boolean));
      } else {
        final.push(...token.split(''));
      }
    }
  });

  return final;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  children,
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,

  /** NEW */
  preserveSegments = []
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from(
    { length: stepCount },
    (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1))
  );

  /** 🔥 APPLY PRESERVE LOGIC ONLY WHEN text MODE */
  const elements: React.ReactNode[] = children
    ? React.Children.toArray(children)
    : splitTextWithPreserve(text, animateBy, preserveSegments);

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{ display: 'inline', whiteSpace: 'pre-wrap' }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        const isPreserved = preserveSegments.includes(String(segment));

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{
              display: isPreserved ? 'inline-block' : 'inline',
              whiteSpace: isPreserved ? 'nowrap' : 'normal',
              willChange: 'transform, filter, opacity'
            }}
          >
            {segment}
            {animateBy === 'words' && index < elements.length - 1 ? ' ' : ''}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BlurText;
