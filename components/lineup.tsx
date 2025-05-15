import Image from "next/image";
import Link from "next/link";

export default function Lineup() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="absolute top-10 left-60 z-0 w-[280px] h-[280px]">
        <Image
          src="/images/01120637cb0d4001e327dfb28bb3505277cd1a04 (1).png"
          alt="Top Left Background"
          fill
          className="object-cover opacity-70 pointer-events-none"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center">
          <Link href="#">
            <Image
              src="/images/87d6eb3d45bf6f993969a56b9dda52a89b67d63b (1).png"
              alt="Festival Lineup"
              width={600}
              height={800}
              className="w-full max-w-2xl h-auto object-cover"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
