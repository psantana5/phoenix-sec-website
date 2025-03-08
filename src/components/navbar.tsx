"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./theme-provider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "CTF & Research", path: "/research" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-400/90 backdrop-blur-lg border-b border-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold terminal-text tracking-wider">
                PHOENIX<span className="text-secondary bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">SEC</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-3 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Open menu"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-300/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary/10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;