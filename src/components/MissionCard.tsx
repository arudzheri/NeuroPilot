import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Zap } from "lucide-react";

interface Mission {
  id: string;
  title: string;
  subject: string;
  type: "quiz" | "review" | "practice" | "read";
  difficulty: "easy" | "medium" | "hard";
  xpReward: number;
  estimatedMin: number;
  completed: boolean;
}

interface MissionCardProps {
  mission: Mission;
  index: number;
  onToggle: (id: string) => void;
}

const difficultyColors = {
  easy: "text-mastery bg-mastery/10 border-mastery/20",
  medium: "text-xp bg-xp/10 border-xp/20",
  hard: "text-panic bg-panic/10 border-panic/20",
};

const typeIcons = {
  quiz: "⚡",
  review: "📖",
  practice: "✍️",
  read: "📚",
};

const MissionCard = ({ mission, index, onToggle }: MissionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={() => onToggle(mission.id)}
      className={`glass rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-primary/30 group ${
        mission.completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          {mission.completed ? (
            <CheckCircle2 className="w-5 h-5 text-mastery" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">{typeIcons[mission.type]}</span>
            <h3 className={`font-semibold text-sm ${mission.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {mission.title}
            </h3>
          </div>

          <p className="text-xs text-muted-foreground mb-2 font-mono">{mission.subject}</p>

          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${difficultyColors[mission.difficulty]}`}>
              {mission.difficulty}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
              <Clock className="w-3 h-3" /> {mission.estimatedMin}m
            </span>
            <span className="flex items-center gap-1 text-[10px] text-xp font-mono">
              <Zap className="w-3 h-3" /> +{mission.xpReward} XP
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;
export type { Mission };
