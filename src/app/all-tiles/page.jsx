"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TilesPage() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all tiles
  useEffect(() => {
    async function fetchTiles() {
      try {
        const res = await fetch(
          "https://category-a8-apple-server.onrender.com/tiles",
          { cache: "no-store" }
        );
        const data = await res.json();
        setTiles(data);
      } catch (err) {
        console.error("Failed to fetch tiles", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTiles();
  }, []);

  // Filter tiles by search
  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

      {/* HERO SEARCH BAR */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Explore Premium Tiles 🧱
        </h1>

        <input
          type="text"
          placeholder="Search tiles by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 px-5 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">Loading tiles...</p>
      )}

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="relative w-full h-48">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {tile.title}
              </h2>

              <Link
                href={`/tiles/${tile.id}`}
                className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {!loading && filteredTiles.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No tiles found 😢
        </p>
      )}
    </section>
  );
}