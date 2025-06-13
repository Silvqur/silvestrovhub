import TopBar from "@/components/topheader"
import Image from "next/image"

export default function SocialNetwork() {

    const data = [
        { text: "Now we have a social network on our website, here you can see my posts and matbe others in future)", href: "/6.jpg", username: "Silver_Mladshiy", usertag: "@silver-mladshiy" },
        { text: "It is the first post from babich in this social network, guys Wish it to become the best!", href: "/7.jpg", username: "Donald_Duck", usertag: "@BabichVanya" }
    ]

    return (
        <main>
            <TopBar></TopBar>
            <div className="max-w-[63rem] mx-auto mt-5 lg:mt-10 p-5 rounded-lg">
                <div className="flex w-full justify-center border-[#213442] border-b-2 pb-3">
                    <div>
                        <p className="text-3xl text-black">SILVER_MLADSHIY</p>
                        <p className="tetx-center flex justify-center mt-2 text-sm text-black">Silvestrov Hub CEO</p>
                    </div>
                </div>
                {data.map((itm, index) => (
                    <div className="mt-7 " key={index}>
                        <div className="flex gap-4 lg:gap-7 pb-7 border-b-[1px] border-[#3c5c74]">
                            <Image
                                src={itm.href}
                                height={5000}
                                width={5000}
                                alt="???"
                                className="rounded-full w-[3rem] lg:w-[4rem] max-h-12 lg:max-h-16"
                            />
                            <div>
                                <div className="flex gap-1">
                                    <div className="flex gap-0.5">
                                        <p className="text-blue-500 mb-3  font-bold ">{itm.username}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 pt-1 text-blue-500">
                                            <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                    <p className="text-black mb-3">{itm.usertag}</p>
                                    <div className="bg-[#415c6d] p-0.5 rounded-full h-1 mt-2.5 mx-0.5"></div>
                                    <p className="text-[#415d70] mb-3">Jun 9</p>
                                </div>
                                <p className="text-black">{itm.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}