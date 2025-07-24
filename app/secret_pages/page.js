"use client"

import { useState } from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";


const SecretPage = () => {
    const [code] = useState("1776");
    const [password, setPassword] = useState();
    const [showData, setShowData] = useState(false);
    const [attempts, setAttempts] = useState(true);
    const [guest, setGuest] = useState(false);

    const handleLogin = () => {
        if (password === code) {
            setShowData(true);
        } else {
            alert("Incorrect password");
        }
    };




    const wayData = [{ name: "About", href: "/about" }, { name: "Projects", href: "/projects" }, { name: "Uses", href: "/uses" }]



    return (
        <div className="bg-[url('/bg.png')] min-h-full bg-cover bg-center bg-fixed ">
            <div className="min-h-full bg-black/60 pb-10">
                <div>
                    <div className="bg-[#0d0b0b] flex-grow flex justify-between p-5 shadow-md shadow-[#221d1d] px-2 lg:px-7">
                        <div>
                            <Link href={"/"}>
                                <p className="text-xl text-white font-bold">$ilvestrov.Hub`</p>
                            </Link>
                        </div>
                        <div className="hidden  lg:flex gap-x-12">
                            {wayData.map((way, index) => (
                                <div key={index}>
                                    <Link href={way.href}>
                                        <p className="font-bold text-xl text-white hover:underline underline-offset-4">{way.name}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="block lg:hidden">
                            <Popover className="relative">
                                <PopoverButton className="inline-flex items-center gap-x-4">
                                    <p className="text-xl text-white font-bold">Menu</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white caret-[#030e24]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </PopoverButton>
                                <PopoverPanel
                                    transition
                                    className="absolute  z-10 mt-5 flex w-screen max-w-sm right-5 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                >
                                    <div className="bg-[#191919] rounded-xl border-[1px] border-[#000000] w-full">
                                        <div className="p-4 font-mono">
                                            <p>Navigation</p>
                                        </div>
                                        <div className="space-y-4 px-4 pb-4 divide-y-2">
                                            {wayData.map((way, index) => (
                                                <div key={index}>
                                                    <Link href={way.href} className="flex gap-x-2 mt-4 px-2">
                                                        <p className="text-gray-300 font-mono">{way.name}</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </Popover>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full ">
                    <div className="mt-7 flex flex-col items-center justify-center h-full">
                        {attempts && (
                            <div className="lg:py-14 px-10 py-7 shadow-xl shadow-white border-y-[1px] lg:border-[1px] border-white lg:px-52 rounded-xl bg-black/80">
                                <h1 className="text-3xl/10 my-9">Secret Page Login</h1>
                                <div className="">
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                            className="block w-full rounded-md bg-white px-5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                    <div className="mt-4 cursor-pointer text-md bg-white py-2 px-5 text-black rounded-lg hover:bg-gray-300" onClick={handleLogin}>
                                        <p className="text-center">Log in</p>
                                    </div>
                                    <p className="text-center my-6 px-6 text-white">Or continue with</p>
                                    <div className="mt-4 cursor-pointer text-md bg-neutral-400 py-2 px-5 text-black rounded-lg hover:bg-neutral-500" onClick={() => setGuest(true)}>
                                        <p className="text-center">Continue as guest</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:px-12 px-1">
                    <div className="min-w-full">
                        {showData && (
                            <div>
                                <div className="flex justify-center">
                                    {attempts && (
                                        <button onClick={() => setAttempts(false)}>
                                            <p className="text-red-800 text-center font-bold my-10 text-3xl">Close the authentication panel</p>
                                        </button>
                                    )}
                                </div>
                                <div className="">
                                    <div className="flex justify-center">
                                        <p className="text-white text-center text-4xl lg:text-7xl font-bold">Bertram Gilfoyle: Architect of Chaos</p>
                                    </div>
                                </div>
                                <div className="mt-24 bg-stone-800/80 p-3 lg:p-7 rounded-2xl">
                                    <div className=" pb-10">
                                        <p className="text-white text-4xl font-bold text-center">Gilfoyle Edits</p>
                                    </div>
                                    <div className="overflow-x-auto ">
                                        <div className="flex  gap-x-10">
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl " controls>
                                                    <source src="edit1.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit2.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit3.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit5.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit8.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit9.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit11.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[15rem] rounded-2xl" controls>
                                                    <source src="edit6.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[15rem] rounded-2xl" controls>
                                                    <source src="edit4.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit7.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl self-center mr-10" controls>
                                                    <source src="edit10.mp4" type="video/mp4" className="self-center" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-36 bg-stone-800/80 p-3 lg:p-7 rounded-2xl">
                                    <div className=" pb-10">
                                        <p className="text-white text-4xl font-bold text-center">Series Clips</p>
                                    </div>
                                    <div className="overflow-x-auto ">
                                        <div className="flex  gap-x-10">
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl " controls>
                                                    <source src="ser1.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="ser2.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="ser5.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="ser4.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="ser3.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-36 bg-stone-800/80 p-3 lg:p-7 rounded-2xl">
                                    <div className=" pb-10">
                                        <p className="text-white text-4xl font-bold text-center">A Short Story from the Series</p>
                                    </div>
                                    <div className="overflow-x-auto ">
                                        <div className="flex  gap-x-10">
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl " controls>
                                                    <source src="mov1.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="mov2.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="mov3.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="min-w-full">
                        {guest && (
                            <div className="">
                                <div className="flex justify-center">
                                    {attempts && (
                                        <button onClick={() => setAttempts(false)}>
                                            <p className="text-red-800 text-center font-bold my-10 text-3xl">Close the authentication panel</p>
                                        </button>
                                    )}
                                </div>
                                <div className="">
                                    <div className="flex justify-center">
                                        <p className="text-white text-center text-4xl lg:text-7xl font-bold">Bertram Gilfoyle: Architect of Chaos</p>
                                    </div>
                                </div>
                                <div className="mt-24 bg-stone-800/80 p-3 lg:p-7 rounded-2xl">
                                    <div className=" pb-10">
                                        <p className="text-white text-4xl font-bold text-center">Gilfoyle Edits</p>
                                    </div>
                                    <div className="overflow-x-auto ">
                                        <div className="flex  gap-x-10">
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl " controls>
                                                    <source src="edit1.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit2.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit3.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit5.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit8.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit9.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[30rem] max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit11.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[15rem] rounded-2xl" controls>
                                                    <source src="edit6.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[15rem] rounded-2xl" controls>
                                                    <source src="edit4.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="edit7.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl self-center mr-10" controls>
                                                    <source src="edit10.mp4" type="video/mp4" className="self-center" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-36 bg-stone-800/80 p-3 lg:p-7 rounded-2xl">
                                    <div className=" pb-10">
                                        <p className="text-white text-4xl font-bold text-center">Series Clips</p>
                                    </div>
                                    <div className="overflow-x-auto ">
                                        <div className="flex  gap-x-10">
                                            <div>
                                                <video className="lg:max-w-[20rem] max-w-[25erm] rounded-2xl " controls>
                                                    <source src="ser1.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[20rem] max-w-[25erm] rounded-2xl" controls>
                                                    <source src="ser2.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[20rem] max-w-[25erm] rounded-2xl" controls>
                                                    <source src="ser5.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[20rem] max-w-[25erm] rounded-2xl" controls>
                                                    <source src="ser4.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="lg:max-w-[20rem] max-w-[25erm] rounded-2xl" controls>
                                                    <source src="ser3.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-36 bg-stone-800/80 p-3 lg:p-7 rounded-2xl">
                                    <div className=" pb-10">
                                        <p className="text-white text-4xl font-bold text-center">A Short Story from the Series</p>
                                    </div>
                                    <div className="overflow-x-auto ">
                                        <div className="flex  gap-x-10">
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl " controls>
                                                    <source src="mov1.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="mov2.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                            <div>
                                                <video className="max-w-[20rem] rounded-2xl" controls>
                                                    <source src="mov3.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SecretPage;