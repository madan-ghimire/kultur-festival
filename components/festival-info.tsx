import Link from "next/link";

export default function FestivalInfo() {
  return (
    <section className="w-full py-10 px-6 md:px-12 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium mb-6">
          1 FESTIVAL • 5 DAGAR • 6 OMRÅDEN
        </h2>
        <Link
          href="#"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
        >
          Se hela programmet här
        </Link>
      </div>
    </section>
  );
}
