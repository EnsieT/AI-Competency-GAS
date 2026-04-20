import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { quizQuestions } from '../data/quiz';
import { UserProgress } from '../types';

export default function CompetencyTest({ progress, updateProgress }: { progress: UserProgress, updateProgress: (p: UserProgress) => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const q = quizQuestions[currentQ];
  const isComplete = currentQ >= quizQuestions.length;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
  };

  const handlePrevious = () => {
    if (currentQ > 0) {
      setCurrentQ(c => c - 1);
      setSelected(null);
      setShowResult(false);
      setAnswers(prev => prev.slice(0, -1));
    }
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected!];
    setAnswers(newAnswers);
    setSelected(null);
    setShowResult(false);
    
    if (currentQ === quizQuestions.length - 1) {
      let finalScore = 0;
      const topicScores: Record<string, { correct: number, total: number }> = {};
      
      quizQuestions.forEach((question, i) => {
        const isCorrect = newAnswers[i] === question.answer;
        if (isCorrect) finalScore++;
        
        if (!topicScores[question.topic]) {
          topicScores[question.topic] = { correct: 0, total: 0 };
        }
        topicScores[question.topic].total++;
        if (isCorrect) {
          topicScores[question.topic].correct++;
        }
      });
      
      updateProgress({ 
        ...progress, 
        competencyScore: finalScore,
        topicScores
      });
    } else {
      setCurrentQ(c => c + 1);
    }
  };

  if (isComplete || progress.competencyScore !== null) {
    const finalScore = progress.competencyScore !== null ? progress.competencyScore : answers.filter((a,i) => a === quizQuestions[i].answer).length;
    const percentage = Math.round((finalScore / quizQuestions.length) * 100);
    
    // Sort topics by weakest ratio
    const topics = progress.topicScores ? Object.entries(progress.topicScores).map(([topic, stats]) => ({
      topic,
      ratio: stats.correct / stats.total
    })).sort((a,b) => a.ratio - b.ratio) : [];

    return (
      <div className="max-w-2xl mx-auto py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 text-center">
          <div className="w-20 h-20 rounded-full border-2 border-indigo-500 bg-indigo-500/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
            <span className="text-2xl font-bold text-indigo-400">{percentage}%</span>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Assessment Completed</h2>
          <p className="text-sm text-gray-400 mb-6">You scored {finalScore} out of {quizQuestions.length}.</p>
          
          {topics.length > 0 && (
            <div className="mb-8 text-left bg-gray-950 p-5 rounded-xl border border-gray-800/50">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Topic Breakdown</h3>
              <div className="space-y-3">
                {topics.map(t => (
                  <div key={t.topic}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">{t.topic}</span>
                      <span className={t.ratio < 0.5 ? 'text-rose-400' : t.ratio < 1 ? 'text-amber-400' : 'text-emerald-400'}>
                        {Math.round(t.ratio * 100)}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${t.ratio < 0.5 ? 'bg-rose-500' : t.ratio < 1 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                        style={{ width: `${t.ratio * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={() => { setCurrentQ(0); setAnswers([]); updateProgress({ ...progress, competencyScore: null, topicScores: {} }); }} 
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm transition-colors border border-gray-700"
          >
            Retake Assessment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-2">
      <header className="border-b border-gray-800 pb-4 mb-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">General AI Competency</h2>
            <p className="text-sm text-indigo-400 font-medium">Session: {q.topic}</p>
          </div>
          <p className="text-sm text-gray-500 font-medium">Q {currentQ + 1} / {quizQuestions.length}</p>
        </div>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(129,140,248,0.5)]" 
            style={{ width: `${((currentQ) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </header>

      <motion.div 
        key={q.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
      >
        <h3 className="text-lg text-gray-200 font-medium mb-6 leading-relaxed">{q.question}</h3>
        
        <div className="space-y-3">
          {q.options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === q.answer;
            const reveal = showResult;
            
            let btnClass = "w-full text-left p-4 rounded-xl border-l-4 transition-all duration-200 flex items-center justify-between text-sm ";
            if (!reveal) {
              btnClass += isSelected 
                ? "border-indigo-500 bg-indigo-900/20 text-indigo-100" 
                : "border-transparent bg-gray-800/40 text-gray-300 hover:bg-gray-800 hover:border-gray-700";
            } else {
              if (isCorrect) btnClass += "border-emerald-500 bg-emerald-900/20 text-emerald-200";
              else if (isSelected) btnClass += "border-rose-500 bg-rose-900/20 text-rose-200";
              else btnClass += "border-transparent bg-gray-800/20 text-gray-600 opacity-50";
            }

            return (
              <button 
                key={idx} 
                onClick={() => handleSelect(idx)}
                disabled={showResult}
                className={btnClass}
              >
                <span>{option}</span>
                {reveal && isCorrect && <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />}
                {reveal && isSelected && !isCorrect && <XCircle className="text-rose-500 w-5 h-5 flex-shrink-0" />}
              </button>
            );
          })}
        </div>

        {showResult && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 pt-6 border-t border-gray-800">
            <div className="bg-indigo-950/30 border border-indigo-900/50 p-4 rounded-xl mb-6">
              <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-2">Explanation</span>
              <p className="text-[13px] text-indigo-100/80 leading-relaxed">{q.explanation}</p>
            </div>
          </motion.div>
        )}
        
        <div className="flex justify-between mt-6 pt-6 border-t border-gray-800">
          <button 
             onClick={handlePrevious} 
             disabled={currentQ === 0}
             className={`flex items-center gap-2 px-5 py-2.5 rounded transition text-sm font-medium ${currentQ === 0 ? 'bg-gray-800/20 text-gray-700 cursor-not-allowed' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
          >
             Previous
          </button>
          
          {showResult ? (
            <button onClick={handleNext} className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded hover:bg-indigo-500 transition text-sm font-medium">
              {currentQ === quizQuestions.length - 1 ? 'Finish Assessment' : 'Next Question'}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </div>
  );
}
