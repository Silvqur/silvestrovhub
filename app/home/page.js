import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/topheader";

export default function Home() {



  const data = [
    { title: "Site is online!", desc: "Congratulations for my team) ", date: "Jun 6 12:34 PM" },
    { title: "SocialNetwork", desc: "We started a social network on our website. Link below", date: "Jun 12 10:11 PM" },
    { title: "The day of no terurn", desc: "The Google SEO just indexed our website. Now when you search the name silvestrov hub we are on the first place!", date: "Jun 13 03:10 PM" },
    { title: "New colors", desc: "We rebuilded our website, now it looks much better.", date: "Jun 13 07:37 PM" },
  ]
  const pages = [{ href: "/home", name: "Home page" }, { href: "/news", name: "News page" }]

  const staff = [
    { name: "Michael Silvestrov", rank: "CEO", href: "/8.jpg", },
    { name: "Babich Ivan", rank: "Tech dir.", href: "/9.jpg" },
    { name: "Elizabeth Stepenova", rank: "Manager", href: "/10.jpg" }
  ]

  return (
    <main className="w-full lg:w-[70rem] mx-auto">
      <TopBar></TopBar>
      <div className="flex lg:px-0 px-1">
        <div className="w-full mt-5">
          <div className="w-full border-b-[1px] border-gray-200 pb-5">
            <h1 className="text-blue-500 text-2xl font-bold">About Us</h1>
            <p className="text-wrap text-black mt-3 text-md">SILVESTROV HUB is a team of experts that creates modern websites and smart Telegram bots. We turn your ideas into effective digital solutions, combining creative design, reliable technology, and a personalized approach. Our goal is to help your business or project stand out, become user-friendly, and succeed online. Trust us with your tasks, and we'll create a product that exceeds expectations!</p>
          </div>
          <div className="w-full border-b-[1px] border-gray-200 py-5">
            <h1 className="text-blue-500 text-2xl font-bold">Our Staff</h1>
            <div className="mt-5 flex justify-between p-2">
              {staff.map((itm, index) => (
                <div className="w-[8rem] lg:w-[12rem]" key={index}>
                  <Image
                    src={itm.href}
                    height={5000}
                    width={5000}
                    alt="???"
                    className="w-[12rem] rounded-full"
                  />
                  <h1 className="text-black text-center mt-2">{itm.name}</h1>
                  <p className="text-gray-500 text-sm/6 text-center">{itm.rank}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full border-b-[1px] border-gray-200 py-5">
            <div>
              <Link href="/socialnetwork">
                <p className="text-center text-blue-500 text-xl font-bold hover:underline ">Forward to SocialNetwork</p>
              </Link>
            </div>
          </div>
          <div className="w-full pt-5 px-2 lg:hidden block">
            <h1 className="text-blue-500 text-center mb-5 underline font-bold text-xl">Updates</h1>
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
        <div className="w-[30rem] border-l-[1px] border-gray-200 pt-5 px-2 lg:block hidden">
          <h1 className="text-blue-500 text-center mb-5 underline font-bold text-xl">Updates</h1>
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
