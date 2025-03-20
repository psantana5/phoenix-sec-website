'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export default function ReadPaper() {
  return React.createElement(
    'div',
    { className: "min-h-screen bg-dark-400 cyber-grid" },
    React.createElement(
      'main',
      { 
        className: "relative py-16 px-4 sm:py-20 sm:px-6",
        'aria-labelledby': "paper-title"
      },
      React.createElement(
        'div',
        { className: "max-w-4xl mx-auto mt-8 sm:mt-12" },
        React.createElement(motion.h1, {
          id: "paper-title",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-3xl sm:text-4xl font-bold terminal-text mb-6 sm:mb-8 text-center text-white"
        }, "Advanced Techniques for Active Directory Penetration Testing"),
        React.createElement(motion.p, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.3, duration: 0.8 },
          className: "text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
        }, "This paper explores novel attack vectors against Active Directory environments, focusing on privilege escalation and lateral movement techniques that bypass common security controls.")
      )
    )
  );
}
