import { motion } from 'motion/react';
import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Languages,
  PackageCheck,
  UsersRound,
} from 'lucide-react';
import { Card } from './ui/card';

const languages = [
  { name: 'Swedish', level: 'Native', progress: 100 },
  { name: 'English', level: 'Fluent', progress: 100 },
  { name: 'Mandarin Chinese (HSK4)', level: 'Conversational', progress: 50 },
  { name: 'German', level: 'Conversational', progress: 50 },
  { name: 'Korean', level: 'Basic', progress: 20 },
];

const technicalSkillGroups = [
  {
    title: 'Programming & Web Development',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Ada-95'],
  },
  { title: 'Data & Optimization', skills: ['R', 'AMPL'] },
  { title: 'Hardware & Systems', skills: ['VHDL'] },
];

const coreCompetencyGroups = [
  {
    title: 'Business & Strategy',
    icon: BarChart3,
    skills: ['Market Analysis', 'Business Development', 'Strategic Planning'],
  },
  {
    title: 'Leadership & Communication',
    icon: UsersRound,
    skills: ['Project Leadership', 'Event Organization', 'Cross-Cultural Communication'],
  },
  {
    title: 'Operations & Quality',
    icon: PackageCheck,
    skills: ['Quality Control', 'Inventory & Logistics Operations', 'Customer Service'],
  },
];

export function Skills() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-emerald-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-4xl text-transparent">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            A diverse skill set combining technical expertise with international communication abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="flex h-full flex-col p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                  <Languages className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Languages</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#334155' }}>{lang.name}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 500, color: '#64748b' }}>{lang.level}</span>
                    </div>
                    <div
                      style={{
                        height: '10px',
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: '9999px',
                        backgroundColor: '#e5e7eb',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${lang.progress}%`,
                          borderRadius: '9999px',
                          background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 100%)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="flex h-full flex-col p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Technical Skills</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {technicalSkillGroups.map((group) => (
                  <div key={group.title} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#334155', letterSpacing: '0.01em' }}>
                      {group.title}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f3f4f6',
                            color: '#374151',
                            borderRadius: '9999px',
                            padding: '6px 12px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            lineHeight: 1.2,
                            border: '1px solid #e5e7eb',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="flex h-full flex-col p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600">
                  <BriefcaseBusiness className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">Core Competencies</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {coreCompetencyGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div key={group.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            backgroundColor: '#ecfdf5',
                            color: '#10b981',
                            flexShrink: 0,
                          }}
                        >
                          <Icon style={{ width: '14px', height: '14px' }} />
                        </div>
                        <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#334155' }}>
                          {group.title}
                        </h4>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8125rem', lineHeight: 1.5, color: '#475569' }}>
                        {group.skills.map((skill) => (
                          <div key={skill} style={{ wordBreak: 'break-word', textAlign: 'left' }}>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
