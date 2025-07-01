import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function TopBar() {

    const wayData = [{ name: "About", href: "/about" }]

    return (
        <div className="flex justify-center lg:gap-x-0 gap-x-12">
            <div className="bg-[#030e24] flex p-5 rounded-full shadow-lg shadow-zinc-300 mt-5 gap-x-12 px-7">
                <Link href={"/"}>
                    <p className="text-xl text-white font-bold">Mike Silvestrov</p>
                </Link>
                <div className="hidden lg:block">
                    {wayData.map((way, index) => (
                        <div key={index}>
                            <Link href={way.href}>
                                <p className="font-bold text-xl text-white hover:underline underline-offset-4">{way.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="block lg:hidden">
                <Popover className="relative">
                    <PopoverButton className="inline-flex items-center gap-x-4 bg-[#030e24] p-5 rounded-full shadow-lg shadow-zinc-300 mt-5">
                        <p className="text-xl text-white font-bold">Menu</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white caret-[#030e24]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-lg -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                    >
                        <div className="space-y-4 bg-[#030e24]/90 p-6 rounded-xl border-[1px] border-gray-500">
                            {wayData.map((way, index) => (
                                <div key={index}>
                                    <Link href={way.href}>
                                        <p className="text-white py-3 px-7 rounded-xl hover:bg-[#1c2536]">{way.name}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </PopoverPanel>
                </Popover>
            </div>
        </div>
    )
}