import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function TopBar() {

    const data = [
        { name: "SocialNetwork", href: "/socialnetwork" },
        { name: "News", href: "/news" }
    ]

    return (
        <div className="bg-white flex justify-between p-3 sticky top-0 px-2 lg:px-5 z-50 border-b-[1px] border-gray-200">
            <Link href="/home" className="">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="198.943 203.345 83.627 80.986" className=" size-7 lg:size-12 text-blue-500 mr-1 lg:mr-2">
                        <text style={{ whiteSpace: 'pre', fill: 'rgb(59, 130, 246)', fontFamily: 'Arial, sans-serif', fontSize: '28px' }} x="218.31" y="238.557">SV</text>
                        <text style={{ whiteSpace: 'pre', fill: 'rgb(59, 130, 246)', fontFamily: 'Arial, sans-serif', fontSize: '28px' }} x="211.268" y="265.845">HUB</text>
                    </svg>
                    <p className="text-black text-xl lg:text-4xl self-center">SILVESTROV HUB</p>
                </div>
            </Link>
            <div className="flex gap-x-6">
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