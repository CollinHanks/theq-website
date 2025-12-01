import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'cream' | 'charcoal'
}

export default function Section({ children, className, background = 'white' }: SectionProps) {
  return (
    <section className={cn(
      "py-20",
      {
        'bg-white': background === 'white',
        'bg-brand-cream': background === 'cream',
        'bg-brand-charcoal text-white': background === 'charcoal'
      },
      className
    )}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}