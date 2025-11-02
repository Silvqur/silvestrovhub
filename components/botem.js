import Link from "next/link"

export default function Bottom() {

    const data = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Uses", href: "/uses" }, {name: "Contact me", href: "/contact_me"}]

    return (
        <footer className="w-full lg:px-12 px-4 py-6 mt-12 glass-panel border-t border-white/6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-6 items-center">
                <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                    {data.map((way, index) => (
                        <Link key={index} href={way.href}>
                            <p className="text-white text-sm hover:underline">{way.name}</p>
                        </Link>
                    ))}
                </div>

                <div className="text-center lg:text-right text-gray-300 text-sm">
                    <div>© 2025 $ilvestrov.Hub`</div>
                    <div className="text-xs mt-1">All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}