import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"
import { Input } from "./input"

export interface FormFieldProps extends React.ComponentProps<"div"> {
  label?: string
  error?: string
  required?: boolean
  children?: React.ReactNode
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, label, error, required, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      >
        {label && (
          <Label className={cn(error && "text-destructive")}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        {children}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

export interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string
  error?: string
  required?: boolean
  containerClassName?: string
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, error, required, containerClassName, ...props }, ref) => {
    return (
      <FormField
        label={label}
        error={error}
        required={required}
        className={containerClassName}
      >
        <Input
          ref={ref}
          className={cn(
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        />
      </FormField>
    )
  }
)
InputField.displayName = "InputField"

export interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  label?: string
  error?: string
  required?: boolean
  containerClassName?: string
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ className, label, error, required, containerClassName, ...props }, ref) => {
    return (
      <FormField
        label={label}
        error={error}
        required={required}
        className={containerClassName}
      >
        <textarea
          ref={ref}
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          {...props}
        />
      </FormField>
    )
  }
)
TextareaField.displayName = "TextareaField"

export { FormField, InputField, TextareaField }