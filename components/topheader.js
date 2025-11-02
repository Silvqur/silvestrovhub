import Link from "next/link"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";


export default function TopBar() {

    const wayData = [{ name: "Contact me", href: "/contact_me" }, { name: "Projects", href: "/projects" }, { name: "About", href: "/about" }, { name: "Uses", href: "/uses" }]

    return (
        <div className="w-full py-4 px-6 lg:px-12 flex items-center justify-between bg-gradient-to-r from-[#071026]/20 via-transparent to-[#0b1326]/10 glass-panel">
            <div>
                <Link href={"/"}>
                    <p className="text-white text-lg lg:text-2xl font-mono">$ilvestrov.Hub`</p></Link>
            </div>

            <div className="hidden lg:flex items-center gap-6">
                {wayData.map((w, i) => (
                    <Link key={i} href={w.href} className="text-gray-200 hover:text-white transition">{w.name}</Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:block">
                    <a href="/uses" className="btn-ghost">Setup</a>
                </div>
                <div className="lg:hidden">
                    {/* small mobile menu could go here; keep existing popover in future */}
                    <Link href={'/projects'} className="text-gray-200">Projects</Link>
                </div>
            </div>
        </div>
    )
}