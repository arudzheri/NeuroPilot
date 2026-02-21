import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center z-10 px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
            Neuro<span className="text-primary">Pilot</span>
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground tracking-tight mb-6"
        >
          Neuro<span className="text-primary">Pilot</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12 space-y-1"
        >
          <p className="text-lg text-muted-foreground">
            The AI that trains you until you're exam-ready.
          </p>
          <p className="text-lg text-muted-foreground">
            Not another chatbot — an adaptive learning engine.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="px-8 py-6 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 hover:text-background border-none rounded-full"
          >
            Open Dashboard
          </Button>
          <Button
            onClick={() => navigate("/quiz")}
            className="px-8 py-6 text-base font-semibold gradient-primary text-primary-foreground hover:opacity-90 border-none rounded-full"
          >
            Start Adaptive Quiz
          </Button>
          <Button
            onClick={() => navigate("/vision")}
            variant="outline"
            className="px-8 py-6 text-base font-semibold border-border/50 text-foreground hover:bg-secondary rounded-full"
          >
            View Vision
          </Button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 text-sm text-muted-foreground"
      >
        Built for HackLondon 2026 🚀
      </motion.p>
    </div>
  );
};

export default Landing;
