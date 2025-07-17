import Link from "next/link"

export default function Bottom() {

    const data = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Uses", href: "/uses" }]

    return (
        <div className="w-full block lg:flex justify-between border-x-[1px] py-5 p-3 lg:p-10  bg-[#191919] border-t-[1px] border-[#000000] max-w-[100rem] mx-auto">
            <div className="flex justify-center lg:justify-normal gap-x-12">
                {data.map((way, index) => (
                    <div key={index}>
                        <Link href={way.href}>
                            <p className="text-white text-md hover:underline">{way.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-5 lg:mt-0 flex justify-center lg:block lg:justify-normal">
                <p className="text-gray-300">© 2025 $ilvestrov.Hub` All rights reserved.</p>
            </div>
        </div>
    )
}