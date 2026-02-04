'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import SectionHeader from '@/components/ui/SectionHeader'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ai4business.solutions@gmail.com',
    href: 'mailto:ai4business.solutions@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Kolkata, India',
    href: null,
    description: 'Serving clients globally',
  },
]

const whatHappensNext = [
  {
    step: '1',
    title: 'We Review Your Message',
    description: 'Within 24 hours, we\'ll carefully review your requirements and goals.',
  },
  {
    step: '2',
    title: 'Discovery Call',
    description: 'We\'ll schedule a call to understand your business and discuss possibilities.',
  },
  {
    step: '3',
    title: 'Custom Proposal',
    description: 'You\'ll receive a tailored proposal with timeline, scope, and investment.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(21, 10, 36, 0.5)' }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span style={{ color: '#A78BFA' }}>Get in Touch</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
              Let&apos;s Build Something <span className="gradient-text">Great Together</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: '#A78BFA' }}>
              Ready to transform your business with AI and modern technology? We&apos;d love to hear about your project
              and discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card variant="default" padding="lg">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-heading" style={{ color: '#F3E8FF' }}>
                      Message Sent Successfully!
                    </h3>
                    <p className="mb-8 max-w-md mx-auto" style={{ color: '#A78BFA' }}>
                      Thank you for reaching out. We&apos;ll review your message and get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                        Get Your Free Consultation
                      </h2>
                      <p style={{ color: '#A78BFA' }}>
                        Tell us about your project and we&apos;ll get back to you with a custom proposal.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          label="Your Name *"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name}
                        />
                        <Input
                          label="Email Address *"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                        />
                      </div>
                      
                      <Input
                        label="Phone Number (Optional)"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        helperText="For faster communication"
                      />
                      
                      <Textarea
                        label="Tell Us About Your Project *"
                        name="message"
                        placeholder="What are you looking to build? What are your goals? Any specific requirements or timeline?"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        rows={5}
                      />
                      
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        loading={isSubmitting}
                        icon={Send}
                      >
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </Card>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Methods */}
              <Card variant="default" padding="md">
                <h3 className="text-lg font-semibold mb-6 font-heading" style={{ color: '#F3E8FF' }}>
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0">
                        <info.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium" style={{ color: '#F3E8FF' }}>{info.title}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div style={{ color: '#A78BFA' }}>{info.value}</div>
                        )}
                        <div className="text-sm" style={{ color: '#A78BFA' }}>{info.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Contact CTA */}
              <Card variant="glow" padding="md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading" style={{ color: '#F3E8FF' }}>
                      Prefer a Quick Chat?
                    </h3>
                    <p className="text-sm" style={{ color: '#A78BFA' }}>Get faster responses</p>
                  </div>
                </div>
                <a
                  href="mailto:ai4business.solutions@gmail.com?subject=Project Inquiry"
                  className="block"
                >
                  <Button variant="secondary" fullWidth icon={ArrowRight}>
                    Email Us Directly
                  </Button>
                </a>
              </Card>

              {/* Response Time */}
              <Card variant="default" padding="md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold font-heading" style={{ color: '#F3E8FF' }}>Quick Response</h3>
                </div>
                <p style={{ color: '#A78BFA' }}>
                  We typically respond within 24 hours during business days.
                  For urgent inquiries, please mention it in your message.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="section relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(21,10,36,0.5), transparent, rgba(21,10,36,0.5))' }} />
        
        <div className="container-custom relative z-10">
          <SectionHeader
            title="What Happens Next?"
            subtitle="Here's what to expect after you reach out."
            highlight="Happens Next"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {whatHappensNext.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card variant="hover" padding="md" className="h-full text-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#A78BFA' }}>{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            title="Common Questions"
            subtitle="Quick answers to questions you might have."
            highlight="Questions"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How much does a project cost?',
                answer: 'Every project is unique, so we provide custom quotes based on your specific needs. We focus on delivering value, not competing on price. After our discovery call, you\'ll receive a detailed proposal with transparent pricing.',
              },
              {
                question: 'How long does it take to complete a project?',
                answer: 'Most projects take 4-12 weeks from start to launch, depending on complexity. We\'ll provide a realistic timeline during our initial consultation and keep you updated throughout the process.',
              },
              {
                question: 'Do you work with clients outside India?',
                answer: 'Absolutely! We work with clients globally. Our communication is primarily in English, and we\'re flexible with time zones for calls and meetings.',
              },
              {
                question: 'What do you need from me to get started?',
                answer: 'Just fill out the form above with some basic information about your project. We\'ll schedule a discovery call to understand your needs better before providing a proposal.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card variant="default" padding="md">
                  <h3 className="text-lg font-semibold mb-2 font-heading" style={{ color: '#F3E8FF' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#A78BFA' }}>{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
