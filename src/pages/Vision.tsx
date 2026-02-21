import { motion } from "framer-motion";
import { ArrowLeft, Brain, Target, Zap, Shield, Gamepad2, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Target, title: "AI Semester Planner", desc: "Upload your syllabus → get a structured weekly roadmap with daily missions auto-generated." },
  { icon: Brain, title: "Weakness Detection", desc: "Every answer is logged and scored. The AI calculates your Topic Mastery Score and adapts future questions." },
  { icon: Shield, title: "Panic Mode", desc: "Exam in 3 days? AI switches to weak topics only — rapid-fire quizzes and memory recall drills." },
  { icon: Gamepad2, title: "Dopamine Engine", desc: "XP, streaks, ranks from Bronze to Diamond, and a live exam readiness percentage to keep you motivated." },
  { icon: MessageSquare, title: "Study Copilot", desc: "Not a general chatbot. Ask 'explain like I'm 5', 'test me', or 'what am I bad at?' — context-aware responses." },
  { icon: Zap, title: "Adaptive Difficulty", desc: "Questions get harder as you improve. Plateaued? The engine switches strategies automatically." },
];

const Vision = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">Vision</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NeuroPilot isn't a chatbot. It's an autonomous study operating system that plans, tracks, adapts, and gamifies your entire learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Vision;
