import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

interface Exam {
  subject: string;
  date: string;
  daysLeft: number;
  readiness: number;
}

interface UpcomingExamsProps {
  exams: Exam[];
}

const UpcomingExams = ({ exams }: UpcomingExamsProps) => {
  return (
    <div className="glass rounded-lg p-5">
      <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
        Upcoming Exams
      </h2>
      <div className="space-y-2">
        {exams.map((exam, i) => (
          <motion.div
            key={exam.subject}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
              exam.daysLeft <= 3
                ? "bg-panic/10 border border-panic/20 hover:bg-panic/15"
                : "bg-secondary/50 hover:bg-secondary"
            }`}
          >
            <Calendar className={`w-4 h-4 ${exam.daysLeft <= 3 ? "text-panic" : "text-muted-foreground"}`} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{exam.subject}</p>
              <p className={`text-[10px] font-mono ${exam.daysLeft <= 3 ? "text-panic" : "text-muted-foreground"}`}>
                {exam.daysLeft <= 3 ? `⚠️ ${exam.daysLeft} days left` : `${exam.daysLeft} days left`} • {exam.date}
              </p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-mono font-bold ${
                exam.readiness >= 70 ? "text-mastery" : exam.readiness >= 40 ? "text-xp" : "text-panic"
              }`}>
                {exam.readiness}%
              </p>
              <p className="text-[10px] text-muted-foreground">ready</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingExams;
