
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const AnimatedNumber: React.FC<{ value: string; delay: number }> = ({ value, delay }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  
  const numMatch = value.match(/[\d.]+/);
  const numericValue = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, '');

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      let startTime: number | null = null;
      const duration = 2000;
      let animationFrame: number;

      const timeout = setTimeout(() => {
        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const currentVal = Math.floor(easeOutQuad * numericValue);
          node.textContent = currentVal + suffix;
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            node.textContent = value;
          }
        };
        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);
      
      return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(animationFrame);
      };
    } else if (ref.current) {
      ref.current.textContent = '0' + suffix;
    }
  }, [inView, delay, numericValue, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
};

const StatBox: React.FC<{ label: string; value: string; delay: number }> = ({ label, value, delay }) => (
  <motion.div 
    className="flex flex-col items-center md:items-start space-y-1"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.8 }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
  >
    <span className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
      <AnimatedNumber value={value} delay={delay} />
    </span>
    <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">{label}</span>
  </motion.div>
);

const Stats: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatBox label="Years Service" value="20+" delay={0.1} />
          <StatBox label="Projects Completed" value="150+" delay={0.2} />
          <StatBox label="Lives Impacted" value="10k+" delay={0.3} />
          <StatBox label="Community Driven" value="100%" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
