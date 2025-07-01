import Link from "next/link"

export default function Bottom() {
    return (
        <div className="w-full block lg:flex justify-between border-x-[1px] p-3 lg:p-10  bg-[#090f1f6c] border-t-[1px] border-[#1726506c] max-w-[80rem] mx-auto">
            <div className="flex justify-center lg:justify-normal gap-x-12">
                <div>
                    <Link href={"/"}>
                        <p className="text-white text-md hover:underline">Home</p>
                    </Link>
                </div>
                <div>
                    <Link href={"/about"}>
                        <p className="text-white text-md hover:underline">About</p>
                    </Link>
                </div>
            </div>
            <div className="mt-5 lg:mt-0 flex justify-center lg:block lg:justify-normal">
                <p className="text-gray-300">© 2025 Spencer Sharp. All rights reserved.</p>
            </div>
        </div>
    )
}