'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 touch-manipulation'
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-6 py-3 text-sm sm:text-base min-h-[44px]',
    lg: 'px-8 py-4 text-base sm:text-lg min-h-[52px]',
  }
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
    secondary: 'bg-transparent border border-purple-500/30 hover:border-purple-500/60',
    ghost: 'bg-transparent hover:text-purple-400 hover:bg-purple-500/10',
  }

  const variantInlineStyles = {
    primary: { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' },
    secondary: { color: '#F3E8FF' },
    ghost: { color: '#A78BFA' },
  }
  
  const widthStyles = fullWidth ? 'w-full' : ''
  const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02, y: -2, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      style={variantInlineStyles[variant]}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${widthStyles}
        ${disabledStyles}
        ${className}
      `}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </motion.button>
  )
}
