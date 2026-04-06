import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'mohdabdulrafi17@gmail.com',
    link: 'mailto:mohdabdulrafi17@gmail.com',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+91 9959088937',
    link: 'tel:+919959088937',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'Connect with me',
    link: '#',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,    
      email: formData.email,  
      title: formData.message 
    };

    // Auto-reply email to user
    emailjs.send(
      'service_fetsjrg',
      'template_9pj70g8',   
      templateParams,
      'r55MTHf8fmHRBCmKj'
    )
    .then(() => {
      toast.success('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => toast.error('Something went wrong!'));

    // Notification email to admin
    const adminTemplateParams = {
      from_name: formData.name,   
      reply_to: formData.email,   
      message: formData.message   
    };

    emailjs.send(
      'service_fetsjrg',        
      'template_p208vad',       
      adminTemplateParams,
      'r55MTHf8fmHRBCmKj'
    )
    .then(() => console.log('Notification sent to admin!'))
    .catch((err) => console.error('EmailJS admin error:', err));
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">

      {/* Background & Decorations */}
     <div className="absolute inset-0">
        {/* Soft gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0a0a] to-black opacity-90"></div>
</div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In <span className="text-blue-500 glow-blue">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Connect!</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast container must be somewhere in the JSX tree */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="colored"
      />
    </section>
  );
};

export default Contact;
