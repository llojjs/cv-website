import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "louiseeeriksson56@gmail.com",
    href: "mailto:louiseeeriksson56@gmail.com",
    color: "from-emerald-500 to-cyan-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+46 705 747 729",
    href: "tel:+46705747729",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Västerås, Sweden",
    href: "https://www.google.com/maps/search/Västerås,+Sweden",
    color: "from-purple-500 to-pink-500"
  }
  // {
  // icon: MapPin,
  // label: "Location",
  // value: "Linköping, Sweden",
  // href: "https://www.google.com/maps/search/Linköping,+Sweden",
  // color: "from-purple-500 to-pink-500"
  // }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/louiseeriksson99/",
    color: "hover:text-emerald-600"
  },
  {
  icon: Github,
  label: "GitHub",
  href: "https://github.com/llojjs",
  color: "hover:text-gray-800"
},
  {
    icon: Globe,
    label: "Portfolio",
    href: "#",
    color: "hover:text-teal-600"
  }
];

export function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring international perspective and technical expertise to your team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer">
                <motion.a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="block text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2 text-white">{contact.label}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </p>
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-300 ${social.color} transition-colors duration-300`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-gray-400">
            © 2025 Louise Eriksson. Designed with passion for international collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}