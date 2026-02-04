'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'hover' | 'glow'
  padding?: 'sm' | 'md' | 'lg' | 'none'
  onClick?: () => void
}

const paddingClasses = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6 md:p-8',
  lg: 'p-6 sm:p-8 md:p-10',
}

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  onClick,
}: CardProps) {
  const baseStyles = {
    backgroundColor: '#150A24',
    border: '1px solid rgba(168, 85, 247, 0.15)',
  }

  const variantClasses = {
    default: '',
    hover: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1',
    glow: 'border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  }

  if (onClick) {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={onClick}
        style={baseStyles}
        className={`rounded-xl sm:rounded-2xl transition-all duration-300 ${paddingClasses[padding]} ${variantClasses[variant]} cursor-pointer ${className}`}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div 
      style={baseStyles}
      className={`rounded-xl sm:rounded-2xl transition-all duration-300 ${paddingClasses[padding]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  )
}
