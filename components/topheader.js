import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function TopBar() {

    const solutions = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: "NewsPaper" },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', },
        { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', },
    ]

    return (
        <div className="bg-[#273a40] flex justify-between p-3 sticky top-0 px-2 lg:px-5 z-50">
            <Link href="/home" className="">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="198.943 203.345 83.627 80.986" className=" size-7 lg:size-12 border-[1px] border-[#935739] mr-1 lg:mr-2">
                        <text style={{ whiteSpace: 'pre', fill: 'rgb(147, 87, 57)', fontFamily: 'Arial, sans-serif', fontSize: '28px' }} x="218.31" y="238.557">SV</text>
                        <text style={{ whiteSpace: 'pre', fill: 'rgb(147, 87, 57)', fontFamily: 'Arial, sans-serif', fontSize: '28px' }} x="211.268" y="265.845">HUB</text>
                    </svg>
                    <p className="text-[#935739] text-xl lg:text-4xl self-center">SILVESTROV HUB</p>
                </div>
            </Link>
            <Popover className="relative">
                <PopoverButton className="">
                    <p className="text-[#935739] lg:text-3xl self-center text-xl">Menu</p>
                </PopoverButton>
                <PopoverPanel className="absolute right-0 z-50" transition>
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-[#545748] text-sm/6 shadow-lg">
                        <div className="p-4">
                            {solutions.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-[#2f3a32]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#3e2412]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <div>
                                        <a href={item.href} className="font-semibold text-gray-900">
                                            {item.name}
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    )
}