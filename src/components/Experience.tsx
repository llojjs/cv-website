import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

const experiences = [
  {
    title: "Assembler",
    company: "ABB Electrification",
    location: "Västerås",
    period: "June – August 2025",
    description: [
      "Worked in coil production for conductors, ensuring precision and quality in industrial manufacturing processes",
      "Gained hands-on experience in electrical component assembly and quality control"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Vice President",
    company: "The East Asian Association, Linköping University",
    location: "Linköping",
    period: "August 2022 – August 2023",
    description: [
      "Organized cultural events, language cafés, and film festivals to foster cross-cultural exchange",
      "Led planning of formal dinners and built partnerships with organizations",
      "Mentored new executive members to ensure leadership continuity"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Warehouse Worker",
    company: "KG Knutsson’s Warehouse (Eterni)",
    location: "Enköping",
    period: "Summer 2023",
    description: [
      "Performed packing, sorting, and post-sorting quality checks",
      "Maintained accurate inventory handling and met daily productivity targets"
    ],
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Service Staff",
    company: "Villevalla Pub",
    location: "Linköping",
    period: "June 2020 – June 2023",
    description: [
      "Worked in a fast-paced kitchen and bar, ensuring timely, high-quality service",
      "Trained new staff on operations, safety protocols, and customer service"
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Warehouse Worker",
    company: "ICA’s Warehouse (Randstad)",
    location: "Västerås",
    period: "April – September 2019, Summer 2020, Summer 2021",
    description: [
      "Handled packing and sorting; prepared products for shipping",
      "Executed quality control checks and supported high-volume order processing"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Service Employee",
    company: "Region Västmanland",
    location: "Västerås",
    period: "January – April 2019",
    description: [
      "Performed high-quality cleaning and service tasks at the city’s largest hospital"
    ],
    color: "from-slate-500 to-gray-500"
  },
  {
    title: "Waitress",
    company: "Pizza Hut Sverige",
    location: "Västerås",
    period: "August 2018 – January 2019",
    description: [
      "Delivered customer-focused service, handled orders and payments, and supported a busy dine-in environment"
    ],
    color: "from-rose-500 to-red-500"
  }
];


export function Experience() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse background spanning engineering, leadership, hospitality, and logistics
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full z-10 hidden md:block" />
                
                <Card className="ml-0 md:ml-20 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-emerald-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">{exp.title}</h3>
                      <p className="text-lg text-emerald-600 mb-2">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:text-right text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}