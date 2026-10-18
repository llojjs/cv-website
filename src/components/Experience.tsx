import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

const monthLabels: Record<string, string> = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

const formatDateRange = (startDate: string, endDate: string) => {
  const format = (value: string) => {
    const [year, month] = value.split('-');
    return `${monthLabels[month] ?? month} ${year}`;
  };

  return `${format(startDate)} – ${format(endDate)}`;
};

const experiences = [
  {
    title: "Production & Manufacturing Intern",
    company: "ABB Electrification",
    location: "Västerås, Sweden",
    startDate: "2025-06",
    endDate: "2026-08",
    displayDate: "Summer 2025 & 2026",
    description: [
      "Worked at ABB for two consecutive summers as a production and manufacturing intern in the electrical components manufacturing environment.",
      "Produced copper coils for industrial contactors, ensuring manufacturing quality standards and process reliability.",
      "Combined hands-on production work with continuous improvement and documentation of standardized work instructions.",
      "Collaborated with production personnel to optimize workflows and identify improvements in machine operations and process efficiency."
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Store Associate",
    company: "AutoMat",
    location: "Linköping, Sweden",
    startDate: "2023-08",
    endDate: "2024-06",
    description: [
      "Restocked and organized products, maintained the store environment, monitored expiration dates and supported product quality control and customer service."
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Warehouse Worker",
    company: "KG Knutsson",
    location: "Enköping, Sweden",
    startDate: "2023-06",
    endDate: "2023-08",
    description: [
      "Packed and sorted products, prepared orders for shipment and performed quality checks to ensure accurate handling and product condition."
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Waitress / Chef",
    company: "VilleValla Pub",
    location: "Linköping, Sweden",
    startDate: "2020-10",
    endDate: "2023-05",
    description: [
      "Worked in restaurant service and food preparation in a fast-paced environment, handling customer requests and day-to-day operational challenges."
    ],
    color: "from-emerald-500 to-green-600"
  },
  {
    title: "Warehouse Worker / Forklift Operator",
    company: "ICA Gruppen",
    location: "Västerås, Sweden",
    startDate: "2019-04",
    endDate: "2019-09",
    description: [
      "Operated forklifts and handled warehouse logistics at the ICA DE distribution warehouse."
    ],
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Service Employee",
    company: "Region Västmanland",
    location: "Västerås, Sweden",
    startDate: "2019-01",
    endDate: "2019-04",
    description: [
      "Performed cleaning and facility services in a hospital environment, following quality and hygiene requirements."
    ],
    color: "from-slate-500 to-gray-500"
  },
  {
    title: "Waitress",
    company: "Pizza Hut Sverige",
    location: "Västerås, Sweden",
    startDate: "2018-08",
    endDate: "2019-01",
    description: [
      "Provided restaurant service with an emphasis on customer satisfaction, communication and efficient service."
    ],
    color: "from-rose-500 to-red-500"
  },
  {
    title: "Vice President",
    company: "East Asian Association LiU",
    location: "Linköping, Sweden",
    startDate: "2022-08",
    endDate: "2023-08",
    description: [
      "Organized cultural events, language cafés, film screenings and formal dinners.",
      "Developed partnerships with student organizations, mentored new board members and supported leadership transitions."
    ],
    color: "from-purple-500 to-pink-500"
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
                        <span>{exp.displayDate ?? formatDateRange(exp.startDate, exp.endDate)}</span>
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