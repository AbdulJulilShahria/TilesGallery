import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-linear-to-r from-blue-50 to-slate-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-3">
            Premium Tiles Collections
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Discover Your <br />
            Perfect Aesthetic
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore elegant ceramic, marble, and modern designer tiles to
            transform your home and workspace beautifully.
          </p>

          <Link
            href="/all-tiles"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Now
          </Link>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/BannerImage.jpg"
            alt="Beautiful Tile Design"
            width={1000}
            height={450}
            className="w-full h-112.5 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
