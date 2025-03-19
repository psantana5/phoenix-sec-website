'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ReadPaper() {
  return (
    <div className="min-h-screen bg-dark-400 cyber-grid">
      <section className="relative py-16 px-4 sm:py-20 sm:px-6">
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold terminal-text mb-6 sm:mb-8 text-center text-white"
          >
            Advanced Techniques for Active Directory Penetration Testing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
          >
            This paper explores novel attack vectors against Active Directory environments,
            focusing on privilege escalation and lateral movement techniques that bypass
            common security controls.
          </motion.p>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 bg-dark-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 sm:mb-10 text-center terminal-text text-white">
            Key Concepts
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-300"
          >
            <div className="bg-dark-400 p-6 rounded-lg hover:bg-primary/90 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Active Directory</h3>
              <p className="text-gray-400">Managing user access and authentication within a network.</p>
            </div>
            <div className="bg-dark-400 p-6 rounded-lg hover:bg-primary/90 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Kerberos</h3>
              <p className="text-gray-400">A protocol used for secure authentication in a network environment.</p>
            </div>
            <div className="bg-dark-400 p-6 rounded-lg hover:bg-primary/90 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">NTLM</h3>
              <p className="text-gray-400">A suite of Microsoft security protocols used for authentication.</p>
            </div>
            <div className="bg-dark-400 p-6 rounded-lg hover:bg-primary/90 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Lateral Movement</h3>
              <p className="text-gray-400">Techniques used to move through a network once an attacker gains initial access.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 bg-dark-400">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl font-bold mb-4 text-gray-300"
          >
            Understanding the Paper
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10"
          >
            The **"Advanced Techniques for Active Directory Penetration Testing"** paper dives deep into the security vulnerabilities of Active Directory (AD) environments. AD is a critical component in most enterprises, handling user authentication and access control. However, its complexity and widespread adoption make it a prime target for attackers. This paper highlights advanced techniques for penetration testers, focusing on two crucial areas: **privilege escalation** and **lateral movement**.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10"
          >
            **Privilege escalation** in AD refers to exploiting vulnerabilities or misconfigurations to gain higher privileges than initially granted. Attackers often exploit these flaws to elevate their access from standard user rights to admin-level control, providing them with full access to the network's resources.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10"
          >
            On the other hand, **lateral movement** involves moving through the network once a foothold has been established. Attackers use this technique to access additional systems or domains, often leveraging trust relationships or misconfigurations between systems. By mastering lateral movement, attackers can traverse the network stealthily, evading detection.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10"
          >
            The paper also examines common attack vectors in AD environments, such as **Kerberos** and **NTLM** protocol abuse. By manipulating these protocols, attackers can impersonate legitimate users and escalate their privileges without triggering security alerts. Understanding how these protocols can be exploited is crucial for penetration testers to identify weaknesses in a system's defense.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10"
          >
            In addition to outlining these attack techniques, the paper stresses the importance of bypassing traditional security controls like firewalls and network segmentation. Many organizations rely on basic security measures, but sophisticated attackers can often find ways to bypass these defenses to maintain persistence and further compromise the network.
          </motion.p>
        </div>
      </section>

      <section className="py-10 sm:py-14 px-4 bg-dark-400">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-300">Want to Dive Deeper?</h3>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            Click the link below to read the full paper on Active Directory Penetration Testing.
          </p>
          <Link href="/test/paper.pdf" className="neon-button hover:bg-primary/90 transition-all" target="_blank">
            Read Paper
          </Link>
        </div>
      </section>

      <footer className="py-6 px-4 bg-dark-400 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Phoenix Security. All rights reserved.</p>
          <p className="mt-2">Securing the digital world, one exploit at a time.</p>
        </div>
      </footer>
    </div>
  );
}
