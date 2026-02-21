import { motion } from "framer-motion";

interface Topic {
  name: string;
  mastery: number;
  questionsAnswered: number;
}

interface TopicMasteryProps {
  topics: Topic[];
}

const getMasteryColor = (mastery: number) => {
  if (mastery >= 80) return "bg-mastery";
  if (mastery >= 50) return "bg-xp";
  if (mastery >= 30) return "bg-streak";
  return "bg-panic";
};

const getMasteryLabel = (mastery: number) => {
  if (mastery >= 80) return "Strong";
  if (mastery >= 50) return "Growing";
  if (mastery >= 30) return "Weak";
  return "Critical";
};

const TopicMastery = ({ topics }: TopicMasteryProps) => {
  return (
    <div className="glass rounded-lg p-5">
      <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
        Topic Mastery
      </h2>
      <div className="space-y-3">
        {topics.map((topic, i) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-foreground">{topic.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground font-mono">
                  {topic.questionsAnswered} Qs
                </span>
                <span className="text-xs font-mono font-semibold text-foreground">
                  {topic.mastery}%
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${topic.mastery}%` }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                className={`h-full rounded-full ${getMasteryColor(topic.mastery)}`}
              />
            </div>
            <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
              {getMasteryLabel(topic.mastery)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopicMastery;
