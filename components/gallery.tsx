import { galleryImagesData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <section className="w-full py-10 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg font-medium">Det här är KULTURFESTIVALEN</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {galleryImagesData.map((image, index) => (
            <Link
              href="#"
              key={index}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-100 flex items-end p-3">
                <p className="text-sm text-white font-medium">{image.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
