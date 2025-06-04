import Link from "next/link"

export default function FirstView() {
  return (
    <main className="bg-white w-full h-full">
      <Link href="/home" className="self-center">
        <h1 className="text-black text-4xl flex justify-center self-center underline">HOME</h1>
      </Link>
    </main>
  )
}