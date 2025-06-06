import Link from "next/link"

export default function Example() {
  return (
    <main className="relative isolate min-h-full">
      <img
        alt=""
        src="/first.png"
        className="absolute inset-0 -z-10 size-full object-cover object-top blur-sm"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base/8 font-semibold text-white">Welcome to</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          SILVESTROV HUB
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
          Created by Mike Silvestrov
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/home" className="text-sm/7 font-semibold text-white underline">
            <h1>Home</h1>
          </Link>
        </div>
      </div>
    </main>
  )
}