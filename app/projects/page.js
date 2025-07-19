import TopBar from "@/components/topheader"
import Bottom from "@/components/botem"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {

    const data = [{ src: "/logo1.png", href: "https://svoyazemlyanow.vercel.app/", title: "Svoyazemlya", text: "We specialize in comprehensive groundwork solutions, delivering expert services from excavation to site preparation for various projects.", path: "svoyazemlya.vercel.app/" },]

    return (
        <main className="">
            <TopBar></TopBar>
            <div className="max-w-[100rem] mx-auto border-x-[1px] border-[#000000] pt-10 px-3 lg:px-10 bg-[#191919] pb-16 lg:pb-40 min-h-screen flex flex-col">
                <div className="pt-10 ">
                    <div className="max-w-[50rem]">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white">Projects I have created to make an impact.</h1>
                        <p className="text-gray-400 my-4 lg:my-8 ">I have worked on many small projects over the years because I love to create things. I put a lot of effort into each one. But, the projects you see here are the best ones I have made, and I am very proud of them. With these projects, I learned new things and got better at my skills. I felt really good when I finished them. Please look at them, and maybe you will find something you like.</p>
                    </div>
                </div>
                <div className="lg:mt-20 mt-16 flex flex-wrap gap-7 flex-grow">
                    {data.map((way, index) => (
                        <div key={index}>
                            <div className="py-4  rounded-2xl max-w-[25rem] p-1 lg:p-7 hover:bg-[#1726506c]/25">
                                <div className="">
                                    <Image
                                        src={way.src}
                                        height={5000}
                                        width={5000}
                                        alt="???"
                                        className="w-[4rem] h-[4rem] p-1.5 bg-gray-600 rounded-full flex"
                                    />
                                </div>
                                <div>
                                    <p className="text-white text-lg/10 mt-3">{way.title}</p>
                                    <p className="text-gray-400 text-sm/6 mt-1">{way.text}</p>
                                </div>
                                <div className="mt-4">
                                    <Link href={way.href} className="">
                                        <div className="flex hover:text-[#4879ff6c]">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                                            <p className="ml-2">{way.path}</p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Bottom></Bottom>
        </main>
    )
}