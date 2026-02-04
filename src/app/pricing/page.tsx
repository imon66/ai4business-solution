'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Check,
  Sparkles,
  Crown,
  Star,
  Zap,
  ChevronDown
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const pricingPlans = [
  {
    name: 'Classic',
    price: '6,999',
    renewal: '2,500',
    icon: Star,
    popular: false,
    tagline: 'Perfect for Startups',
    highlights: ['5 Pages', '5 Emails', 'SEO Ready'],
    features: [
      '1 Free Domain Name',
      '1 Free Hosting',
      '5 Pages (Dynamic Website)',
      '5 Business Email IDs',
      'Unlimited Images & Videos',
      'Unlimited Bandwidth/Space',
      '100% Responsive Website',
      'SEO Friendly Website',
      'WhatsApp Integration',
      'Call Button Integration',
      'Live Chat Integration',
      'Inquiry Form',
      'SSL Certificate',
      'Admin Panel Access',
      'Social Media Integration',
      '24/7 Support',
    ],
  },
  {
    name: 'Royal',
    price: '8,999',
    renewal: '3,500',
    icon: Crown,
    popular: true,
    tagline: 'Best Value',
    highlights: ['15 Pages', '10 Emails', 'Payment Gateway'],
    features: [
      '1 Free Domain Name',
      '1 Free Hosting',
      '15 Pages (Dynamic Website)',
      '10 Business Email IDs',
      'Unlimited Images & Videos',
      'Unlimited Bandwidth/Space',
      '100% Responsive Website',
      'SEO Friendly Website',
      'WhatsApp Integration',
      'Call Button Integration',
      'Live Chat Integration',
      'Inquiry Form',
      'SSL Certificate',
      'Admin Panel Access',
      'Payment Gateway Integration',
      'Social Media Integration',
      '24/7 Support',
      '1 Year Free Support',
    ],
  },
  {
    name: 'Silver',
    price: '13,999',
    renewal: '3,500',
    icon: Zap,
    popular: false,
    tagline: 'E-Commerce Ready',
    highlights: ['Unlimited Products', 'Payment Gateway', '1 Year Support'],
    features: [
      '1 Free Domain Name',
      '1 Free Hosting',
      '10 Pages (Dynamic Design)',
      '5 Business Email IDs',
      'Unlimited Product Listing',
      'Unlimited Images & Videos',
      'Unlimited Bandwidth/Space',
      '100% Responsive Website',
      'Live Chat Integration',
      'WhatsApp Integration',
      'SSL Certificate',
      'Payment Gateway Integration',
      'Admin Panel Access',
      'Social Media Integration',
      '24/7 Support',
      '1 Year Free Support',
    ],
  },
]

const faqs = [
  {
    question: 'What is included in the free domain?',
    answer: 'You get a free .com, .in, or .co.in domain for the first year.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes! You can upgrade anytime. We\'ll prorate the difference.',
  },
  {
    question: 'How long does it take to build?',
    answer: 'Typically 7-14 business days depending on complexity.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! All plans include 24/7 support.',
  },
]

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pt-4"
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-semibold shadow-lg">
            ⭐ MOST POPULAR
          </div>
        </div>
      )}
      
      <div
        className={`rounded-2xl overflow-hidden transition-all duration-300 h-full ${
          plan.popular
            ? 'ring-2 ring-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]'
            : ''
        }`}
        style={{
          backgroundColor: '#150A24',
          border: plan.popular ? 'none' : '1px solid rgba(168, 85, 247, 0.15)',
        }}
      >
        {/* Header */}
        <div
          className="p-5 text-white"
          style={{
            background: plan.popular
              ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
              : 'linear-gradient(135deg, #6D28D9 0%, #5B21B6 100%)',
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <plan.icon className="w-5 h-5" />
              <span className="font-bold text-lg">{plan.name}</span>
            </div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{plan.tagline}</span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold">₹{plan.price}</span>
            <span className="text-sm opacity-80">one-time</span>
          </div>
          <p className="text-xs opacity-80 mt-1">Renewal: ₹{plan.renewal}/year</p>
        </div>
        
        {/* Highlights */}
        <div className="p-4 flex gap-2 flex-wrap border-b border-purple-500/10">
          {plan.highlights.map((highlight, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
              style={{ color: '#A78BFA' }}
            >
              {highlight}
            </span>
          ))}
        </div>
        
        {/* Features Preview */}
        <div className="p-4">
          <div className="space-y-2">
            {plan.features.slice(0, 5).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm" style={{ color: '#A78BFA' }}>{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Expandable Features */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-2 mt-2">
                  {plan.features.slice(5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm" style={{ color: '#A78BFA' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {plan.features.length > 5 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 mt-3 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              {isExpanded ? 'Show Less' : `+${plan.features.length - 5} more features`}
              <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>
        
        {/* CTA */}
        <div className="p-4 pt-0">
          <Link href="/contact" className="block">
            <button
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-purple-500/30' 
                  : 'bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20'
              }`}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 rounded-xl transition-all duration-300"
        style={{
          backgroundColor: isOpen ? 'rgba(168, 85, 247, 0.1)' : '#150A24',
          border: '1px solid rgba(168, 85, 247, 0.15)',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium text-sm" style={{ color: '#F3E8FF' }}>{faq.question}</span>
          <ChevronDown 
            className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: '#A78BFA' }}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="text-sm overflow-hidden"
              style={{ color: '#A78BFA' }}
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section - Compact for Mobile */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 text-xs font-medium mb-4"
              style={{ backgroundColor: 'rgba(21, 10, 36, 0.5)' }}
            >
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span style={{ color: '#A78BFA' }}>No Hidden Fees</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-heading" style={{ color: '#F3E8FF' }}>
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-sm sm:text-base max-w-md mx-auto" style={{ color: '#A78BFA' }}>
              Affordable pricing for every business. Get started today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards - Mobile Optimized */}
      <section className="pb-12 sm:pb-16">
        <div className="container-custom">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6 items-start">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - Mobile Compact */}
      <section className="py-8 border-y border-purple-500/10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {[
              { icon: '🔒', text: 'SSL Secured' },
              { icon: '⚡', text: 'Fast Delivery' },
              { icon: '💬', text: '24/7 Support' },
              { icon: '✨', text: 'Free Updates' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/5">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-xs font-medium" style={{ color: '#A78BFA' }}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Compact */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 font-heading" style={{ color: '#F3E8FF' }}>
            Quick <span className="gradient-text">FAQs</span>
          </h2>
          
          <div className="max-w-lg mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-6 sm:p-8 rounded-2xl"
            style={{
              backgroundColor: '#150A24',
              border: '1px solid rgba(168, 85, 247, 0.2)',
            }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 font-heading" style={{ color: '#F3E8FF' }}>
              Need Custom Solution?
            </h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#A78BFA' }}>
              Let&apos;s discuss your specific requirements and create a tailored package.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button variant="primary" icon={ArrowRight}>
                  Get Custom Quote
                </Button>
              </Link>
              <a href="https://wa.me/919457811378" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  💬 WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
