import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface FormFieldProps extends ComponentProps<'div'> {
  name: string
  label: string
}

export function FormField({ name, label, className, ...props }: FormFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className={twMerge('form-control w-full', className)} {...props}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name)}
        className={twMerge(
          'input input-bordered w-full',
          errors[name] && 'input-error'
        )}
      />
      {errors[name] && (
        <label className="label">
          <span className="label-text-alt text-error">
            {errors[name]?.message as string}
          </span>
        </label>
      )}
    </div>
  )
}