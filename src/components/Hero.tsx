import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';
import cvPhoto from 'figma:asset/dba4d76eb80855cfe0f5cec51730c5a71aa51cc2.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Louise Eriksson
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            4th year M.Sc. Industrial Engineering - 
            <br />
            International Chinese at Linköpings University
          </motion.p>
          
          <motion.div 
            className="space-y-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>louiseeeriksson56@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <Phone className="w-5 h-5" />
              <span>+46 705 747 729</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Västerås, Sweden</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="/cv/LouiseErikssonCV.pdf"
                download="LouiseErikssonCV.pdf"
                aria-label="Download CV as PDF"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-2">
              <img 
                src={cvPhoto} 
                alt="Louise Eriksson" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <motion.div 
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
