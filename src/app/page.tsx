'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Shield, 
  Sparkles, 
  Brain, 
  Code2,
  CheckCircle2,
  XCircle,
  Star,
  TrendingUp,
  Clock,
  Users,
  Cpu,
  Globe
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

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Custom AI integrations and automation that transform how your business operates and scales.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Fast, secure, and scalable applications built with cutting-edge technologies.',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that position your brand for sustainable growth.',
  },
  {
    icon: Cpu,
    title: 'Tech Consulting',
    description: 'Expert guidance on technology decisions that align with your business goals.',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Measurable Results',
    description: 'Every solution is designed with clear KPIs and measurable business outcomes.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance that keeps your users engaged and conversions high.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your data and reputation.',
  },
  {
    icon: Clock,
    title: 'Rapid Delivery',
    description: 'Agile methodology ensuring quick iterations and faster time-to-market.',
  },
]

const forYou = [
  'Companies ready to leverage AI for competitive advantage',
  'Businesses that value quality and long-term partnerships',
  'Teams looking for technical expertise and strategic guidance',
  'Organizations focused on innovation and growth',
]

const notForYou = [
  'Looking for the cheapest option available',
  'Need a solution done in 24 hours',
  'Want off-the-shelf templates with no customization',
  'Not ready to invest in professional quality',
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    content: 'Their AI integration increased our operational efficiency by 340%. The ROI was visible within the first month.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, Wellness Studio',
    content: 'Finally, a tech team that understands business goals. They built exactly what we needed to scale.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Director, Export House',
    content: 'Professional, responsive, and delivered beyond expectations. Our international clients are impressed.',
    rating: 5,
  },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average ROI Increase' },
  { value: '24/7', label: 'Support Available' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-28 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(21, 10, 36, 0.5)' }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span style={{ color: '#A78BFA' }}>AI-Powered Digital Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] font-heading"
              style={{ color: '#F3E8FF' }}
            >
              Build the Future with{' '}
              <span className="gradient-text">AI & Innovation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{ color: '#A78BFA' }}
            >
              We craft premium AI solutions and digital experiences for forward-thinking businesses ready to lead their industry.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-xs font-bold"
                    style={{ border: '2px solid #0D0118' }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                <p className="text-sm" style={{ color: '#A78BFA' }}>
                  Trusted by 150+ innovative companies
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 border-y border-purple-500/15">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base" style={{ color: '#A78BFA' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            title="What We Build"
            subtitle="Comprehensive solutions tailored to transform your business with cutting-edge technology."
            highlight="Build"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card variant="hover" padding="md" className="h-full">
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
                      <service.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: '#A78BFA' }}>{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <Link href="/services">
              <Button variant="secondary" size="lg" icon={ArrowRight}>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(21,10,36,0.5), transparent, rgba(21,10,36,0.5))' }} />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            title="Why Businesses Choose Us"
            subtitle="We don't just build solutions. We build competitive advantages that drive real results."
            highlight="Choose Us"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeInUp}>
                <Card variant="hover" padding="md" className="h-full text-center">
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 inline-block mb-6">
                    <benefit.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 font-heading" style={{ color: '#F3E8FF' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: '#A78BFA' }}>{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            title="Is This Right For You?"
            subtitle="We partner with businesses that value quality, innovation, and long-term success."
            highlight="Right For You"
          />
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card variant="glow" padding="md" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold font-heading" style={{ color: '#F3E8FF' }}>
                    Perfect For You If...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {forYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span style={{ color: '#A78BFA' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card variant="default" padding="md" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-purple-500/15">
                    <XCircle className="w-6 h-6" style={{ color: '#A78BFA' }} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold font-heading" style={{ color: '#F3E8FF' }}>
                    Not For You If...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#A78BFA' }} />
                      <span style={{ color: '#A78BFA' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what business leaders say about working with us."
            highlight="Clients Say"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeInUp}>
                <Card variant="default" padding="md" className="h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="mb-6 leading-relaxed" style={{ color: '#A78BFA' }}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: '#F3E8FF' }}>{testimonial.name}</div>
                      <div className="text-sm" style={{ color: '#A78BFA' }}>{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                We&apos;re Not Just <span className="gradient-text">Developers</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#A78BFA' }}>
                We&apos;re strategic partners who understand that technology is an investment in your future.
                Every solution we build is focused on one thing: accelerating your business growth.
              </p>
              
              <div className="space-y-4">
                {[
                  'AI-first approach to problem solving',
                  'Direct communication, no middlemen',
                  'Transparent process from start to finish',
                  'Ongoing support and optimization',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="p-1 rounded-full bg-purple-500/20">
                      <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <span style={{ color: '#A78BFA' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Target, value: '100%', label: 'Goal Focused' },
                  { icon: Zap, value: '<3s', label: 'Load Time' },
                  { icon: Shield, value: '99.9%', label: 'Uptime' },
                  { icon: Users, value: '150+', label: 'Happy Clients' },
                ].map((stat, index) => (
                  <Card key={index} variant="default" padding="md" className="text-center">
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-purple-400" />
                    <div className="text-2xl sm:text-3xl font-bold mb-1 font-heading" style={{ color: '#F3E8FF' }}>{stat.value}</div>
                    <div className="text-sm" style={{ color: '#A78BFA' }}>{stat.label}</div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
            
            <Card variant="default" padding="lg" className="text-center max-w-4xl mx-auto relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                Ready to Transform Your <span className="gradient-text">Business?</span>
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#A78BFA' }}>
                Let&apos;s discuss how AI and modern technology can help you outpace competitors,
                increase efficiency, and unlock new growth opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Get Your Free Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary" size="lg">
                    Learn More About Us
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
