import Link from "next/link"

export default function Bottom() {

    const data = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Uses", href: "/uses" }, {name: "Contact me", href: "/contact_me"}]

    return (
        <div className="w-full block lg:px-10 px-2 lg:flex lg:justify-between p-2 lg:p-4 border-t-[1px] border-neutral-800">
            <div className="flex justify-center lg:justify-normal gap-x-12 gap-y-5 flex-wrap">
                {data.map((way, index) => (
                    <div key={index}>
                        <Link href={way.href}>
                            <p className="text-white text-md hover:underline">{way.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-5 lg:mt-0 flex justify-center lg:block lg:justify-normal">
                <p className="text-gray-300">© 2025 $ilvestrov.Hub` <span className="ml-3">All rights reserved.</span></p>
            </div>
        </div>
    )
}