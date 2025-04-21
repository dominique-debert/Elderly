import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext'; // Importer le contexte

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const { login } = useAuth(); // Utiliser le contexte d'authentification
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password);
      toast.success('Connexion réussie !');
    } catch (err: any) {
      toast.error('Erreur lors de la connexion');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center font-display">
      <form onSubmit={handleSubmit(onSubmit)} className="card w-96 p-6 bg-base-100 shadow-xl space-y-4">
        <h2 className="text-xl font-bold">Connexion</h2>

        <input {...register('email')} placeholder="Email" className="input input-bordered w-full" />
        {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}

        <input {...register('password')} placeholder="Mot de passe" type="password" className="input input-bordered w-full" />
        {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}

        <button type="submit" className="btn btn-primary w-full">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
