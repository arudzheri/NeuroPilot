import { motion } from "framer-motion";

interface ReadinessRingProps {
  percentage: number;
  label: string;
}

const ReadinessRing = ({ percentage, label }: ReadinessRingProps) => {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage >= 70) return "stroke-mastery";
    if (percentage >= 40) return "stroke-xp";
    return "stroke-panic";
  };

  return (
    <div className="glass rounded-lg p-5 flex flex-col items-center justify-center">
      <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
        {label}
      </h2>
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r={radius}
            className="stroke-secondary"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            className={getColor()}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold font-mono text-foreground"
          >
            {percentage}%
          </motion.span>
          <span className="text-[10px] text-muted-foreground font-mono uppercase">Overall</span>
        </div>
      </div>
    </div>
  );
};

export default ReadinessRing;
