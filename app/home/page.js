import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/topheader";

export default function Home() {

  const data = [
    { title: "Site is online!", desc: "Congratulations for my team) ", date: "Jun 6 12:34 PM" },
    { title: "SocialNetwork", desc: "We started a social network on our website. Link below", date: "Jun 12 10:11 PM" },
    { title: "The day of no terurn", desc: "The Google SEO just indexed our website. Now when you search the name 'silvestrov hub' we are on the first place!", date: "Jun 13 03:10 PM" },
  ]
  const pages = [{ href: "/home", name: "Home page" }, { href: "/news", name: "News page" }]

  return (
    <main className="w-[70rem] mx-auto">
      <TopBar></TopBar>
      <div className="flex">
        <div className="w-full"></div>
        <div className="w-[30rem] border-l-[1px] border-gray-200 pt-5 px-2">
          <div className="space-y-8">
            {data.map((itm, index) => (
              <div key={index} className="">
                <h1 className="text-black font-bold text-xl text-center">{itm.title}</h1>
                <p className="text-black mt-2">{itm.desc}</p>
                <p className="text-blue-500 text-sm/10">{itm.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
