import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import CustomCursor from "../components/CustomCursor"
import { toast } from 'react-toastify';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();



const onSubmit = async (data) => {
  try {
    const res = await fetch('http://sheriyans_hackathon.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      toast.error(result.message || 'Registration failed');
      return;
    }

    toast.success('🎉 Registered successfully!');
    setTimeout(() => navigate('/home'), 1000); // delay to show toast
  } catch (err) {
    toast.error('Something went wrong. Please try again!');
  }
};

  return (
    <div className="min-h-screen flex items-center relative bg-black text-white">
      <CustomCursor/>
      {/* Left GIF */}
      <div className="hidden md:flex w-1/2 h-full items-center justify-center p-8">
        <img
          src="https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif"
          alt="Perfume animation"
          className="rounded-xl shadow-xl max-h-[80vh] object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 px-8 py-12">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">Create Your Account</h2>
        <p className="text-gray-400 mb-6">Start your EssenceCraft journey today.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            {...register('name', { required: 'Name is required' })}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email',
              },
            })}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded font-semibold"
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
