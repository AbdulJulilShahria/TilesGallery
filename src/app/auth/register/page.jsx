"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await authClient.signUp.email({
        email,
        password,
        name,
        image,
      });

      if (result?.error) {
        toast.error(result.error.message);
        setLoading(false);
        return;
      }

      toast.success("Registration Successful");

      form.reset();

      router.push("/auth/login");
    } catch (error) {
      toast.error("Registration Failed");
    }

    setLoading(false);
  };

  const handleGoogleRegister = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Sign Up Failed");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white shadow-lg">

        <h2 className="font-bold text-3xl text-center mb-5 text-blue-600">
          Register Your Account
        </h2>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset bg-blue-50 border-base-300 rounded-box w-xs border p-10">

            {/* Name */}
            <label className="label text-black font-semibold">
              Name
            </label>

            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
            />

            {/* Photo URL */}
            <label className="label text-black font-semibold">
              Photo URL
            </label>

            <input
              type="text"
              name="image"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
            <label className="label text-black font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label text-black font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn bg-blue-600 text-white mt-4"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {/* Divider */}
            <div className="divider">OR</div>

            <h2 className="font-bold text-blue-600">Continue with Google</h2>
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="btn btn-outline w-full"
            >
              Continue with Google
            </button>

            {/* Login Link */}
            <h2 className="font-semibold mt-4">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 font-bold"
              >
                Login
              </Link>
            </h2>

          </fieldset>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;