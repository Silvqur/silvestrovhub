import TopBar from "@/components/topheader"
import Image from "next/image"
import Link from "next/link"
import Bottom from "@/components/botem"

export default function About() {
    return (
        <main>
            <div className="max-w-[80rem] mx-auto border-x-[1px] border-[#1726506c] p-3 lg:px-10 bg-[#090f1f6c] pb-16 lg:pb-32">
                <TopBar></TopBar>
                <div className="lg:mt-24 mt-14">
                    <h1 className="flex justify-center text-white text-4xl/5 ">About me</h1>
                </div>
                <div className="block lg:hidden">
                    <Image
                        src={"/bg.jpg"}
                        height={5000}
                        width={1000}
                        alt="???"
                        className="rotate-3 rounded-3xl max-w-full  mt-10 lg:max-w-[25rem]"
                    />
                    <div className=" mt-4">
                        <p className="text-white text-2xl font-bold">I’m Mike Silvestrov, a software engineer skilled in Python, JavaScript, and Next.js.</p>
                        <h1 className="text-lg/9 text-gray-400 mt-7">
                            Hi, I’m Mike, a software developer dedicated to building innovative solutions. With five years of experience in web development, I specialize in UI/UX design, blending creativity with precision to deliver impactful results. <span><br></br><br></br></span> My work is driven by a commitment to core values, and I thrive on pushing creative boundaries. Some of my proudest achievements include designing a brand identity for a global client.<span><br></br><br></br></span> Whether I’m working on a specific task, my goal is to enhance user experiences. I’m excited to bring my skills and passion to your goal. Let’s create something extraordinary together!
                        </h1>
                    </div>
                    <div className="mt-16 space-y-5">
                        <div className="hover:underline">
                            <Link href={"https://x.com/silver_mladshiy"} className="flex gap-x-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className=" hover:fill-white h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path></svg>
                                <p className="text-white text-md/10 self-center">Follow on X</p>
                            </Link>
                        </div>
                        <div className="hover:underline">
                            <Link href={"ttps://www.instagram.com/silvermladshiy/"} className="flex gap-x-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className=" hover:fill-purple-500 h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>                                                  <p className="text-white text-md/10 self-center">Follow on Instagam</p>
                            </Link>
                        </div>
                        <div className="hover:underline">
                            <Link href={"https://github.com/Silvqur"} className="flex gap-x-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="hover:fill-white h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                                <p className="text-white text-md/10 self-center">Follow on Github</p>
                            </Link>
                        </div>
                        <div className="hover:underline">
                            <Link href={"https://www.reddit.com/user/Bubbly_Parfait_5823/"} className="flex gap-x-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    role="img"
                                    aria-labelledby="a69sjk3haegu9ndjz6vhjsso861tsq3i"
                                    className="octicon size-6 self-center text-[#a1a1aa] hover:text-orange-500"
                                >
                                    <title id="a69sjk3haegu9ndjz6vhjsso861tsq3i">Reddit</title>
                                    <path
                                        d="M9.42117 1C8.30163 1 7.46615 1.91456 7.46615 2.95502V4.75573C5.9979 4.83364 4.65515 5.2251 3.58321 5.83907C3.17013 5.4424 2.61701 5.26625 2.08071 5.26664C1.49925 5.26707 0.904821 5.46856 0.494798 5.92979L0.485414 5.94021L0.47603 5.95064C0.0827037 6.44221 -0.0730397 7.10072 0.0318487 7.75447C0.127638 8.35152 0.473426 8.95088 1.07453 9.34352C1.07059 9.4098 1.05993 9.47469 1.05993 9.54163C1.05993 12.1906 4.17335 14.3463 8 14.3463C11.8266 14.3463 14.9401 12.1906 14.9401 9.54163C14.9401 9.47469 14.9294 9.4098 14.9255 9.34352C15.5266 8.95088 15.8724 8.35152 15.9682 7.75447C16.073 7.10072 15.9173 6.44221 15.524 5.95064L15.5146 5.94021L15.5052 5.92979C15.0951 5.4685 14.5008 5.26707 13.9193 5.26664C13.3829 5.26625 12.8297 5.44225 12.4168 5.83907C11.3449 5.2251 10.0021 4.83364 8.53385 4.75573V2.95502C8.53385 2.43237 8.83559 2.0677 9.42117 2.0677C9.69914 2.0677 10.0378 2.20699 10.5681 2.39302C11.0165 2.55028 11.5999 2.70923 12.3459 2.75691C12.5243 3.2844 13.0197 3.66926 13.6054 3.66926C14.3395 3.66926 14.9401 3.06868 14.9401 2.33463C14.9401 1.60058 14.3395 1 13.6054 1C13.1043 1 12.6699 1.28317 12.4418 1.69442C11.8041 1.65911 11.3356 1.53103 10.9216 1.38579C10.4391 1.21654 9.99576 1 9.42117 1ZM2.08071 6.33435C2.29166 6.33419 2.49208 6.38955 2.65731 6.47928C2.06795 6.97122 1.62078 7.54599 1.35084 8.17363C1.20751 7.99671 1.12113 7.79807 1.08704 7.58556C1.02951 7.22698 1.13682 6.85424 1.30704 6.63359C1.46791 6.46045 1.76166 6.33458 2.08071 6.33435ZM13.9182 6.33435C14.2374 6.33458 14.5321 6.4605 14.693 6.63359C14.8632 6.85424 14.9705 7.22698 14.913 7.58556C14.8789 7.79807 14.7925 7.99671 14.6492 8.17363C14.3792 7.54599 13.9321 6.97122 13.3427 6.47928C13.5075 6.38965 13.7074 6.33419 13.9182 6.33435ZM5.33074 7.40622C5.92065 7.40622 6.39845 7.88402 6.39845 8.47392C6.39845 9.06383 5.92065 9.54163 5.33074 9.54163C4.74084 9.54163 4.26304 9.06383 4.26304 8.47392C4.26304 7.88402 4.74084 7.40622 5.33074 7.40622ZM10.6693 7.40622C11.2592 7.40622 11.737 7.88402 11.737 8.47392C11.737 9.06383 11.2592 9.54163 10.6693 9.54163C10.0794 9.54163 9.60155 9.06383 9.60155 8.47392C9.60155 7.88402 10.0794 7.40622 10.6693 7.40622ZM10.7965 10.3601C10.4553 11.3568 9.36452 12.2109 8 12.2109C6.63548 12.2109 5.54467 11.3572 5.20354 10.4321C5.81746 10.9302 6.84047 11.286 8 11.286C9.15953 11.286 10.1825 10.9297 10.7965 10.3601Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>                                    <p className="text-white text-md/10 self-center">Follow on Reddit</p>
                            </Link>
                        </div>
                        <div className="hover:underline">
                            <Link href={"https://www.youtube.com/@fobg-o5x"} className="flex gap-x-3">
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ipc-icon ipc-icon--youtube hover:text-red-500 size-6 self-center text-[#a1a1aa]"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    role="presentation"
                                >
                                    <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
                                </svg>                                    <p className="text-white text-md/10 self-center">Follow on Youtube</p>
                            </Link>
                        </div>
                    </div>
                    <div className="pt-7 pb-10">
                        <div className="pt-7 border-t-[1px] border-[#1726506c] flex gap-x-3">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                            <p>dn606304@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex hidden w-full mt-24 gap-x-10">
                    <div className="flex flex-grow w-full">
                        <div className="">
                            <p className="text-white text-3xl font-bold">I’m Mike Silvestrov, a software engineer skilled in Python, JavaScript, and Next.js.</p>
                            <h1 className="text-xl/9 text-gray-400 mt-14">
                                Hi, I’m Mike, a software developer dedicated to building innovative solutions. With five years of experience in web development, I specialize in UI/UX design, blending creativity with precision to deliver impactful results. <span><br></br><br></br></span> My work is driven by a commitment to core values, and I thrive on pushing creative boundaries. Some of my proudest achievements include designing a brand identity for a global client.<span><br></br><br></br></span> Whether I’m working on a specific task, my goal is to enhance user experiences. I’m excited to bring my skills and passion to your goal. Let’s create something extraordinary together!
                            </h1>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src={"/bg.jpg"}
                            height={5000}
                            width={1000}
                            alt="???"
                            className="rotate-3 rounded-3xl max-w-[25rem] hidden lg:block"
                        />
                        <div className="mt-8 space-y-5">
                            <div className="hover:underline">
                                <Link href={"https://x.com/silver_mladshiy"} className="flex gap-x-3">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className=" hover:fill-white h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path></svg>
                                    <p className="text-white text-md/10 self-center">Follow on X</p>
                                </Link>
                            </div>
                            <div className="hover:underline">
                                <Link href={"ttps://www.instagram.com/silvermladshiy/"} className="flex gap-x-3">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className=" hover:fill-purple-500 h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>                                                  <p className="text-white text-md/10 self-center">Follow on Instagam</p>
                                </Link>
                            </div>
                            <div className="hover:underline">
                                <Link href={"https://github.com/Silvqur"} className="flex gap-x-3">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="hover:fill-white h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
                                    <p className="text-white text-md/10 self-center">Follow on Github</p>
                                </Link>
                            </div>
                            <div className="hover:underline">
                                <Link href={"https://www.reddit.com/user/Bubbly_Parfait_5823/"} className="flex gap-x-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        role="img"
                                        aria-labelledby="a69sjk3haegu9ndjz6vhjsso861tsq3i"
                                        className="octicon size-6 self-center text-[#a1a1aa] hover:text-orange-500"
                                    >
                                        <title id="a69sjk3haegu9ndjz6vhjsso861tsq3i">Reddit</title>
                                        <path
                                            d="M9.42117 1C8.30163 1 7.46615 1.91456 7.46615 2.95502V4.75573C5.9979 4.83364 4.65515 5.2251 3.58321 5.83907C3.17013 5.4424 2.61701 5.26625 2.08071 5.26664C1.49925 5.26707 0.904821 5.46856 0.494798 5.92979L0.485414 5.94021L0.47603 5.95064C0.0827037 6.44221 -0.0730397 7.10072 0.0318487 7.75447C0.127638 8.35152 0.473426 8.95088 1.07453 9.34352C1.07059 9.4098 1.05993 9.47469 1.05993 9.54163C1.05993 12.1906 4.17335 14.3463 8 14.3463C11.8266 14.3463 14.9401 12.1906 14.9401 9.54163C14.9401 9.47469 14.9294 9.4098 14.9255 9.34352C15.5266 8.95088 15.8724 8.35152 15.9682 7.75447C16.073 7.10072 15.9173 6.44221 15.524 5.95064L15.5146 5.94021L15.5052 5.92979C15.0951 5.4685 14.5008 5.26707 13.9193 5.26664C13.3829 5.26625 12.8297 5.44225 12.4168 5.83907C11.3449 5.2251 10.0021 4.83364 8.53385 4.75573V2.95502C8.53385 2.43237 8.83559 2.0677 9.42117 2.0677C9.69914 2.0677 10.0378 2.20699 10.5681 2.39302C11.0165 2.55028 11.5999 2.70923 12.3459 2.75691C12.5243 3.2844 13.0197 3.66926 13.6054 3.66926C14.3395 3.66926 14.9401 3.06868 14.9401 2.33463C14.9401 1.60058 14.3395 1 13.6054 1C13.1043 1 12.6699 1.28317 12.4418 1.69442C11.8041 1.65911 11.3356 1.53103 10.9216 1.38579C10.4391 1.21654 9.99576 1 9.42117 1ZM2.08071 6.33435C2.29166 6.33419 2.49208 6.38955 2.65731 6.47928C2.06795 6.97122 1.62078 7.54599 1.35084 8.17363C1.20751 7.99671 1.12113 7.79807 1.08704 7.58556C1.02951 7.22698 1.13682 6.85424 1.30704 6.63359C1.46791 6.46045 1.76166 6.33458 2.08071 6.33435ZM13.9182 6.33435C14.2374 6.33458 14.5321 6.4605 14.693 6.63359C14.8632 6.85424 14.9705 7.22698 14.913 7.58556C14.8789 7.79807 14.7925 7.99671 14.6492 8.17363C14.3792 7.54599 13.9321 6.97122 13.3427 6.47928C13.5075 6.38965 13.7074 6.33419 13.9182 6.33435ZM5.33074 7.40622C5.92065 7.40622 6.39845 7.88402 6.39845 8.47392C6.39845 9.06383 5.92065 9.54163 5.33074 9.54163C4.74084 9.54163 4.26304 9.06383 4.26304 8.47392C4.26304 7.88402 4.74084 7.40622 5.33074 7.40622ZM10.6693 7.40622C11.2592 7.40622 11.737 7.88402 11.737 8.47392C11.737 9.06383 11.2592 9.54163 10.6693 9.54163C10.0794 9.54163 9.60155 9.06383 9.60155 8.47392C9.60155 7.88402 10.0794 7.40622 10.6693 7.40622ZM10.7965 10.3601C10.4553 11.3568 9.36452 12.2109 8 12.2109C6.63548 12.2109 5.54467 11.3572 5.20354 10.4321C5.81746 10.9302 6.84047 11.286 8 11.286C9.15953 11.286 10.1825 10.9297 10.7965 10.3601Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>                                    <p className="text-white text-md/10 self-center">Follow on Reddit</p>
                                </Link>
                            </div>
                            <div className="hover:underline">
                                <Link href={"https://www.youtube.com/@fobg-o5x"} className="flex gap-x-3">
                                    <svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ipc-icon ipc-icon--youtube hover:text-red-500 size-6 self-center text-[#a1a1aa]"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        role="presentation"
                                    >
                                        <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
                                    </svg>                                    <p className="text-white text-md/10 self-center">Follow on Youtube</p>
                                </Link>
                            </div>
                        </div>
                        <div className="pt-7">
                            <div className="pt-7 border-t-[1px] border-[#1726506c] flex gap-x-3">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                <p>dn606304@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom></Bottom>
        </main >
    )
}