import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactData, personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(contactData.successMessage);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{contactData.title}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{contactData.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder={contactData.formFields.name.placeholder} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-gray-800" required />
            <input type="email" name="email" placeholder={contactData.formFields.email.placeholder} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-gray-800" required />
            <textarea name="message" placeholder={contactData.formFields.message.placeholder} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="6" className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-gray-800 resize-none" required />
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/30">Send Message</motion.button>
          </motion.form>

          <div className="space-y-6">
            {contactData.contactMethods.map((method, idx) => (
              <motion.a key={idx} href={method.link} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  {method.icon === 'email' ? '📧' : method.icon === 'phone' ? '📱' : '📍'}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">{method.title}</div>
                  <div className="text-gray-600">{method.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
