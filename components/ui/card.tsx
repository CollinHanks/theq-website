import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  image?: string
  href?: string
  className?: string
  category?: string
  children?: React.ReactNode
}

export default function Card({ 
  title, 
  description, 
  image, 
  href, 
  className, 
  category,
  children 
}: CardProps) {
  const CardWrapper = href ? Link : 'div'
  
  return (
    <CardWrapper 
      href={href || '#'}
      className={cn(
        "group cursor-pointer block",
        className
      )}
    >
      {image && (
        <div className="aspect-[4/3] bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-subtle overflow-hidden mb-4">
          <div className="w-full h-full flex items-center justify-center text-neutral-500 group-hover:scale-105 transition-transform duration-300">
            {image}
          </div>
        </div>
      )}
      
      <div className="space-y-2">
        {category && (
          <span className="text-xs uppercase tracking-wider text-brand-lilac font-semibold">
            {category}
          </span>
        )}
        
        <h3 className="font-playfair text-2xl group-hover:text-brand-lilac transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-sm text-brand-stone">{description}</p>
        )}
        
        {children}
      </div>
    </CardWrapper>
  )
}