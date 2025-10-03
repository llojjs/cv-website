import { motion } from 'motion/react';
import { Code, Languages, Briefcase, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

const languages = [
  { name: "Swedish", level: "Native", progress: 100 },
  { name: "English", level: "Fluent", progress: 95 },
  { name: "Mandarin Chinese (HSK4)", level: "Conversational", progress: 75 },
  { name: "German", level: "Conversational", progress: 60 },
  { name: "Korean", level: "Basic", progress: 40 }
];

const programmingSkills = [
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "HTML/CSS", level: 90 },
  { name: "R", level: 75 },
  { name: "Java", level: 70 },
  { name: "ADA-95", level: 65 },
  { name: "AMPL", level: 60 }
];

const professionalSkills = [
  "Cross-cultural Management",
  "Project Leadership", 
  "Quality Control",
  "International Business",
  "Event Organization",
  "Customer Service",
  "Team Training & Development",
  "Manufacturing Processes"
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse skill set combining technical expertise with international communication abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-gray-600">{lang.level}</span>
                    </div>
                    <Progress value={lang.progress} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl">Programming</h3>
              </div>
              
              <div className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl">Professional</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}