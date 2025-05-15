import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex-1 flex justify-center md:justify-start">
          <Link href="/" aria-label="City logo">
            <Image
              src="/images/4a11664b7a35d82d5eb3c36c1cbbafc4753ce7f0.png"
              alt="City logo"
              width={80}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center gap-6">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </Link>
          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok text-xl"></i>
          </Link>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} KONTAKT. All rights reserved.</p>
          <a
            href="mailto:kulturfestivalen@stockholm.se"
            className="mt-1 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            kulturfestivalen@stockholm.se
          </a>
        </div>
      </div>
    </footer>
  );
}
