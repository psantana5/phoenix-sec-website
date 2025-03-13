'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send form data to the server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          recipient: 'admin@phoenix-sec.org'
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
            Contact Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Have questions about our services or ready to strengthen your security posture?
            Our team is here to help.
          </motion.p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="-mt-10 px-4 bg-dark-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-dark-400 p-8 rounded-lg border border-primary/20 h-full">
                <h2 className="text-2xl font-bold mb-6 text-primary terminal-text">Get In Touch</h2>
                
                <div className="space-y-6">
                  <ContactInfoItem 
                    icon={<FiMail />}
                    title="Email"
                    content="info@phoenix-security.com"
                    link="mailto:info@phoenix-security.com"
                  />
                  
                  <ContactInfoItem 
                    icon={<FiPhone />}
                    title="Phone"
                    content="+34 123 456 789"
                    link="tel:+34123456789"
                  />
                  
                  <ContactInfoItem 
                    icon={<FiMapPin />}
                    title="Location"
                    content="Barcelona, Spain"
                    link="https://maps.google.com/?q=Barcelona,Spain"
                  />
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/20">
                  <h3 className="text-lg font-bold mb-4 text-gray-200">Emergency Response</h3>
                  <p className="text-gray-300 mb-4">
                    For urgent security incidents requiring immediate attention:
                  </p>
                  <div className="flex items-center text-secondary">
                    <FiPhone className="mr-2" />
                    <a href="tel:+34999888777" className="hover:text-white transition-colors">
                      +34 999 888 777
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Available 24/7 for critical security incidents
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-dark-400 p-8 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-bold mb-6 text-primary terminal-text">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                      <FiCheck size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="neon-button-blue"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          value={formState.email}
                          onChange={handleChange}
                          required
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
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={6} 
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-300 border border-primary/30 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tell us about your security needs..."
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="text-red-400 text-sm py-2">
                        {error}
                      </div>
                    )}
                    
                    <div className="text-center">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`neon-button flex items-center justify-center mx-auto ${isSubmitting ? 'opacity-70' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-pulse mr-2">Sending</span>
                            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                          </>
                        ) : (
                          <>
                            Send Message
                            <FiSend className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 bg-dark-400">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center terminal-text">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <FaqItem 
              question="How quickly can you respond to a security incident?"
              answer="Our emergency response team is available 24/7. For critical incidents, we typically begin our response within 1-2 hours of notification."
            />
            
            <FaqItem 
              question="What industries do you specialize in?"
              answer="We have experience across multiple sectors including finance, healthcare, e-commerce, and technology. Our team adapts our security approach to the specific needs and compliance requirements of your industry."
            />
            
            <FaqItem 
              question="How long does a typical penetration test take?"
              answer="The duration depends on the scope and complexity of the systems being tested. A standard web application penetration test typically takes 1-2 weeks, while more comprehensive assessments may take 3-4 weeks."
            />
            
            <FaqItem 
              question="Do you offer retainer services for ongoing security support?"
              answer="Yes, we offer flexible retainer options that provide your organization with priority access to our security experts, regular assessments, and ongoing advisory services."
            />
          </div>
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

// Contact Info Item Component
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}

const ContactInfoItem = ({ icon, title, content, link }: ContactInfoItemProps) => {
  return (
    <div className="flex items-start">
      <div className="text-primary mt-1 mr-3">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-200 font-medium">{title}</h3>
        <a 
          href={link} 
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-gray-300 hover:text-primary transition-colors"
        >
          {content}
        </a>
      </div>
    </div>
  );
};

// FAQ Item Component
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-dark-300 rounded-lg border border-primary/20"
    >
      <h3 className="text-lg font-bold mb-3 text-primary">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </motion.div>
  );
};