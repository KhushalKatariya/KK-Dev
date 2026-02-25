import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {skillsData.title}
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {skillsData.subtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.categories.map((category, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Skills List */}
          <div className="space-y-6">
            {skillsData.categories[activeCategory].skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                  </div>
                  {/* <span className="text-sm font-bold text-blue-600">{skill.level}%</span> */}
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skillsData.categories[activeCategory].color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${skillsData.categories[activeCategory].bgGradient} rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6`}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">{skillsData.categories[activeCategory].level}</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {skillsData.categories[activeCategory].title}
              </h3>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Proficient in building modern, scalable solutions using industry-leading technologies and best practices.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {skillsData.categories[activeCategory].skills.length}+
                  </div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white">
                  <div className="text-2xl font-bold text-gray-800 mb-1">
                    {Math.round(skillsData.categories[activeCategory].skills.reduce((a, b) => a + b.level, 0) / skillsData.categories[activeCategory].skills.length)}%
                  </div>
                  <div className="text-sm text-gray-600">Avg Proficiency</div>
                </div>
              </div>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {skillsData.categories[activeCategory].skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. I believe in staying current with industry trends 
            and best practices to deliver cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
