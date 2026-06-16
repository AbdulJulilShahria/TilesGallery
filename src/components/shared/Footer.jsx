import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
 
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">Tiles Gallery</h2>
            <p className="mt-3 text-gray-300">
              Discover beautiful and premium tiles to transform your home and
              workspace.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">📍 Dhaka, Bangladesh</p>
            <p className="text-gray-300">📧 support@tilegallery.com</p>
            <p className="text-gray-300">📞 +880 1234-567890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

            <div className="flex flex-col gap-2 text-gray-300">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                Facebook
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-400"
              >
                Instagram
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-sky-400"
              >
                Twitter
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-300"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
}
