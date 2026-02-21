import { motion } from "framer-motion";
import { AlertTriangle, Brain, Zap, MessageSquare } from "lucide-react";

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  bgColor: string;
}

const actions: QuickAction[] = [
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    label: "Panic Mode",
    description: "Exam in < 3 days?",
    color: "text-panic",
    bgColor: "bg-panic/10 hover:bg-panic/20 border-panic/20",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    label: "Test Me",
    description: "Quick quiz on weak topics",
    color: "text-primary",
    bgColor: "bg-primary/10 hover:bg-primary/20 border-primary/20",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    label: "Explain Simply",
    description: "ELI5 any concept",
    color: "text-xp",
    bgColor: "bg-xp/10 hover:bg-xp/20 border-xp/20",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Study Chat",
    description: "AI copilot for studying",
    color: "text-mastery",
    bgColor: "bg-mastery/10 hover:bg-mastery/20 border-mastery/20",
  },
];

const QuickActions = () => {
  return (
    <div className="glass rounded-lg p-5">
      <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action, i) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${action.bgColor} border rounded-lg p-3 text-left transition-colors cursor-pointer`}
          >
            <div className={`${action.color} mb-2`}>{action.icon}</div>
            <p className={`text-sm font-semibold ${action.color}`}>{action.label}</p>
            <p className="text-[10px] text-muted-foreground">{action.description}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
