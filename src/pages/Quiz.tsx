import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ArrowLeft, CheckCircle2, XCircle, Zap, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
}

const mockQuestions: Question[] = [
  { id: 1, question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1, topic: "Data Structures", difficulty: "easy" },
  { id: 2, question: "Which activation function is most commonly used in hidden layers of deep neural networks?", options: ["Sigmoid", "Tanh", "ReLU", "Softmax"], correct: 2, topic: "Neural Networks", difficulty: "medium" },
  { id: 3, question: "What does the 'R' in ACID stand for in database transactions?", options: ["Redundancy", "Reliability", "Rollback", "None — there's no R"], correct: 3, topic: "Databases", difficulty: "medium" },
  { id: 4, question: "In OS scheduling, what does 'starvation' refer to?", options: ["Process runs out of memory", "Process never gets CPU time", "Process crashes", "CPU overheats"], correct: 1, topic: "OS Scheduling", difficulty: "hard" },
  { id: 5, question: "What is the derivative of e^x?", options: ["xe^(x-1)", "e^x", "e^(x+1)", "ln(x)"], correct: 1, topic: "Calculus", difficulty: "easy" },
];

const difficultyColor = {
  easy: "text-mastery",
  medium: "text-accent",
  hard: "text-destructive",
};

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = mockQuestions[currentQ];

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 >= mockQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-xl p-8 text-center max-w-md w-full">
          <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-2">Quiz Complete!</h2>
          <p className="text-muted-foreground mb-6">You scored {score}/{mockQuestions.length}</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => { setCurrentQ(0); setScore(0); setSelected(null); setAnswered(false); setFinished(false); }} className="gradient-primary text-primary-foreground rounded-full px-6">Retry</Button>
            <Button onClick={() => navigate("/dashboard")} variant="outline" className="rounded-full px-6">Dashboard</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <Timer className="w-4 h-4" />
            {currentQ + 1}/{mockQuestions.length}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div key={q.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-muted-foreground">{q.topic}</span>
              <span className={`text-xs font-mono ${difficultyColor[q.difficulty]}`}>• {q.difficulty}</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{q.question}</h2>

            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                let borderClass = "border-border/50";
                if (answered && idx === q.correct) borderClass = "border-mastery bg-mastery/10";
                else if (answered && idx === selected && idx !== q.correct) borderClass = "border-destructive bg-destructive/10";

                return (
                  <motion.button
                    key={idx}
                    whileHover={!answered ? { scale: 1.01 } : {}}
                    whileTap={!answered ? { scale: 0.99 } : {}}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left glass rounded-lg p-4 border transition-all ${borderClass} ${!answered ? "hover:border-primary/50 cursor-pointer" : "cursor-default"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{opt}</span>
                      {answered && idx === q.correct && <CheckCircle2 className="w-5 h-5 text-mastery" />}
                      {answered && idx === selected && idx !== q.correct && <XCircle className="w-5 h-5 text-destructive" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {answered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Button onClick={handleNext} className="gradient-primary text-primary-foreground rounded-full px-8 mt-2">
                  {currentQ + 1 >= mockQuestions.length ? "See Results" : "Next Question"}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
