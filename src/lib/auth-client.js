

// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     baseURL: process.env.BETTER_AUTH_URL,
// });



// // export const { signIn, signUp, useSession } = createAuthClient()


import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://category-a8-apple-ten.vercel.app/",
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;