import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends ComponentProps<'div'> {
  title?: string
  isLoading?: boolean
}

export function Card({ title, isLoading, className, children, ...props }: CardProps) {
  return (
    <div
      className={twMerge('card w-full bg-base-100 shadow-xl', className)}
      {...props}
    >
      {isLoading ? (
        <div className="animate-pulse space-y-4 p-6">
          <div className="h-4 w-2/3 rounded bg-base-300" />
          <div className="h-4 w-full rounded bg-base-300" />
          <div className="h-4 w-1/2 rounded bg-base-300" />
        </div>
      ) : (
        <div className="card-body">
          {title && <h2 className="card-title">{title}</h2>}
          {children}
        </div>
      )}
    </div>
  )
}
