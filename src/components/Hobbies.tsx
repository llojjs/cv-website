import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Mountain, Languages, Flame } from 'lucide-react';
import { Card } from './ui/card';

const BASE_STREAK_DATE = new Date('2026-10-18T00:00:00');

function getStockholmDate(date: Date) {
  return new Date(date.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' }));
}

function getStreakValue() {
  const stockholmNow = getStockholmDate(new Date());
  const baseDate = new Date(BASE_STREAK_DATE);
  const diffDays = Math.floor(
    (new Date(stockholmNow.getFullYear(), stockholmNow.getMonth(), stockholmNow.getDate()).getTime() -
      new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate()).getTime()) /
      86400000
  );

  return 287 + diffDays;
}

const hobbies = [
  {
    title: 'Bouldering',
    description: 'A great way to stay active, challenge myself, and keep a strong focus.',
    icon: Mountain,
    image: `${import.meta.env.BASE_URL}cv/bouldering.jpg`
  },
  {
    title: 'Reading',
    description: 'I enjoy learning from books and expanding my perspective through different topics.',
    icon: BookOpen
  },
  {
    title: 'Language learning',
    description: 'I am passionate about learning languages and understanding different cultures.',
    icon: Languages,
    languages: [
      { name: 'Chinese (Simplified)', code: 'cn', score: 60, level: 'B1 · Intermediate' },
      { name: 'German', code: 'de', score: 23, level: 'A1 · Beginner' },
      { name: 'Spanish', code: 'es', score: 11, level: 'A1 · Beginner' },
      { name: 'Dutch', code: 'nl', score: 9, level: 'A1 · Beginner' },
      { name: 'Portuguese', code: 'pt', score: 7, level: 'A1 · Beginner' },
      { name: 'Japanese', code: 'jp', score: 6, level: 'A1 · Beginner' }
    ]
  }
];

export function Hobbies() {
  const [streak, setStreak] = useState(getStreakValue);

  useEffect(() => {
    const updateStreak = () => setStreak(getStreakValue());
    updateStreak();

    const intervalId = window.setInterval(updateStreak, 60000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Hobbies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Things that keep me active, curious, and balanced
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-transparent p-0 shadow-none hover:shadow-none">
                  <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md ring-4 ring-emerald-50 mx-auto">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 text-center text-xl font-semibold">{hobby.title}</h3>
                  <p className="text-center text-gray-600 leading-relaxed">{hobby.description}</p>
                  {hobby.languages ? (
                    <div className="mt-5">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="flex min-w-0 items-center gap-2">
                          <img
                            src={`${import.meta.env.BASE_URL}cv/duolingo.png`}
                            alt="Duolingo logo"
                            className="h-6 w-6 object-contain"
                          />
                          <span className="text-sm font-semibold text-gray-800">
                            Duolingo – My Language Scores
                          </span>
                        </div>
                        <div className="flex shrink-0 items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-orange-700">
                          <Flame className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
                          <span className="text-xs font-semibold">{streak}</span>
                          <span className="text-[9px] font-medium text-orange-600">Day streak</span>
                        </div>
                      </div>

                      <div className="mb-2 flex justify-end">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                          Duolingo Score
                        </span>
                      </div>

                      <div className="space-y-3">
                        {hobby.languages.map((language) => (
                          <div
                            key={language.name}
                            className="rounded-xl border border-emerald-100 bg-emerald-50/40 px-3 py-2"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex min-w-0 items-center gap-2">
                                <span
                                  className={`fi fi-${language.code} inline-block h-4 w-6 overflow-hidden rounded-sm border border-emerald-200 bg-white shadow-sm`}
                                  aria-label={language.name}
                                  title={language.name}
                                />
                                <span className="truncate text-xs font-medium text-gray-700">
                                  {language.name}
                                </span>
                              </div>
                              <span className="text-sm font-semibold text-emerald-700">
                                {language.score}
                              </span>
                            </div>
                            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-emerald-100">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                                style={{ width: `${Math.min(language.score, 100)}%` }}
                              />
                            </div>
                            <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-gray-500">
                              {language.level}
                            </div>
                          </div>
                        ))}
                        <p className="mt-2 text-[10px] leading-relaxed text-gray-500">
                          CEFR levels are approximate Duolingo score equivalents, not official certifications.
                        </p>
                      </div>
                    </div>
                  ) : null}
                  {hobby.image ? (
                    <div className="mt-5 overflow-hidden rounded-xl">
                      <img
                        src={hobby.image}
                        alt={hobby.title}
                        className="h-48 w-full object-cover rounded-xl"
                      />
                    </div>
                  ) : null}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
