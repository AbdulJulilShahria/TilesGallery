import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          My Profile
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">

          <div>
            {/* <Image
              src={
                user?.image ||
                "https://i.ibb.co/4f7KQxB/default-user.png"
              }
              alt="Profile"
              width={180}
              height={180}
              className="rounded-full border-4 border-blue-500"
            /> */}
          </div>

          <div className="space-y-4">

            <h2 className="text-2xl font-bold">
              {user?.name}
            </h2>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {user?.email}
            </p>

            <p>
              <span className="font-semibold">User ID:</span>{" "}
              {user?.id}
            </p>

            <Link
              href="/my-profile/update"
              className="btn bg-blue-600 text-white mt-4"
            >
              Update Information
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;