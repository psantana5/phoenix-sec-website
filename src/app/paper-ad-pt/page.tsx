// src/app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReadPaper() {
  return (
    <div className="min-h-screen bg-dark-400 cyber-grid">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold terminal-text mb-8 text-center"
          >
            Advanced Techniques for Active Directory Penetration Testing
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            This paper explores novel attack vectors against Active Directory environments, 
            focusing on privilege escalation and lateral movement techniques that bypass 
            common security controls.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">Key Topics Covered</h2>
          <ul className="space-y-4 text-lg text-gray-300 text-center">
            <li>Active Directory</li>
            <li>Kerberos</li>
            <li>NTLM</li>
            <li>Lateral Movement</li>
          </ul>
        </div>
      </section>

      {/* Link to Read Paper */}
      <section className="py-20 px-4 bg-dark-400">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4 text-gray-300">Want to Dive Deeper?</h3>
          <p className="text-lg text-gray-400 mb-8">
            Click the link below to read the full paper on Active Directory Penetration Testing.
          </p>
          {/* Assuming the paper is located in the 'public' folder of your Next.js project */}
          <Link href="/test/paper.pdf" className="neon-button" target="_blank">
            Read Paper
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
