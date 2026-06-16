import Image from "next/image";
import Link from "next/link";
import React from "react";

const TileCard = ({ tile }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition w-full">

      {/* IMAGE FIX (IMPORTANT) */}
      <div className="relative w-full h-56">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">
          {tile.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {tile.description.slice(0, 60)}...
        </p>

        <Link
          href={`/tiles/${tile.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TileCard;