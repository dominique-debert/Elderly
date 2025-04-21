import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { toast } from 'react-hot-toast'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const loginMutation = useMutation({
    mutationFn: (data: LoginForm) => 
      api.post('/auth/login', data),
    onSuccess: () => {
      toast.success('Login successful!')
    },
  })

  return (
    <form onSubmit={handleSubmit((data) => loginMutation.mutate(data))} 
          className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          {...register('email')}
          className="input input-bordered"
        />
        {errors.email && (
          <span className="text-error text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          {...register('password')}
          className="input input-bordered"
        />
        {errors.password && (
          <span className="text-error text-sm">{errors.password.message}</span>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary w-full"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? 'Loading...' : 'Login'}
      </button>
    </form>
  )
}