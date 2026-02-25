import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{aboutData.title}</span>
          </h2>
          <p className="text-gray-600 text-lg">{aboutData.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-lg">{para}</p>
            ))}
          </motion.div>

          <div className="space-y-6">
            {aboutData.highlights.map((highlight, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-4xl">{highlight.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
