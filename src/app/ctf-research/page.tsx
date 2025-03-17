'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { FiExternalLink, FiCode, FiLock, FiShield, FiServer, FiAward, FiBookOpen, FiChevronDown, FiChevronRight } from 'react-icons/fi';
<script defer data-domain="phoenix-sec.org" src="https://plausible.io/js/script.js"></script>

export default function CTFResearch() {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);
  
  const toggleArticle = (index: number) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };
  
  
  return (
    <div className="min-h-screen bg-dark-400 cyber-grid overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 mx-auto flex justify-center w-full"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg opacity-50 rounded-full"></div>
              <div className="relative bg-dark-400 p-3 rounded-full border border-primary/30">
                <FiCode className="text-primary w-8 h-8" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold terminal-text mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary"
          >
            CTF & Research
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
          >
            Explore our cybersecurity research, CTF achievements, and technical insights that help organizations stay ahead of emerging threats.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a href="#ctf-section" className="neon-button flex items-center gap-2">
              <span>CTF Achievements</span>
              <FiAward />
            </a>
            {/* Research Papers button removed */}
          </motion.div>
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0.1 + Math.random() * 0.2
              }}
              animate={{ 
                y: [null, Math.random() * -100 + "%"],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 15 + Math.random() * 20, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "linear"
              }}
              className="absolute w-24 h-24 border border-primary/20 rounded-lg"
              style={{ left: `${i * 20}%` }}
            />
          ))}
        </div>
      </section>
      
      {/* CTF Section */}
      <section id="ctf-section" className="py-20 px-4 bg-dark-300 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center terminal-text px-6 py-2 border-y border-primary/20">CTF Achievements</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TryHackMe",
                rank: "#1 in Spain",
                achievements: ["Top 1% Global Ranking", "100+ Rooms Completed", "Expert in Web App Security"],
                icon: <FiServer className="text-primary" size={24} />,
                color: "primary"
              },
              {
                title: "HackTheBox",
                rank: "Pro Hacker",
                achievements: ["20+ Machines Pwned", "Specialized in Active Directory", "Completed Pro Labs"],
                icon: <FiLock className="text-secondary" size={24} />,
                color: "secondary"
              },
              {
                title: "CTF Competitions",
                rank: "Multiple Podiums",
                achievements: ["Finalist in HackMadrid", "Top 10 in X-MAS CTF", "Winner of Local University CTF"],
                icon: <FiAward className="text-primary" size={24} />,
                color: "primary"
              },
              {
                title: "Vulnerability Research",
                rank: "Active Contributor",
                achievements: ["3 CVEs Published", "Bug Bounty Hunter", "Security Tool Developer"],
                icon: <FiShield className="text-secondary" size={24} />,
                color: "secondary"
              },
              {
                title: "Certifications",
                rank: "Industry Recognized",
                achievements: ["OSCP Certified", "eJPT Certified", "AWS Security Specialist"],
                icon: <FiBookOpen className="text-primary" size={24} />,
                color: "primary"
              },
              {
                title: "Community Contributions",
                rank: "Active Mentor",
                achievements: ["Workshop Presenter", "CTF Challenge Creator", "Open Source Contributor"],
                icon: <FiCode className="text-secondary" size={24} />,
                color: "secondary"
              }
            ].map((achievement, index) => (
              <CTFAchievementCard 
                key={index}
                title={achievement.title}
                rank={achievement.rank}
                achievements={achievement.achievements}
                icon={achievement.icon}
                color={achievement.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Research Section */}
      <section id="research-section" className="py-20 px-4 bg-dark-400 relative">
        <div className="absolute inset-0 bg-[url('/hex-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary/50"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center terminal-text px-6 py-2 border-y border-secondary/20">Research Papers</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/50"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "Advanced Techniques for Active Directory Penetration Testing",
                date: "October 2023",
                abstract: "This paper explores novel attack vectors against Active Directory environments, focusing on privilege escalation and lateral movement techniques that bypass common security controls.",
                tags: ["Active Directory", "Kerberos", "NTLM", "Lateral Movement"],
                link: "#"
              },
              {
                title: "Exploiting Vulnerabilities in Modern Web Frameworks",
                date: "July 2023",
                abstract: "An analysis of security weaknesses in popular JavaScript frameworks, with practical demonstrations of prototype pollution, server-side request forgery, and other emerging attack vectors.",
                tags: ["Web Security", "JavaScript", "SSRF", "Prototype Pollution"],
                link: "#"
              },
              {
                title: "Cloud Security Misconfigurations: Detection and Prevention",
                date: "March 2023",
                abstract: "This research identifies common security misconfigurations in AWS, Azure, and GCP environments, providing automated detection methods and remediation strategies for organizations.",
                tags: ["Cloud Security", "AWS", "Azure", "GCP", "IaC"],
                link: "#"
              },
              {
                title: "Reverse Engineering Techniques for IoT Firmware Analysis",
                date: "December 2022",
                abstract: "A comprehensive methodology for analyzing IoT device firmware to identify security vulnerabilities, with case studies on popular consumer devices and industrial control systems.",
                tags: ["IoT Security", "Firmware Analysis", "Reverse Engineering", "Embedded Systems"],
                link: "#"
              }
            ].map((paper, index) => (
              <ResearchPaperCard 
                key={index}
                title={paper.title}
                date={paper.date}
                abstract={paper.abstract}
                tags={paper.tags}
                link={paper.link}
                index={index}
                isExpanded={expandedArticle === index}
                toggleExpand={() => toggleArticle(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="py-20 px-4 bg-dark-300 relative">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-4 text-center terminal-text px-6 py-2 border-y border-primary/20">Open Source Tools</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ADHunter",
                description: "A PowerShell-based tool for detecting misconfigurations and security weaknesses in Active Directory environments.",
                features: ["Privilege Escalation Path Detection", "Kerberoasting Vulnerability Scanner", "Weak ACL Identification"],
                github: "https://github.com/psantana5/adhunter",
                color: "primary"
              },
              {
                title: "CloudScanPro",
                description: "A Python utility for scanning cloud environments and identifying security misconfigurations and compliance violations.",
                features: ["Multi-Cloud Support (AWS, Azure, GCP)", "Compliance Benchmarking", "Remediation Guidance"],
                github: "https://github.com/psantana5/cloudscanpro",
                color: "secondary"
              }
            ].map((tool, index) => (
              <ToolCard 
                key={index}
                title={tool.title}
                description={tool.description}
                features={tool.features}
                github={tool.github}
                color={tool.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 bg-dark-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 terminal-text">Interested in Collaboration?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking to collaborate on research projects, CTF teams, and security tool development. 
              Reach out to discuss how we can work together.
            </p>
            <Link href="/contact" className="neon-button group">
              <span>Get in Touch</span>
              <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-dark-400 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Phoenix Security</h3>
              <p className="text-gray-400">Advancing cybersecurity through research, education, and innovation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/ctf-research" className="text-gray-400 hover:text-primary transition-colors">Research</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/psantana5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <FiCode size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Phoenix Security. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface CTFAchievementCardProps {
  title: string;
  rank: string;
  achievements: string[];
  icon: React.ReactNode;
  color: string;
  index: number;
}

function CTFAchievementCard({ title, rank, achievements, icon, color, index }: CTFAchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-lg border border-${color}/20 bg-dark-500/50 backdrop-blur-sm hover:border-${color}/40 transition-colors`}
    >
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className={`text-${color}`}>{rank}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex items-center gap-2">
            <FiChevronRight className={`text-${color}`} />
            <span className="text-gray-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

interface ResearchPaperCardProps {
  title: string;
  date: string;
  abstract: string;
  tags: string[];
  link: string;
  index: number;
  isExpanded: boolean;
  toggleExpand: () => void;
}

function ResearchPaperCard({ title, date, abstract, tags, link, index, isExpanded, toggleExpand }: ResearchPaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-lg border border-secondary/20 bg-dark-500/50 backdrop-blur-sm"
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-secondary mb-4">{date}</p>
        </div>
        <button onClick={toggleExpand} className="text-gray-400 hover:text-secondary transition-colors">
          {isExpanded ? <FiChevronDown size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-300 mb-4">{abstract}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <a href={link} className="text-secondary hover:text-secondary-light flex items-center gap-2 transition-colors">
              Read Paper <FiExternalLink />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ToolCardProps {
  title: string;
  description: string;
  features: string[];
  github: string;
  color: string;
  index: number;
}

function ToolCard({ title, description, features, github, color, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-lg border border-${color}/20 bg-dark-500/50 backdrop-blur-sm hover:border-${color}/40 transition-colors`}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <FiChevronRight className={`text-${color}`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 text-${color} hover:text-${color}-light transition-colors`}
      >
        View on GitHub <FiExternalLink />
      </a>
    </motion.div>
  );
}
