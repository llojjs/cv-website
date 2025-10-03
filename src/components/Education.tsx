import { motion } from 'motion/react';
import { GraduationCap, Globe, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const education = [
  {
    degree: "MSc. Industrial Engineering and Management - International, Chinese",
    school: "Linköping University, Sweden",
    period: "2021-2027",
    details: [
      "Bachelor's Thesis in Computer Engineering: \"MealMate - A study on how to create a web application that is navigable and trustworthy\"",
      "Major Studies: Chinese 2020-2021",
      "Head of Design and Marketing at Welcome Reception for new students with TEKKEN Fadderet"
    ],
    color: "from-emerald-500 to-teal-500",
    icon: GraduationCap
  },
  {
    degree: "Exchange Year",
    school: "National Taiwan University (NTU) in Taipei, Taiwan",
    period: "2024-2025",
    details: [
      "Enrolled in the College of Management",
      "Completed 60 ECTS of engineering courses, where 30 ECTS were taught in Mandarin Chinese"
    ],
    color: "from-green-500 to-teal-500",
    icon: Globe
  },
  {
    degree: "Korean Language Studies",
    school: "Kyunghee University in Seoul, South Korea",
    period: "2019-2020",
    details: [
      "Completed three semesters of Korean language studies at Kyunghee University, reaching level 3 (out of 6)",
      "Gained conversational proficiency and cultural understanding"
    ],
    color: "from-pink-500 to-red-500",
    icon: Globe
  }
];

export function Education() {
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
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            International academic journey spanning engineering, management, and language studies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <Badge variant="secondary" className="text-sm">
                      {edu.period}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-lg text-emerald-600 mb-4">{edu.school}</p>
                  
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className="text-gray-700 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        • {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}