"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result?.error) {
        toast.error(result.error.message);
        setLoading(false);
        return;
      }

      toast.success("Login Successful");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Invalid Email or Password");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google Login Failed");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white shadow-lg">

        <h2 className="font-bold text-3xl text-center mb-5 text-blue-600">
          Login Your Account
        </h2>

        <form onSubmit={handleLogin}>
          <fieldset className="fieldset bg-blue-50 border-base-300 rounded-box w-xs border p-10">

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

            <button
              type="submit"
              disabled={loading}
              className="btn bg-blue-600 text-white mt-4"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full"
            >
              Continue with Google
            </button>

            <h2 className="font-semibold mt-4">
              New to Tiles Gallery? Please{" "}
              <Link
                href="/auth/register"
                className="text-blue-600 font-bold"
              >
                Register
              </Link>
            </h2>

          </fieldset>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;