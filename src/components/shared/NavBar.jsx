"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

const handleLogout = async () => {
  const result = await authClient.signOut();

  console.log(result);

  window.location.href = "/";
};

  return (
    <nav className="shadow-md bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT: Logo */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            Tiles Gallery
          </Link>
        </div>

        {/* CENTER: Nav Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/all-tiles" className="hover:text-blue-600">
            All Tiles
          </Link>

          <Link href="/my-profile" className="hover:text-blue-600">
            My Profile
          </Link>
        </div>

        {/* RIGHT: Auth */}
        <div className="flex gap-4 items-center">

          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session?.user ? (
            <>
              <span className="font-medium text-blue-600">
               <h2> Welcome, {session.user.name}</h2> 
              </span>

              <Link
                href="/my-profile"
                className="btn bg-white text-blue-600 border border-blue-600"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="btn bg-red-500 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="btn bg-blue-600 text-white"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="btn bg-white text-blue-600 border border-blue-600"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default NavBar;