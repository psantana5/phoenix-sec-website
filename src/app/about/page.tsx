'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen bg-dark-400 cyber-grid">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold terminal-text mb-8 text-center"
          >
            About Phoenix Security
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Founded by cybersecurity experts with a passion for ethical hacking, 
            Phoenix Security is dedicated to protecting organizations from evolving cyber threats.
          </motion.p>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center terminal-text">Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Pau Santana */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg border-2 border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent z-10"></div>
                <div className="h-full w-full bg-dark-400 flex items-center justify-center">
                  {/* Replace with actual image when available */}
                  <div className="text-6xl text-primary font-bold">PS</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Pau Santana</h3>
                <p className="text-gray-300">
                  HPC DevOps expert and former #1 ranked TryHackMe CTF player in Spain. 
                  With extensive experience in cloud infrastructure and penetration testing, 
                  Pau specializes in advanced security assessments and cloud security architecture.
                </p>
                <p className="text-gray-300">
                  His background in high-performance computing gives him unique insights into 
                  securing complex systems and identifying vulnerabilities that others miss.
                </p>
                
                <div className="flex space-x-4 pt-2">
                  <a href="https://www.linkedin.com/in/psantana5/" className="text-primary hover:text-white transition-colors">
                    <FiLinkedin size={24} />
                  </a>
                  <a href="https://github.com/psantana5" className="text-primary hover:text-white transition-colors">
                    <FiGithub size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Jan Carandell */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg border-2 border-secondary/30">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent z-10"></div>
                <div className="h-full w-full bg-dark-400 flex items-center justify-center">
                  {/* Replace with actual image when available */}
                  <div className="text-6xl text-secondary font-bold">JC</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-secondary">Jan Carandell</h3>
                <p className="text-gray-300">
                  Rising cybersecurity talent with a passion for ethical hacking and cutting-edge 
                  security research. Jan brings fresh perspectives and innovative approaches to 
                  security challenges.
                </p>
                <p className="text-gray-300">
                  His expertise in modern attack techniques and defensive strategies helps 
                  organizations stay ahead of emerging threats in the rapidly evolving 
                  cybersecurity landscape.
                </p>
                
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-secondary hover:text-white transition-colors">
                    <FiLinkedin size={24} />
                  </a>
                  <a href="#" className="text-secondary hover:text-white transition-colors">
                    <FiGithub size={24} />
                  </a>
                  <a href="#" className="text-secondary hover:text-white transition-colors">
                    <FiTwitter size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-dark-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-dark-300 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Think Like Attackers</h3>
              <p className="text-gray-300">
                We approach security from an attacker's perspective, identifying vulnerabilities 
                before malicious actors can exploit them.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-dark-300 rounded-lg border border-secondary/20"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Continuous Learning</h3>
              <p className="text-gray-300">
                We stay at the forefront of cybersecurity through ongoing research, training, 
                and participation in the global security community.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-dark-300 rounded-lg border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Client Partnership</h3>
              <p className="text-gray-300">
                We work closely with our clients, providing clear communication and actionable 
                recommendations to strengthen their security posture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 terminal-text">Ready to Secure Your Systems?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free security consultation and take the first step toward 
            comprehensive protection for your organization.
          </p>
          <Link href="/contact" className="neon-button">
            Get Started
          </Link>
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