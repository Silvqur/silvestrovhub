import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function TopBar() {

    const data = [
        { name: "SocialNetwork", href: "/socialnetwork" },
        { name: "News", href: "/news" },

    ]

    const solutions = [
        { name: 'News', description: 'Official news about the company and `my hometown', href: '/news', },
        { name: 'SocialNetwork', description: 'Silvestrov Hub SicialNetwork', href: '/socialnetwork', },
        { name: 'Home', description: 'Silvestrov Hub home page', href: '/home', },
    ]

    return (
        <div className="bg-white flex justify-between p-3 sticky top-0 px-2 lg:px-0 z-50 border-b-[1px] border-gray-200">
            <Link href="/home" className="">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="198.943 203.345 83.627 80.986" className=" size-7 lg:size-12 text-blue-500 mr-1 lg:mr-2">
                        <text style={{ whiteSpace: 'pre', fill: 'rgb(59, 130, 246)', fontFamily: 'Arial, sans-serif', fontSize: '28px' }} x="218.31" y="238.557">SV</text>
                        <text style={{ whiteSpace: 'pre', fill: 'rgb(59, 130, 246)', fontFamily: 'Arial, sans-serif', fontSize: '28px' }} x="211.268" y="265.845">HUB</text>
                    </svg>
                    <p className="text-black text-xl lg:text-4xl self-center">SILVESTROV HUB</p>
                </div>
            </Link>
            <Popover className="relative block lg:hidden">
                <PopoverButton className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 pt-1 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>

                </PopoverButton>

                <PopoverPanel
                    transition
                    className="absolute  z-10 mt-5 flex w-screen max-w-max -right-[7px] px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1">
                        <div className="p-4">
                            {solutions.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                                        </svg>

                                    </div>
                                    <div>
                                        <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </PopoverPanel>
            </Popover>
            <div className="hidden lg:flex gap-x-6">
                {data.map((itm, index) => (
                    <div key={index} className="self-center">
                        <Link href={itm.href} className="hover:underline hover:underline-offset-4 text-blue-500 delay-100">
                            <p className="text-black text-xl self-center">{itm.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}