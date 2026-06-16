import Image from "next/image";
import { notFound } from "next/navigation";

async function getSingleTile(id) {
  const res = await fetch(
    `https://category-a8-apple-server.onrender.com/tiles/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}

const TileDetailsPage = async ({ params }) => {
  
  const { id } = await params;

  const tile = await getSingleTile(id);

  if (!tile) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <div className="relative w-full h-125 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{tile.title}</h1>

          <p className="text-gray-600 mb-6">{tile.description}</p>

          <div className="space-y-3 text-lg">
            <p><span className="font-semibold">Category:</span> {tile.category}</p>
            <p><span className="font-semibold">Material:</span> {tile.material || "N/A"}</p>
            <p><span className="font-semibold">Dimensions:</span> {tile.dimensions}</p>
            <p><span className="font-semibold">Price:</span> ${tile.price}</p>
            <p><span className="font-semibold">Stock:</span> {tile.inStock ? "Available" : "Out of Stock"}</p>
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Modern</span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Minimalist</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">Premium</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TileDetailsPage;