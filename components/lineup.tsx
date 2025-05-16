import Image from "next/image";
import Link from "next/link";

export default function Lineup() {
  return (
    <section className="w-full px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[280px] h-[280px] z-0 opacity-70 pointer-events-none">
        <Image
          src="/images/01b89567ec4f7873ded85c58d8efa77e248773fe.png"
          alt="Top Left Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] z-0 pointer-events-none mix-blend-screen">
        <Image
          src="/images/01120637cb0d4001e327dfb28bb3505277cd1a04 (1).png"
          alt="Bottom Left Background"
          fill
          className="object-cover opacity-100"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center">
          <Link href="#">
            <Image
              src="/images/87d6eb3d45bf6f993969a56b9dda52a89b67d63b.png"
              alt="Festival Lineup"
              width={800}
              height={600}
              className="w-full h-auto max-w-[800px] object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
