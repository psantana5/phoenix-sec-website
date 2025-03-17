'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { 
  FiShield, 
  FiServer, 
  FiCode, 
  FiUsers, 
  FiLock, 
  FiAlertTriangle, 
  FiDatabase, 
  FiCloud 
} from 'react-icons/fi';

export default function Services() {
  return (
    <div className="min-h-screen bg-dark-400 cyber-grid">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold terminal-text mb-8 text-center"
          >
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Comprehensive cybersecurity solutions tailored to protect your organization 
            from evolving threats and vulnerabilities.
          </motion.p>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="-my-20 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center terminal-text">Core Services</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Penetration Testing */}
            <ServiceCard
              icon={<FiShield size={32} />}
              title="Penetration Testing"
              color="primary"
              description="Our comprehensive penetration testing services identify vulnerabilities in your systems before attackers can exploit them."
              features={[
                "Web Application Testing",
                "Network Infrastructure Testing",
                "Cloud Environment Assessment",
                "IoT Device Security Testing",
                "Mobile Application Security"
              ]}
            />
            
            {/* Incident Response */}
            <ServiceCard
              icon={<FiServer size={32} />}
              title="Incident Response"
              color="secondary"
              description="Rapid and effective response to security incidents to minimize damage and restore operations quickly."
              features={[
                "24/7 Emergency Response",
                "Malware Analysis & Removal",
                "Forensic Investigation",
                "Post-Incident Analysis",
                "Recovery Planning"
              ]}
            />
            
            {/* Security Consulting */}
            <ServiceCard
              icon={<FiCode size={32} />}
              title="Security Consulting"
              color="primary"
              description="Expert guidance to strengthen your security posture and protect your critical assets."
              features={[
                "Security Architecture Review",
                "Risk Assessment",
                "Compliance Guidance",
                "Security Policy Development",
                "Vendor Security Assessment"
              ]}
            />
            
            {/* Training & Workshops */}
            <ServiceCard
              icon={<FiUsers size={32} />}
              title="Training & Workshops"
              color="secondary"
              description="Build security awareness and skills within your organization through specialized training programs."
              features={[
                "Security Awareness Training",
                "Developer Security Training",
                "CTF Coaching & Preparation",
                "Custom Security Workshops",
                "Executive Security Briefings"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Specialized Services */}
      <section className="py-30 px-4 bg-dark-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">Specialized Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpecializedServiceCard 
              icon={<FiCloud className="text-primary" size={24} />}
              title="Cloud Security"
              description="Secure your cloud infrastructure and applications with specialized assessments and hardening."
            />
            
            <SpecializedServiceCard 
              icon={<FiDatabase className="text-secondary" size={24} />}
              title="Data Protection"
              description="Implement robust data security controls and encryption strategies to protect sensitive information."
            />
            
            <SpecializedServiceCard 
              icon={<FiAlertTriangle className="text-primary" size={24} />}
              title="Threat Hunting"
              description="Proactively search for and eliminate threats that have evaded traditional security measures."
            />
            
            <SpecializedServiceCard 
              icon={<FiLock className="text-secondary" size={24} />}
              title="DevSecOps Integration"
              description="Embed security throughout your development lifecycle for secure and efficient delivery."
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="-mt-15 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center terminal-text">Our Process</h2>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            
            <div className="space-y-24">
              <ProcessStep 
                number="01"
                title="Discovery & Assessment"
                description="We begin by understanding your organization's unique security needs, infrastructure, and objectives to create a tailored approach."
                isLeft={true}
              />
              
              <ProcessStep 
                number="02"
                title="Security Testing & Analysis"
                description="Our experts conduct thorough security assessments using advanced tools and techniques to identify vulnerabilities and risks."
                isLeft={false}
              />
              
              <ProcessStep 
                number="03"
                title="Detailed Reporting"
                description="We provide comprehensive reports with clear explanations of findings, risk levels, and practical recommendations."
                isLeft={true}
              />
              
              <ProcessStep 
                number="04"
                title="Remediation Support"
                description="Our team assists with implementing security improvements and verifying that vulnerabilities have been properly addressed."
                isLeft={false}
              />
              
              <ProcessStep 
                number="05"
                title="Ongoing Protection"
                description="We offer continuous monitoring and periodic reassessments to ensure your security posture remains strong against evolving threats."
                isLeft={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 terminal-text">Ready to Strengthen Your Security?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation and discover how our services can protect your organization.
          </p>
          <Link href="/contact" className="neon-button">
            Request a Consultation
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

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  color: 'primary' | 'secondary';
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, color, description, features }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`p-8 bg-dark-400 rounded-lg border-2 border-${color}/30 hover:border-${color}/50 transition-all`}
    >
      <div className={`text-${color} mb-6`}>{icon}</div>
      <h3 className={`text-2xl font-bold mb-4 text-${color}`}>{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`text-${color} mr-2`}>›</span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Specialized Service Card Component
interface SpecializedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecializedServiceCard = ({ icon, title, description }: SpecializedServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-dark-300 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};

// Process Step Component
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const ProcessStep = ({ number, title, description, isLeft }: ProcessStepProps) => {
  return (
    <div className="relative">
      {/* Circle on timeline */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-400 border-2 border-primary z-10"></div>
      
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:mr-0 md:ml-auto'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-dark-400 rounded-lg border border-primary/20"
        >
          <div className="text-3xl font-bold text-primary/50 mb-2">{number}</div>
          <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};