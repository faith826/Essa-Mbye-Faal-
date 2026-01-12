
import React from 'react';

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center md:items-start space-y-1">
    <span className="text-2xl md:text-4xl font-semibold text-white tracking-tight">{value}</span>
    <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">{label}</span>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatBox label="Years Service" value="20+" />
          <StatBox label="Projects Completed" value="150+" />
          <StatBox label="Lives Impacted" value="10k+" />
          <StatBox label="Community Driven" value="100%" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
