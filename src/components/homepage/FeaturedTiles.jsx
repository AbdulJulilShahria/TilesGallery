import { getTilesInfo } from "@/lib/data";
import React from "react";
import TileCard from "./TileCard";

const FeaturedTiles = async () => {
  const tiles = await getTilesInfo();

  const featured = tiles.slice(0, 4); // top 4 tiles

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Tiles
      </h2>

      {/* RESPONSIVE GRID FIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>

    </section>
  );
};

export default FeaturedTiles;