import TopBar from "@/components/topheader"
import Bottom from "@/components/botem"

export default function Uses() {

    const data = [{ title: "16” HP laptop (2019)", des: "I like my laptop, it is not so big and very useful." },
    { title: "Xiaomi monitor 27”", des: "The only display on the market if you want something HiDPI and 27”." },
    { title: "Apple Magic Keyboard", des: "They do not make keyboards the way othres do." },
    { title: "Xiaomi mouse", des: "That is just cheap and cute)" },
    { title: "AeroCool chair", des: "Very comfortable...." },
    { title: "Sony headphones", des: "They have a realy good sound. I have stereo version." },
    ]

    const data1 = [
        { title: "Visual Studio Code", des: "VS Code is still the best text editor ever made." },
        { title: "Git / GitHub", des: "Code helpers" },
        { title: "Google Gemini 2.5 Pro", des: "AI tool that in my opinion is the best" },
    ]

    return (
        <main>
            <TopBar></TopBar>
            <div className="max-w-[80rem] mx-auto border-x-[1px] border-[#1726506c] p-3 lg:px-10 bg-[#090f1f6c] pb-16 lg:pb-40">
                <div className="lg:mt-24 mt-10">
                    <div className="max-w-[50rem]">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white">Software I use, gadgets I love, and other things I recommend.</h1>
                        <p className="text-gray-400 my-4 lg:my-8 ">I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.</p>
                    </div>
                    <div className="lg:flex block lg:mt-20 mt-16 px-1 lg:px-7 py-3 lg:border-l-[1px] border-gray-400">
                        <div className="">
                            <p className="mr-32 lg:no-underline lg:mb-0 mb-10 underline">Workstation</p>
                        </div>
                        <div className="space-y-11">
                            {data.map((way, index) => (
                                <div className="max-w-[30rem]" key={index}>
                                    <p className="text-md text-white font-bold">{way.title}</p>
                                    <p className="text-sm text-gray-400 mt-3">{way.des}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:flex block mt-20 px-1 lg:px-7 py-3 lg:border-l-[1px] border-gray-400">
                        <div className="">
                            <p className="mr-20 lg:no-underline lg:mb-0 mb-10 underline">Development tools</p>
                        </div>
                        <div className="space-y-11">
                            {data1.map((way, index) => (
                                <div className="max-w-[30rem]" key={index}>
                                    <p className="text-md text-white font-bold">{way.title}</p>
                                    <p className="text-sm text-gray-400 mt-3">{way.des}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Bottom></Bottom>
        </main>
    )
}