import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function TopBar() {

    const wayData = [{ name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Uses", href: "/uses" }]

    return (
        <div className="max-w-[100rem] mx-auto ">
            <div className="border-x-[1px] border-[#000000]  bg-[#090f1f6c]">
                <div className="bg-[#0d0b0b] flex-grow flex justify-between p-5 shadow-md shadow-[#221d1d] px-2 lg:px-7">
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
                                className="absolute  z-10 mt-5 flex w-screen max-w-sm right-5 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                                <div className="bg-[#191919] rounded-xl border-[1px] border-[#000000] w-full">
                                    <div className="p-4 font-mono">
                                        <p>Navigation</p>
                                    </div>
                                    <div className="space-y-4 px-4 pb-4 divide-y-2">
                                        {wayData.map((way, index) => (
                                            <div key={index}>
                                                <Link href={way.href} className="flex gap-x-2 mt-4 px-2">
                                                    <p className="text-gray-300 font-mono">{way.name}</p>
                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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