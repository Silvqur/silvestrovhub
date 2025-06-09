import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/topheader";

export default function Home() {

  const data = [{ title: "Site is online!", desc: "Congratulations for my team) ", date: "Jun 6 12:34 PM"}]
  const pages = [{ href: "/home", name: "Home page" }, { href: "/news", name: "News page" }]

  return (
    <main className="bg-[#1f313d]">
      <TopBar></TopBar>
      <div className="relative">
        <Image
          src="/third1.png"
          height={5000}
          width={5000}
          alt="???"
          className="shadow-2xl lg:block hidden"
        />
        <Image
          src="/5.png"
          height={5000}
          width={5000}
          alt="???"
          className="shadow-2xl lg:hidden block"
        />
        <p className="absolute top-[330px] right-[650px] text-6xl font-extrabold lg:block hidden">THE FUTURE<span className="underline mx-2">BEST IT</span>COMPANY IN<span className="ml-2 underline">RUSSIA</span></p>
        <p className="absolute top-[100px] text-center text-white text-2xl font-extrabold lg:hidden block">THE FUTURE<span className="underline mx-2">BEST IT</span>COMPANY IN<span className="ml-2 underline">RUSSIA</span></p>
      </div>
      <Link href="#" className="flex justify-center mx-auto mt-3">
        <div className="w-full bg-[#345166] p-4">
          <p className="text-[#e4c8b2] lg:text-3xl hover:underline flex justify-center text-xl font-medium">You can <span className="font-bold hover:underline mx-3 shadow-sm">apply for a job</span>on our website.</p>
        </div>
      </Link>
      <div className="bg-[#345166] p-4 mt-6 lg:mt-10">
        <p className="text-white text-xl font-extrabold lg:text-2xl">Announcements about the company:</p>
        <div className="flex overflow-x-auto lg:flex-wrap my-7 gap-7">
          {data.map((itm, index) => (
            <div className="flex" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-11 size-8 flex-none mr-2 text-[#25383d] border-[1px] border-[#273a40] rounded-lg shadow-lg">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              <div className="min-w-0"> {/* Это важно для правильного сжатия */}
                <h1 className="text-[#c4c4bc] text-xl font-bold text-nowrap">{itm.title}</h1>
                <p className="text-[#a3a39b] max-w-[15rem] break-words">{itm.desc}</p>
                <p className="text-[#a3a39b] mt-2">{itm.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#345166] p-2 lg:p-4 mt-6 lg:mt-10">
        <p className="text-white font-extrabold lg:text-2xl">All avaible pages:</p>
        <div className="flex  mt-5">
          {pages.map((itm, index) => (
            <div key={index}>
              <Link href={itm.href} className="flex ml-7">
                <p className="text-xl text-[#a3a39b] hover:text-blue-600 font-bold hover:underline delay-100 flex p-3">{itm.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
