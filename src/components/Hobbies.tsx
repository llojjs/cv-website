import { motion } from 'motion/react';
import { BookOpen, Mountain, Languages } from 'lucide-react';
import { Card } from './ui/card';

const hobbies = [
  {
    title: 'Bouldering',
    description: 'A great way to stay active, challenge myself, and keep a strong focus.',
    icon: Mountain
  },
  {
    title: 'Reading',
    description: 'I enjoy learning from books and expanding my perspective through different topics.',
    icon: BookOpen
  },
  {
    title: 'Language learning',
    description: 'I am passionate about learning languages and understanding different cultures.',
    icon: Languages
  }
];

export function Hobbies() {
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
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
