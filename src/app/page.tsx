'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { FiServer, FiShield, FiCode, FiUsers } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-400 cyber-grid">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-400/50 to-dark-400 z-0"></div>
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold hero-typing-text mb-4"
          >
            <TypeAnimation
              sequence={[
                'Securing the Future,',
                1000,
                'Securing the Future, One Exploit at a Time.',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Elite penetration testing, incident response, and cybersecurity training
            from industry experts.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link href="/contact" className="neon-button">
              <span className="font-bold">Get a Free Security Consultation</span>
            </Link>
            <Link href="/services" className="neon-button-blue flex items-center justify-center">
              <span className="font-bold">Explore Our Services</span>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 p-6 bg-dark-400 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-primary">Pau Santana</h3>
              <p className="text-gray-300">HPC DevOps expert and former #1 ranked TryHackMe CTF player in Spain. Specializing in advanced penetration testing and cloud security.</p>
            </div>
            <div className="space-y-6 p-6 bg-dark-400 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-bold text-secondary">Jan Carandell</h3>
              <p className="text-gray-300">Rising cybersecurity talent with a passion for ethical hacking and cutting-edge security research.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/about" className="text-primary hover:text-secondary transition-colors underline">Learn more about our team</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-dark-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<FiShield className="text-primary" size={24} />}
              title="Penetration Testing"
              description="Web, Network, Cloud, and IoT security assessments to identify vulnerabilities before attackers do."
            />
            <ServiceCard 
              icon={<FiServer className="text-secondary" size={24} />}
              title="Incident Response"
              description="Rapid recovery from cyber attacks with our expert team available 24/7."
            />
            <ServiceCard 
              icon={<FiCode className="text-primary" size={24} />}
              title="Security Consulting"
              description="Comprehensive audits, risk assessments, and compliance guidance."
            />
            <ServiceCard 
              icon={<FiUsers className="text-secondary" size={24} />}
              title="Training & Workshops"
              description="CTF coaching and cybersecurity awareness programs for your team."
            />
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="neon-button">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Phoenix Security found critical vulnerabilities that our previous security audits missed. Their expertise is unmatched."
              author="CTO, Financial Services Company"
            />
            <TestimonialCard 
              quote="The incident response team saved our business after a ransomware attack. They were professional, fast, and thorough."
              author="CEO, E-commerce Platform"
            />
            <TestimonialCard 
              quote="Their security training transformed how our development team approaches code security. Highly recommended."
              author="Lead Developer, SaaS Startup"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-dark-400">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tell us about your security needs..."
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="neon-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-dark-400 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Phoenix Security. All rights reserved.</p>
          <p className="mt-2">Securing the digital world, one exploit at a time.</p>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-dark-300 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className="p-6 bg-dark-400 rounded-lg border border-secondary/20">
      <p className="text-gray-300 italic mb-4">"{quote}"</p>
      <p className="text-secondary font-medium">— {author}</p>
    </div>
  );
};
