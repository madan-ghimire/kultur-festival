import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="relative max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <p className="text-white font-medium text-sm uppercase tracking-wide">
            FRI ENTRÉ
          </p>
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[152px] w-[280px] overflow-hidden">
          <Image
            src="/images/59dc69594ca23e87595c1c90c9a361a9657e1ddb.png"
            alt="Kultur Festivalen 13-17/8 2025"
            fill
            className="object-cover p-6"
            priority
          />
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-8 w-32 h-32 z-0 pointer-events-none mix-blend-screen opacity-100">
            <Image
              src="/images/01120637cb0d4001e327dfb28bb3505277cd1a04 (1).png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <button
            aria-label="Open menu"
            className="relative z-10 rounded-full p-2 bg-black"
          >
            <Menu className="text-white" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
