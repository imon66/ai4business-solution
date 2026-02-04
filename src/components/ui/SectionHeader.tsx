'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  highlight?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  highlight,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  // Split title to highlight specific words
  const renderTitle = () => {
    if (!highlight) return title
    
    const parts = title.split(highlight)
    if (parts.length === 1) return title
    
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 sm:mb-16 md:mb-20 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading"
        style={{ color: '#F3E8FF' }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p 
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
          style={{ color: '#A78BFA' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
