import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Menu, X } from "lucide-react";
import StatsBar from "@/components/StatsBar";
import MissionCard from "@/components/MissionCard";
import type { Mission } from "@/components/MissionCard";
import TopicMastery from "@/components/TopicMastery";
import QuickActions from "@/components/QuickActions";
import UpcomingExams from "@/components/UpcomingExams";
import ReadinessRing from "@/components/ReadinessRing";

const mockMissions: Mission[] = [
  { id: "1", title: "Review Neural Network Basics", subject: "Machine Learning", type: "review", difficulty: "medium", xpReward: 50, estimatedMin: 15, completed: false },
  { id: "2", title: "Practice Integration by Parts", subject: "Calculus II", type: "practice", difficulty: "hard", xpReward: 75, estimatedMin: 20, completed: false },
  { id: "3", title: "Quiz: Binary Search Trees", subject: "Data Structures", type: "quiz", difficulty: "easy", xpReward: 30, estimatedMin: 10, completed: true },
  { id: "4", title: "Read Chapter 7: Memory Management", subject: "Operating Systems", type: "read", difficulty: "medium", xpReward: 40, estimatedMin: 25, completed: false },
  { id: "5", title: "Flashcards: SQL Joins", subject: "Databases", type: "quiz", difficulty: "easy", xpReward: 25, estimatedMin: 8, completed: true },
];

const mockTopics = [
  { name: "Neural Networks", mastery: 42, questionsAnswered: 28 },
  { name: "Binary Trees", mastery: 78, questionsAnswered: 45 },
  { name: "Integration", mastery: 25, questionsAnswered: 12 },
  { name: "SQL Queries", mastery: 85, questionsAnswered: 60 },
  { name: "OS Scheduling", mastery: 55, questionsAnswered: 20 },
  { name: "Graph Algorithms", mastery: 33, questionsAnswered: 15 },
];

const mockExams = [
  { subject: "Machine Learning", date: "Mar 5", daysLeft: 2, readiness: 42 },
  { subject: "Calculus II", date: "Mar 10", daysLeft: 7, readiness: 58 },
  { subject: "Data Structures", date: "Mar 18", daysLeft: 15, readiness: 76 },
];

const Index = () => {
  const [missions, setMissions] = useState(mockMissions);

  const toggleMission = (id: string) => {
    setMissions(prev =>
      prev.map(m => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  const completedCount = missions.filter(m => m.completed).length;
  const totalXP = missions.filter(m => m.completed).reduce((sum, m) => sum + m.xpReward, 0) + 1240;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-border/50 bg-card/30 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">
                Neuro<span className="text-primary">Pilot</span>
              </h1>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                Autonomous Study OS
              </p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-muted-foreground">Welcome back,</p>
            <p className="text-sm font-semibold text-foreground">Alex</p>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Bar */}
        <StatsBar xp={totalXP} streak={12} rank="Gold" readiness={72} />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Missions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Missions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-lg p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                    Today's Missions
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {completedCount}/{missions.length} completed
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-24 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(completedCount / missions.length) * 100}%` }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </div>
                  <span className="text-xs font-mono text-primary">
                    {Math.round((completedCount / missions.length) * 100)}%
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {missions.map((mission, i) => (
                  <MissionCard
                    key={mission.id}
                    mission={mission}
                    index={i}
                    onToggle={toggleMission}
                  />
                ))}
              </div>
            </motion.div>

            {/* Topic Mastery */}
            <TopicMastery topics={mockTopics} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <ReadinessRing percentage={72} label="Exam Readiness" />
            <QuickActions />
            <UpcomingExams exams={mockExams} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
