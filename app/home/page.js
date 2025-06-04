import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Home() {
  const data = [
    { link: "/news", name: "News Page" },
    { link: "/home", name: "Home Page" },
  ];

  return (
    <main className="bg-white h-full">
      <div className="flex justify-center mb-5 rounded-md self-center  ">
        <div className="p-1 flex rounded-lg self-center justify-between flex-grow max-w-[70rem] bg-blue-300">
          <div className="hidden lg:flex p-1 divide-x-2 self-center">
            <Link
              href="https://x.com/silver_mladshiy"
              className="flex self-center"
            >
              <h1 className="text-blue-500 font-bold hover:text-blue-700 hover:underline mx-5 self-center">
                Twitter
              </h1>
            </Link>
            <Link
              href="https://www.reddit.com/user/Bubbly_Parfait_5823/"
              className="flex"
            >
              <h1 className="text-blue-500 font-bold hover:text-blue-700 hover:underline mx-5">
                Reddit
              </h1>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563941855244"
              className="flex"
            >
              <h1 className="text-blue-500 font-bold hover:text-blue-700 hover:underline mx-5">
                Facebook
              </h1>
            </Link>
            <Link href="https://www.youtube.com/@bytewizard42" className="flex">
              <h1 className="text-blue-500 font-bold over:text-blue-700 hover:underline mx-5">
                Youtube
              </h1>
            </Link>
          </div>
          <Popover>
            <PopoverButton className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-blue-500 self-center pt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </PopoverButton>
            <PopoverPanel>
              <div className="space-y-3">
                <Link
                  href="https://x.com/silver_mladshiy"
                  className="flex self-center"
                >
                  <h1 className="text-blue-500 font-bold hover:text-blue-700 hover:underline mx-5 self-center">
                    Twitter
                  </h1>
                </Link>
                <Link
                  href="https://www.reddit.com/user/Bubbly_Parfait_5823/"
                  className="flex"
                >
                  <h1 className="text-blue-500 font-bold hover:text-blue-700 hover:underline mx-5">
                    Reddit
                  </h1>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61563941855244"
                  className="flex"
                >
                  <h1 className="text-blue-500 font-bold hover:text-blue-700 hover:underline mx-5">
                    Facebook
                  </h1>
                </Link>
                <Link
                  href="https://www.youtube.com/@bytewizard42"
                  className="flex"
                >
                  <h1 className="text-blue-500 font-bold over:text-blue-700 hover:underline mx-5">
                    Youtube
                  </h1>
                </Link>
              </div>
            </PopoverPanel>
          </Popover>
          <div className="flex p-1 divide-x-2">
            <Link href="#" className="flex">
              <h1 className="text-blue-500 font-bold over:text-blue-700 hover:underline mx-5">
                Sing up
              </h1>
            </Link>
            <Link href="#" className="flex">
              <h1 className="text-blue-500 font-bold over:text-blue-700 hover:underline mx-5">
                Log in
              </h1>
            </Link>
            <Link href="#" className="flex">
              <h1 className="text-blue-500 font-bold over:text-blue-700 hover:underline mx-5">
                Help
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-red-500 text-2xl bg-red-100 p-5 flex underline border-2 border-red-300  rounded-xl">
          SILVESTROV HUB INC.
        </h1>
      </div>
      <div className="mt-5 flex justify-center">
        <h1 className="text-black  bg-gray-300 border-2 border-gray-400 p-1">
          Cteated by Silver_Mladshiy
        </h1>
      </div>
      <div className="mt-7 ">
        <div className="flex justify-center">
          <h1 className="text-xl text-blue-500">Site navigation:</h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="space-y-4">
            {data.map((itm, index) => (
              <div key={index} className="">
                <Link href={itm.link}>
                  <h1 className="text-blue-500 font-bold hover:text-blue-700 underline">
                    {itm.name}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
