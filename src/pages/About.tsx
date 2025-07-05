import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Palette, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Palette, label: 'Custom Mandalas', value: '10+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '4+' },
    { icon: Heart, label: 'Passion Projects', value: '∞' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                <p className="mb-6">
                  I'm <span className="font-semibold text-blue-600">Shweta K R</span>, a passionate mandala curator and educator based in Chennai. Since 2021, I've been creating intricate mandalas, and I've been doing it professionally since 2023.
                </p>
                <p className="mb-6">
                  With over 10 custom mandalas crafted and numerous pre-made ones sold, my art form has become a way of life. For me, mandalas symbolize unity with the universe and the supreme power. They're my meditation, my salvation.
                </p>
                <p className="mb-6">
                  I thrive on complexity and intricacy, constantly challenging myself to improve. If you're looking for a unique, personalized mandala for your space, you've come to the right place.
                </p>
                <p className="font-semibold text-blue-700">
                  Let's collaborate and bring your vision to life!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/WhatsApp Image 2025-06-27 at 20.43.20_c7009423.jpg"
                  alt="Shweta K R"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              My Philosophy
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                "Mandalas are not just art pieces; they are gateways to inner peace and cosmic connection. 
                Each circle, each pattern, each color carries the energy of intention and the power of meditation. 
                Through my work, I aim to bring this sacred geometry into your daily life, 
                creating spaces that nurture your soul and inspire your spirit."
              </p>
              <div className="mt-8 text-blue-100 text-lg font-medium">
                - Shweta K R
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              My Journey
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">2021</div>
                  <div className="text-blue-100">The Beginning</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Discovery of Passion</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Started my journey into the world of mandalas, discovering the meditative and spiritual aspects of this ancient art form. What began as a hobby quickly became a deep passion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-8"
            >
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-teal-500 to-purple-500 text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">2023</div>
                  <div className="text-teal-100">Professional Journey</div>
                </div>
              </div>
              <div className="md:w-2/3 text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Turning Professional</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Transformed my passion into a profession, beginning to create custom mandalas for clients and sharing my knowledge through teaching. Each piece became a unique expression of spiritual artistry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold mb-2">Today</div>
                  <div className="text-purple-100">Continuing Growth</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Expanding Horizons</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Continuing to push the boundaries of mandala art, teaching others, and creating pieces that bring peace and beauty into people's lives. The journey of growth and discovery never ends.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;