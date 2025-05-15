import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="relative max-w-6xl mx-auto px-6 py-5 flex items-center justify-between overflow-hidden">
        <div>
          <p className="text-white font-medium text-sm uppercase tracking-wide">
            FRI ENTRÉ
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <Image
            style={{ zIndex: -1 }}
            src="/images/59dc69594ca23e87595c1c90c9a361a9657e1ddb.png"
            alt="Kultur Festivalen 13-17/8 2025"
            width={200}
            height={60}
            className="w-auto h-auto max-h-12 md:max-h-15"
            priority
          />
        </div>
        <div className="relative">
          <div className="absolute -top-5 -right-6 w-24 h-24">
            <Image
              src="/images/01120637cb0d4001e327dfb28bb3505277cd1a04 (1).png"
              alt=""
              width={100}
              height={100}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <button
            aria-label="Open menu"
            className="relative z-10 rounded-full p-1 bg-black"
          >
            <Menu className="text-white" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
