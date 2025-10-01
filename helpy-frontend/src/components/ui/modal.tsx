import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "./dialog"
import { CustomButton } from "./custom-button"

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    open, 
    onOpenChange, 
    title, 
    description, 
    children, 
    footer, 
    size = "md", 
    className,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
      full: "max-w-[95vw] max-h-[95vh]"
    }

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          ref={ref}
          className={cn(sizeClasses[size], className)} 
          {...props}
        >
          {(title || description) && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          )}
          {children}
          {footer && <DialogFooter>{footer}</DialogFooter>}
        </DialogContent>
      </Dialog>
    )
  }
)
Modal.displayName = "Modal"

export interface ConfirmModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  variant?: "default" | "destructive"
  loading?: boolean
}

const ConfirmModal = React.forwardRef<HTMLDivElement, ConfirmModalProps>(
  ({ 
    open, 
    onOpenChange, 
    title = "Confirm Action", 
    description = "Are you sure you want to continue?",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    variant = "default",
    loading = false,
    ...props 
  }, ref) => {
    const handleConfirm = () => {
      onConfirm?.()
      if (!loading) {
        onOpenChange?.(false)
      }
    }

    const handleCancel = () => {
      onCancel?.()
      onOpenChange?.(false)
    }

    return (
      <Modal
        ref={ref}
        open={open}
        onOpenChange={onOpenChange}
        title={title}
        description={description}
        size="sm"
        footer={
          <div className="flex gap-2 w-full sm:w-auto">
            <CustomButton
              variant="outline"
              onClick={handleCancel}
              disabled={loading}
              className="flex-1 sm:flex-none"
            >
              {cancelText}
            </CustomButton>
            <CustomButton
              variant={variant === "destructive" ? "destructive" : "primary"}
              onClick={handleConfirm}
              disabled={loading}
              className="flex-1 sm:flex-none"
            >
              {loading ? "Loading..." : confirmText}
            </CustomButton>
          </div>
        }
        {...props}
      />
    )
  }
)
ConfirmModal.displayName = "ConfirmModal"

export interface AlertModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  buttonText?: string
  variant?: "default" | "destructive" | "warning"
}

const AlertModal = React.forwardRef<HTMLDivElement, AlertModalProps>(
  ({ 
    open, 
    onOpenChange, 
    title = "Alert", 
    description,
    buttonText = "OK",
    variant = "default",
    ...props 
  }, ref) => {
    const handleClose = () => {
      onOpenChange?.(false)
    }

    const getVariantStyles = () => {
      switch (variant) {
        case "destructive":
          return "primary"
        case "warning":
          return "primary"
        default:
          return "primary"
      }
    }

    return (
      <Modal
        ref={ref}
        open={open}
        onOpenChange={onOpenChange}
        title={title}
        description={description}
        size="sm"
        footer={
          <CustomButton
            variant={getVariantStyles()}
            onClick={handleClose}
            className="w-full sm:w-auto"
          >
            {buttonText}
          </CustomButton>
        }
        {...props}
      />
    )
  }
)
AlertModal.displayName = "AlertModal"

export { 
  Modal, 
  ConfirmModal, 
  AlertModal,
  // Re-export Dialog components for direct use
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
}