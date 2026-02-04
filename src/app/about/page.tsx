'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Target, 
  Heart, 
  Lightbulb,
  Users,
  Award,
  Clock,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import SectionHeader from '@/components/ui/SectionHeader'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const values = [
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'Every decision we make is guided by one question: Will this help our client achieve their goals?',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'We treat every project as if it were our own business. Your success is our success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge AI and technology to create solutions that give you a competitive edge.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'No jargon, no confusion. We explain everything in plain language and keep you informed.',
  },
]

const differentiators = [
  {
    title: 'We Focus on Business Outcomes',
    description: 'While others focus on features and technology, we focus on what matters: growing your business. Every design choice, every line of code is aimed at helping you achieve your goals.',
  },
  {
    title: 'We\'re Partners, Not Vendors',
    description: 'We don\'t just take orders and deliver files. We become invested in your success, offering strategic advice and honest feedback throughout the process.',
  },
  {
    title: 'We Value Quality Over Quantity',
    description: 'We intentionally work with fewer clients to give each project the attention it deserves. No assembly-line solutions here.',
  },
  {
    title: 'We\'re Transparent About Everything',
    description: 'From pricing to timelines to challenges, we believe in complete honesty. No surprises, no hidden costs, no excuses.',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Started with a simple mission: create technology solutions that actually help businesses grow.',
  },
  {
    year: '2021',
    title: 'AI Integration',
    description: 'Pioneered AI-first approach, integrating machine learning into our core service offerings.',
  },
  {
    year: '2023',
    title: 'Growing Impact',
    description: 'Crossed 100+ successful projects, helping businesses across industries transform digitally.',
  },
  {
    year: '2024',
    title: 'Continued Excellence',
    description: 'Expanding our AI capabilities and continuing to raise the bar for digital innovation.',
  },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industries Served' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm text-sm font-medium mb-8"
                style={{ backgroundColor: 'rgba(21, 10, 36, 0.5)' }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span style={{ color: '#A78BFA' }}>About AI4Business Solutions</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                We Build Solutions That <span className="gradient-text">Mean Business</span>
              </h1>
              
              <p className="text-lg sm:text-xl mb-8 leading-relaxed" style={{ color: '#A78BFA' }}>
                We&apos;re not just developers. We&apos;re business-minded innovators who understand that
                technology is an investment that should generate returns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Work With Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="lg">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card variant="default" padding="md" className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2 font-heading">{stat.value}</div>
                      <div className="text-sm" style={{ color: '#A78BFA' }}>{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(21,10,36,0.5), transparent, rgba(21,10,36,0.5))' }} />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                Our <span className="gradient-text">Story</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="default" padding="lg">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed" style={{ color: '#A78BFA' }}>
                    We started AI4Business Solutions with a frustration: too many businesses were getting
                    technology solutions that looked impressive but did nothing for their bottom line. Generic implementations,
                    cookie-cutter approaches, and developers who disappeared after launch.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: '#A78BFA' }}>
                    We believed there had to be a better way. A way to create solutions that weren&apos;t
                    just technically sound, but actual business assets that drive efficiency, unlock insights,
                    and accelerate growth.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: '#A78BFA' }}>
                    Today, we work with forward-thinking business leaders who understand that AI and modern technology
                    are competitive advantages. They don&apos;t want the cheapest option — they
                    want the right option. They want a partner who cares about their success as much
                    as they do.
                  </p>
                  <p className="text-lg leading-relaxed font-medium" style={{ color: '#F3E8FF' }}>
                    That&apos;s who we are. That&apos;s what we do. And we&apos;d love to do it for you.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            title="What We Believe"
            subtitle="The principles that guide everything we do."
            highlight="Believe"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card variant="hover" padding="md" className="h-full text-center">
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 inline-block mb-6">
                    <value.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 font-heading" style={{ color: '#F3E8FF' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#A78BFA' }}>{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            title="What Makes Us Different"
            subtitle="We're not for everyone, and that's by design."
            highlight="Different"
          />
          
          <div className="max-w-4xl mx-auto space-y-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card variant="default" padding="md">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#A78BFA' }}>{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="section" id="journey">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="From a simple idea to a trusted technology partner."
            highlight="Journey"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-7 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-purple-700 hidden sm:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative flex gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center z-10">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                    
                    <Card variant="default" padding="md" className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                        {milestone.title}
                      </h3>
                      <p style={{ color: '#A78BFA' }}>{milestone.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                Our <span className="gradient-text">Philosophy</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#A78BFA' }}>
                We believe that great technology is invisible. It doesn&apos;t call attention to itself —
                it empowers your team, delights your customers, and drives measurable results.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#A78BFA' }}>
                This philosophy shapes everything we create. We don&apos;t add features because they&apos;re
                trendy. We don&apos;t use technology just because we can. Every element earns its place
                by serving your business goals.
              </p>
              
              <div className="space-y-4">
                {[
                  'Simplicity over complexity',
                  'Clarity over cleverness',
                  'Results over aesthetics',
                  'Partnership over transactions',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-1 rounded-full bg-purple-500/20">
                      <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="font-medium" style={{ color: '#A78BFA' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {[
                  { icon: Award, title: 'Quality First', desc: 'We never compromise on quality' },
                  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your time and deadlines' },
                  { icon: Users, title: 'Client-Centric', desc: 'Your success is our priority' },
                  { icon: Zap, title: 'Innovation Driven', desc: 'Always exploring new possibilities' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card variant="default" padding="md">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                          <item.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <div className="font-semibold" style={{ color: '#F3E8FF' }}>{item.title}</div>
                          <div className="text-sm" style={{ color: '#A78BFA' }}>{item.desc}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
            
            <Card variant="default" padding="lg" className="text-center max-w-4xl mx-auto relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                Ready to Work <span className="gradient-text">Together?</span>
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#A78BFA' }}>
                We&apos;d love to learn about your business and discuss how we can help you
                achieve your goals with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Start a Conversation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="secondary" size="lg">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}
