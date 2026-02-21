import { motion } from "framer-motion";
import { Flame, Zap, Trophy, Target } from "lucide-react";

interface StatsBarProps {
  xp: number;
  streak: number;
  rank: string;
  readiness: number;
}

const StatsBar = ({ xp, streak, rank, readiness }: StatsBarProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {/* XP */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-lg p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg gradient-xp flex items-center justify-center">
          <Zap className="w-5 h-5 text-accent-foreground" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">XP</p>
          <p className="text-xl font-bold text-xp font-mono">{xp.toLocaleString()}</p>
        </div>
      </motion.div>

      {/* Streak */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass rounded-lg p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg bg-streak/20 flex items-center justify-center">
          <Flame className="w-5 h-5 text-streak" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Streak</p>
          <p className="text-xl font-bold text-streak font-mono">{streak} days</p>
        </div>
      </motion.div>

      {/* Rank */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-lg p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <Trophy className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Rank</p>
          <p className="text-xl font-bold text-primary font-mono">{rank}</p>
        </div>
      </motion.div>

      {/* Readiness */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="glass rounded-lg p-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg bg-mastery/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-mastery" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Ready</p>
          <p className="text-xl font-bold text-mastery font-mono">{readiness}%</p>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsBar;
