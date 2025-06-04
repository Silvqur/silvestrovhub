import Link from "next/link";

export default function Sadmin() {
  return (
    <main className="w-full ">
      <div className="w-full flex gap-x-2 lg:gap-x-5 my-10">
        <Link
          href="/news"
          className="bg-neutral-900 rounded-xl border-2 border-neutral-700 p-8 w-full hover:bg-neutral-950 "
        >
          <h1 className="text-white flex justify-center text-xl text-nowrap">News</h1>
        </Link>
        <Link
          href="/postnew"
          className="bg-neutral-900 rounded-xl border-2 border-neutral-700 p-8 w-full hover:bg-neutral-950"
        >
          <h1 className="text-white flex justify-center text-xl text-nowrap">Post News</h1>
        </Link>
        <Link
          href="/home"
          className="bg-neutral-900 rounded-xl border-2 border-neutral-700 p-8 w-full hover:bg-neutral-950"
        >
          <h1 className="text-white flex justify-center text-xl text-nowrap">Home</h1>
        </Link>
      </div>
    </main>
  );
}
