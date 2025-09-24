import * as React from "react"
import { cn } from "@/lib/utils"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "./card"

export interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "ghost"
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          // Base styles
          "rounded-xl border bg-card text-card-foreground transition-all duration-200",
          // Variant styles
          {
            "shadow": variant === "default",
            "shadow-lg hover:shadow-xl": variant === "elevated",
            "border-2 border-primary/20 shadow-sm": variant === "outlined",
            "border-0 shadow-none bg-transparent": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    )
  }
)
CustomCard.displayName = "CustomCard"

export interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "elevated" | "outlined" | "ghost"
}

const DashboardCard = React.forwardRef<HTMLDivElement, DashboardCardProps>(
  ({ className, title, description, icon, action, variant = "default", children, ...props }, ref) => {
    return (
      <CustomCard ref={ref} variant={variant} className={className} {...props}>
        {(title || description || icon || action) && (
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              {icon && <div className="text-primary">{icon}</div>}
              <div>
                {title && <CardTitle className="text-sm font-medium">{title}</CardTitle>}
                {description && <CardDescription>{description}</CardDescription>}
              </div>
            </div>
            {action && <div>{action}</div>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
      </CustomCard>
    )
  }
)
DashboardCard.displayName = "DashboardCard"

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon?: React.ReactNode
  variant?: "default" | "elevated" | "outlined" | "ghost"
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className, title, value, change, changeType = "neutral", icon, variant = "default", ...props }, ref) => {
    return (
      <CustomCard ref={ref} variant={variant} className={className} {...props}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          {change && (
            <p className={cn(
              "text-xs",
              {
                "text-green-600": changeType === "positive",
                "text-red-600": changeType === "negative",
                "text-muted-foreground": changeType === "neutral",
              }
            )}>
              {change}
            </p>
          )}
        </CardContent>
      </CustomCard>
    )
  }
)
MetricCard.displayName = "MetricCard"

export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  variant?: "default" | "elevated" | "outlined" | "ghost"
  footer?: React.ReactNode
}

const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  ({ className, title, description, variant = "default", footer, children, ...props }, ref) => {
    return (
      <CustomCard ref={ref} variant={variant} className={className} {...props}>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </CustomCard>
    )
  }
)
InfoCard.displayName = "InfoCard"

export { 
  CustomCard, 
  DashboardCard, 
  MetricCard, 
  InfoCard,
  // Re-export original components for direct use
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
}