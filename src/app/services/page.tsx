'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Brain, 
  Code2, 
  Globe, 
  Cpu,
  Zap,
  Shield,
  BarChart3,
  Layers,
  RefreshCw,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Palette,
  TrendingUp,
  PenTool,
  Smartphone,
  Monitor
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

// All services from the screenshot
const allServices = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing immersive experiences that captivate users and drive meaningful interactions.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    description: 'Boosting brand awareness with targeted SEO and digital marketing initiatives.',
  },
  {
    icon: PenTool,
    title: 'Graphics Design',
    description: 'Empowering businesses through visually striking graphics that convey brand essence.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building dynamic and responsive websites optimized for superior performance.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Empowering businesses with dynamic app development and reliable technical support.',
  },
  {
    icon: Monitor,
    title: 'Software Development',
    description: 'Innovative software solutions driving business success and technological advancement effortlessly.',
  },
]

const mainServices = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Solutions',
    subtitle: 'Intelligent automation that scales',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create competitive advantages. We build custom AI solutions tailored to your specific business challenges.',
    benefits: [
      'Custom AI/ML model development',
      'Intelligent process automation',
      'Natural language processing solutions',
      'Predictive analytics and insights',
    ],
    result: 'AI-powered systems that reduce costs and unlock new opportunities.',
  },
  {
    id: 'development',
    icon: Code2,
    title: 'Web Development',
    subtitle: 'Fast, secure, and scalable',
    description: 'We build modern web applications using cutting-edge technologies that ensure speed, security, and scalability. Your platform will perform flawlessly and grow with your business.',
    benefits: [
      'Built with Next.js, React, and modern stack',
      'Optimized for speed and performance',
      'Secure architecture with best practices',
      'API development and integrations',
    ],
    result: 'A technically excellent platform that performs flawlessly.',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User-centered design excellence',
    description: 'Create stunning, intuitive interfaces that delight users and drive engagement. Our design process focuses on understanding your users and crafting experiences that convert.',
    benefits: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing and optimization',
    ],
    result: 'Beautiful, intuitive designs that users love.',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    subtitle: 'Data-driven growth strategies',
    description: 'Boost your online visibility and drive qualified traffic with our comprehensive digital marketing services. We use data-driven strategies to maximize your ROI.',
    benefits: [
      'Search engine optimization (SEO)',
      'Content marketing strategy',
      'Social media marketing',
      'Performance analytics and reporting',
    ],
    result: 'Increased visibility and sustainable organic growth.',
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    subtitle: 'Native and cross-platform apps',
    description: 'Build powerful mobile applications that engage users on iOS and Android. We develop native and cross-platform apps that deliver exceptional user experiences.',
    benefits: [
      'iOS and Android development',
      'Cross-platform solutions (React Native)',
      'App store optimization',
      'Ongoing maintenance and updates',
    ],
    result: 'High-performance apps that users love to use.',
  },
  {
    id: 'software',
    icon: Monitor,
    title: 'Software Development',
    subtitle: 'Custom enterprise solutions',
    description: 'Develop custom software solutions that streamline your operations and drive efficiency. From internal tools to customer-facing platforms, we build software that works.',
    benefits: [
      'Custom software development',
      'Enterprise application integration',
      'Legacy system modernization',
      'Cloud-native solutions',
    ],
    result: 'Robust software that powers your business growth.',
  },
]

const additionalFeatures = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Sub-second response times that keep users engaged and conversions high.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your data and reputation.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Integrated tracking and dashboards to measure performance and ROI.',
  },
  {
    icon: Layers,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows without disruption.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Support',
    description: 'Ongoing maintenance and optimization to keep your systems running smoothly.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Partnership',
    description: 'Direct communication with your team. No middlemen, no confusion.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business, goals, challenges, and what success looks like for you.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a comprehensive plan that aligns technology with your business objectives.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We craft intuitive interfaces and system architectures that solve real problems.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We build your solution with clean code, ensuring quality, security, and scalability.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'We thoroughly test and deploy your solution, ensuring everything works perfectly.',
  },
  {
    number: '06',
    title: 'Optimize',
    description: 'We provide ongoing support and optimization to maximize your investment.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(21, 10, 36, 0.5)' }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span style={{ color: '#A78BFA' }}>Comprehensive Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
              Solutions That <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#A78BFA' }}>
              We don&apos;t just build technology. We create strategic advantages that transform how your business operates and competes.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Discuss Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Services Overview Grid */}
      <section className="section pt-0">
        <div className="container-custom">
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive digital solutions to help your business thrive in the modern world."
            highlight="Offer"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allServices.map((service) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card variant="hover" padding="md" className="h-full text-center">
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 inline-block mb-6">
                    <service.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 font-heading" style={{ color: '#F3E8FF' }}>
                    {service.title}
                  </h3>
                  <p className="mb-4" style={{ color: '#A78BFA' }}>{service.description}</p>
                  <Link href="#services-detail" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                    Explore More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section" id="services-detail">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Services"
            subtitle="Comprehensive solutions designed to accelerate your business growth."
            highlight="Core Services"
          />
          
          <div className="space-y-20 md:space-y-32">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                      <service.icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading" style={{ color: '#F3E8FF' }}>
                        {service.title}
                      </h2>
                      <p className="text-purple-400 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg mb-6 leading-relaxed" style={{ color: '#A78BFA' }}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span style={{ color: '#A78BFA' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="font-medium" style={{ color: '#F3E8FF' }}>
                      <span className="text-purple-400 font-semibold">Result:</span> {service.result}
                    </p>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card variant="default" padding="lg">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/15 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }} />
                      </div>
                      <service.icon className="w-20 h-20 md:w-24 md:h-24 text-purple-500/30" />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="section relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(21,10,36,0.5), transparent, rgba(21,10,36,0.5))' }} />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            title="Everything You Need"
            subtitle="Every solution we build includes these essential features."
            highlight="You Need"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card variant="hover" padding="md" className="h-full">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 inline-block mb-4">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#A78BFA' }}>{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" id="process">
        <div className="container-custom">
          <SectionHeader
            title="Our Process"
            subtitle="A clear, transparent process from first conversation to launch and beyond."
            highlight="Process"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-7 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-purple-700 hidden sm:block" />
              
              <div className="space-y-6 md:space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative flex gap-4 md:gap-6"
                  >
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg z-10">
                      {step.number}
                    </div>
                    <Card variant="default" padding="md" className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                        {step.title}
                      </h3>
                      <p style={{ color: '#A78BFA' }}>{step.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
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
                Ready to Get <span className="gradient-text">Started?</span>
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#A78BFA' }}>
                Let&apos;s discuss your project and create a solution that truly transforms your business and drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Get Your Free Quote
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary" size="lg">
                    Learn About Us
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
