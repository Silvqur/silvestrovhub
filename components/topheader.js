import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function TopBar() {

    const wayData = [{ name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Uses", href: "/uses" }]

    return (
        <div className="max-w-[100rem] mx-auto ">
            <div className="border-x-[1px] border-[#000000]  bg-[#090f1f6c]">
                <div className="bg-[#0d0b0b] flex-grow flex justify-between p-5 shadow-md shadow-[#221d1d] px-7">
                    <div>
                        <Link href={"/"}>
                            <p className="text-xl text-white font-bold">$ilvestrov.Hub`</p>
                        </Link>
                    </div>
                    <div className="hidden  lg:flex gap-x-12">
                        {wayData.map((way, index) => (
                            <div key={index}>
                                <Link href={way.href}>
                                    <p className="font-bold text-xl text-white hover:underline underline-offset-4">{way.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="block lg:hidden">
                        <Popover className="relative">
                            <PopoverButton className="inline-flex items-center gap-x-4">
                                <p className="text-xl text-white font-bold">Menu</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white caret-[#030e24]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="absolute  z-10 mt-5 flex w-screen max-w-xl -right-7 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="bg-[#030e24]/90 rounded-xl border-[1px] border-gray-500 w-full">
                                    <div className="p-4 font-mono">
                                        <p>Navigation</p>
                                    </div>
                                    <div className="space-y-4 px-4 pb-4 divide-y-2">
                                        {wayData.map((way, index) => (
                                            <div key={index}>
                                                <Link href={way.href} className="flex gap-x-2 mt-4 px-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 self-center text-purple-300">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                    </svg>
                                                    <p className="text-gray-300 font-mono">{way.name}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 self-center text-purple-300">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </div>

                </div>
            </div>
        </div>
    )
}