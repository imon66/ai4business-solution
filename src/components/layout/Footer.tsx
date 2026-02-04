'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowRight, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'AI Solutions', href: '/services#ai' },
    { label: 'Web Development', href: '/services#development' },
    { label: 'Digital Strategy', href: '/services#strategy' },
    { label: 'Consulting', href: '/services#consulting' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Our Process', href: '/about#process' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#150A24', borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
      {/* CTA Section */}
      <div className="container-custom py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading" style={{ color: '#F3E8FF' }}>
            Ready to Build Something{' '}
            <span className="gradient-text">Exceptional?</span>
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto" style={{ color: '#A78BFA' }}>
            Let&apos;s discuss how we can help transform your business with cutting-edge AI and digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent font-medium transition-all duration-300"
                style={{ 
                  border: '1px solid rgba(168, 85, 247, 0.2)', 
                  color: '#F3E8FF' 
                }}
              >
                Schedule a Call
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Footer Content */}
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="AI4Business"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: '#A78BFA' }}>
              We build premium AI-powered solutions and digital experiences for forward-thinking businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:text-purple-400"
                  style={{
                    backgroundColor: '#0D0118',
                    border: '1px solid rgba(168, 85, 247, 0.15)',
                    color: '#A78BFA',
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider" style={{ color: '#F3E8FF' }}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-purple-400 transition-colors duration-300"
                    style={{ color: '#A78BFA' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider" style={{ color: '#F3E8FF' }}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-purple-400 transition-colors duration-300"
                    style={{ color: '#A78BFA' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider" style={{ color: '#F3E8FF' }}>Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ai4business.solutions@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-purple-400 transition-colors duration-300"
                  style={{ color: '#A78BFA' }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>ai4business.solutions@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: '#A78BFA' }}>
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Kolkata, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-center md:text-left" style={{ color: '#A78BFA' }}>
              © {currentYear} AI4Business Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs hover:text-purple-400 transition-colors duration-300"
                  style={{ color: '#A78BFA' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
