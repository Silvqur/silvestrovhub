"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function News() {
  const top = [
    { name: "Top News" },
    { name: "Breaking News" },
    { name: "Leatest News" },
    { name: "Company News" },
  ];

  const [textc, setTextc] = useState("white");
  const [count, setCount] = useState(0);

  const fnews = [
    {
      href: "/2jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
  ];

  const wholeNews = [
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
    {
      href: "/2.jpg",
      title: "New soft",
      ftext: "CodeGenius leverages advanced  ",
      stext:
        "machine learning models to understand natural language instructions and translate them into efficient code, stated CEO Anya Sharma during the product launch. This will empower developers to focus on higher-level design and innovation, rather than spending time on repetitive tasks",
    },
  ];

  function cou() {
    setCount(count + 1);
  }

  function col() {
    textc == "white"
      ? setTextc("text-purple-500")
      : setTextc("text-purple-500");
  }

  return (
    <main className="bg-white">
      <div className="fixed top-0 right-[0px] lg:block hidden">
        <div className="flex">
          <div className="bg-neutral-800 w-full hover:bg-neutral-900 self-center p-2 z-50">
            <Link
              href="https://x.com/silver_mladshiy"
              className="flex text-white justify-center"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="ipc-icon ipc-icon--twitter size-8 "
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M18.382 2.074h3.372l-7.404 8.43L23 21.942h-6.788l-5.315-6.95-6.085 6.95H1.44l7.844-9.017L1 2.074h6.957l4.802 6.349 5.623-6.349zm-1.18 17.887h1.869L6.975 3.98H4.966l12.235 15.981z"></path>
              </svg>
            </Link>
          </div>
          <div className="bg-blue-600 p-2 w-full hover:bg-blue-700 self-center">
            <Link
              href="https://www.facebook.com/profile.php?id=61563941855244"
              className="flex text-white justify-center"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="ipc-icon ipc-icon--facebook size-8 self-center"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path>
              </svg>
            </Link>
          </div>
          <div className="bg-orange-600 p-2 w-full hover:bg-orange-700 self-center">
            <Link
              href="https://www.reddit.com/user/Bubbly_Parfait_5823/"
              className="flex text-white justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                role="img"
                aria-labelledby="a69sjk3haegu9ndjz6vhjsso861tsq3i"
                className="octicon size-8 self-center text-white"
              >
                <title id="a69sjk3haegu9ndjz6vhjsso861tsq3i">Reddit</title>
                <path
                  d="M9.42117 1C8.30163 1 7.46615 1.91456 7.46615 2.95502V4.75573C5.9979 4.83364 4.65515 5.2251 3.58321 5.83907C3.17013 5.4424 2.61701 5.26625 2.08071 5.26664C1.49925 5.26707 0.904821 5.46856 0.494798 5.92979L0.485414 5.94021L0.47603 5.95064C0.0827037 6.44221 -0.0730397 7.10072 0.0318487 7.75447C0.127638 8.35152 0.473426 8.95088 1.07453 9.34352C1.07059 9.4098 1.05993 9.47469 1.05993 9.54163C1.05993 12.1906 4.17335 14.3463 8 14.3463C11.8266 14.3463 14.9401 12.1906 14.9401 9.54163C14.9401 9.47469 14.9294 9.4098 14.9255 9.34352C15.5266 8.95088 15.8724 8.35152 15.9682 7.75447C16.073 7.10072 15.9173 6.44221 15.524 5.95064L15.5146 5.94021L15.5052 5.92979C15.0951 5.4685 14.5008 5.26707 13.9193 5.26664C13.3829 5.26625 12.8297 5.44225 12.4168 5.83907C11.3449 5.2251 10.0021 4.83364 8.53385 4.75573V2.95502C8.53385 2.43237 8.83559 2.0677 9.42117 2.0677C9.69914 2.0677 10.0378 2.20699 10.5681 2.39302C11.0165 2.55028 11.5999 2.70923 12.3459 2.75691C12.5243 3.2844 13.0197 3.66926 13.6054 3.66926C14.3395 3.66926 14.9401 3.06868 14.9401 2.33463C14.9401 1.60058 14.3395 1 13.6054 1C13.1043 1 12.6699 1.28317 12.4418 1.69442C11.8041 1.65911 11.3356 1.53103 10.9216 1.38579C10.4391 1.21654 9.99576 1 9.42117 1ZM2.08071 6.33435C2.29166 6.33419 2.49208 6.38955 2.65731 6.47928C2.06795 6.97122 1.62078 7.54599 1.35084 8.17363C1.20751 7.99671 1.12113 7.79807 1.08704 7.58556C1.02951 7.22698 1.13682 6.85424 1.30704 6.63359C1.46791 6.46045 1.76166 6.33458 2.08071 6.33435ZM13.9182 6.33435C14.2374 6.33458 14.5321 6.4605 14.693 6.63359C14.8632 6.85424 14.9705 7.22698 14.913 7.58556C14.8789 7.79807 14.7925 7.99671 14.6492 8.17363C14.3792 7.54599 13.9321 6.97122 13.3427 6.47928C13.5075 6.38965 13.7074 6.33419 13.9182 6.33435ZM5.33074 7.40622C5.92065 7.40622 6.39845 7.88402 6.39845 8.47392C6.39845 9.06383 5.92065 9.54163 5.33074 9.54163C4.74084 9.54163 4.26304 9.06383 4.26304 8.47392C4.26304 7.88402 4.74084 7.40622 5.33074 7.40622ZM10.6693 7.40622C11.2592 7.40622 11.737 7.88402 11.737 8.47392C11.737 9.06383 11.2592 9.54163 10.6693 9.54163C10.0794 9.54163 9.60155 9.06383 9.60155 8.47392C9.60155 7.88402 10.0794 7.40622 10.6693 7.40622ZM10.7965 10.3601C10.4553 11.3568 9.36452 12.2109 8 12.2109C6.63548 12.2109 5.54467 11.3572 5.20354 10.4321C5.81746 10.9302 6.84047 11.286 8 11.286C9.15953 11.286 10.1825 10.9297 10.7965 10.3601Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex bg-red-500 w-full justify-center gap-x-1">
            <Link
              href="https://www.youtube.com/@bytewizard42"
              className="self-center p-2"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="ipc-icon ipc-icon--youtube text-white size-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image src="/1.jpeg" height={5000} width={5000} alt="???" />
      </div>
      <div className="bg-neutral-800 lg:justify-normal justify-between flex py-3 lg:px-10 px-3 mb-5">
        <div>
          <h1 className="text-5xl text-nowrap flex">NEWS NEWS</h1>
        </div>
        <div className="hidden lg:flex justify-between w-full self-center px-60">
          {top.map((item, index) => (
            <div
              key={index}
              className="border-b-[3px] border-neutral-800 hover:border-white px-3"
            >
              <Link href="#">
                <h1 className="text-2xl">{item.name}</h1>
              </Link>
            </div>
          ))}
        </div>
        <Popover className="block lg:hidden">
          <PopoverButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 self-center"
            >
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </PopoverButton>
          <PopoverPanel>
            <div className="space-y-5">
              {top.map((itm, index) => (
                <div className="" key={index}>
                  <p>{itm.name}</p>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
      </div>
      <div className="bg-purple-500 p-5 border-4 border-purple-600 mb-20">
        <Link href="https://t.me/silvqur">
          <h1 className="flex justify-center text-xl">
            Send feedback ( Telegram )
          </h1>
        </Link>
      </div>
      <div className="flex lg:px-20 gap-x-5">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 lg:size-24 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
        </div>
        <div className="border-y-4 border-gray-400  py-2 w-full">
          <Link href="/home">
            <h1 className="text-black text-2xl lg:text-4xl">SILVESTROV HUB</h1>
          </Link>
          <h1 className="text-black text-xl pt-10 flex justify-start lg:justify-center">
            Silvestrov Hub Inc. 2025
          </h1>
        </div>
      </div>
      <div className="mt-10 lg:px-10 ">
        <h1 className="text-black text-xl font-mono mx-2">
          Breaking News (
          <span className="text-red-500 underline"> Leatest </span>)
        </h1>
        <div className="flex lg:justify-between w-full gap-x-20 lg:border-b-4 lg:pb-24 border-gray-600">
          <div className="overflow-x-auto w-full lg:overflow-x-hidden">
            <div className="flex  space-x-5 w-full justify-between mt-5">
              {fnews.map((item, index) => (
                <div
                  className="p-3 bg-neutral-300 rounded-md max-w-full flex-none mx-2"
                  key={index}
                >
                  <div className="relative w-full">
                    <Image
                      src="/2.jpg"
                      height={200}
                      width={200}
                      className="lg:size-64 flex justify-center lg:justify-normal w-full"
                      alt="???"
                    />
                    <h1 className="absolute lg:top-[220px] top-[380px] left-[30px] lg:left-[10px] text-xl font-bold">
                      {item.title}
                    </h1>
                  </div>
                  <div className="text-wrap max-w-full lg:max-w-[16rem]  mt-1">
                    <p className="text-black text-wrap w-full">
                      <span className="font-bold">{item.ftext}</span>
                      {item.stext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/3.jpg"
              height={5000}
              width={5000}
              className=" max-w-[23rem]"
              alt="???"
            />
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-black text-xl font-mono mx-2">
              All News (
              <span className="text-red-500 underline"> Whole time </span>)
            </h1>
          </div>
          <div className="overflow-x-auto lg:overflow-x-hidden">
            <div className="flex gap-5 lg:gap-16 w-full mt-5 lg:flex-wrap mx-2">
              {wholeNews.map((itm, index) => (
                <div
                  className="bg-neutral-300 p-3 rounded-lg max-w-full flex-none"
                  key={index}
                >
                  <div>
                    <Image
                      src={itm.href}
                      height={5000}
                      width={5000}
                      className="lg:max-w-[30rem] max-w-full"
                      alt="???"
                    />
                    <div className="flex justify-between">
                      <div className="flex text-wrap w-full max-w-[26rem]">
                        <p className=" text-black text-wrap">
                          <span className="font-bold">{itm.ftext}</span>
                          {itm.stext}
                        </p>
                      </div>
                      <div className="flex justify-end self-end">
                        <button onClick={col} className={textc}>
                          <div
                            className="bg-purple-300 p-2 rounded-full"
                            onClick={cou}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6  "
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="]">
                            <p className="text-purple-700 bg-white p-0.5 rounded-full mt-1 ">
                              {count}
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex w-full mt-7">
        <div className="bg-neutral-800 p-8 w-full hover:bg-neutral-900 self-center">
          <Link
            href="https://x.com/silver_mladshiy"
            className="flex text-white justify-center"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ipc-icon ipc-icon--twitter size-5 lg:size-6 self-center mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M18.382 2.074h3.372l-7.404 8.43L23 21.942h-6.788l-5.315-6.95-6.085 6.95H1.44l7.844-9.017L1 2.074h6.957l4.802 6.349 5.623-6.349zm-1.18 17.887h1.869L6.975 3.98H4.966l12.235 15.981z"></path>
            </svg>
            <h1 className="text-white flex justify-center lg:text-xl text-sm self-center">
              Twitter
            </h1>
          </Link>
        </div>
        <div className="bg-blue-600 p-8 w-full hover:bg-blue-700 self-center">
          <Link
            href="https://www.facebook.com/profile.php?id=61563941855244"
            className="flex text-white justify-center"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ipc-icon ipc-icon--facebook mr-1 size-5 lg:size-6 self-center"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M20.896 2H3.104C2.494 2 2 2.494 2 3.104v17.792C2 21.506 2.494 22 3.104 22h9.579v-7.745h-2.607v-3.018h2.607V9.01c0-2.584 1.577-3.99 3.882-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.595-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V22h5.097c.61 0 1.104-.494 1.104-1.104V3.104C22 2.494 21.506 2 20.896 2"></path>
            </svg>
            <h1 className="text-white flex justify-center lg:text-xl text-sm self-center">
              Facebook
            </h1>
          </Link>
        </div>
        <div className="bg-orange-600 p-8 w-full hover:bg-orange-700 self-center">
          <Link
            href="https://www.reddit.com/user/Bubbly_Parfait_5823/"
            className="flex text-white justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              role="img"
              aria-labelledby="a69sjk3haegu9ndjz6vhjsso861tsq3i"
              className="octicon mr-1 size-5 lg:size-6 self-center text-white"
            >
              <title id="a69sjk3haegu9ndjz6vhjsso861tsq3i">Reddit</title>
              <path
                d="M9.42117 1C8.30163 1 7.46615 1.91456 7.46615 2.95502V4.75573C5.9979 4.83364 4.65515 5.2251 3.58321 5.83907C3.17013 5.4424 2.61701 5.26625 2.08071 5.26664C1.49925 5.26707 0.904821 5.46856 0.494798 5.92979L0.485414 5.94021L0.47603 5.95064C0.0827037 6.44221 -0.0730397 7.10072 0.0318487 7.75447C0.127638 8.35152 0.473426 8.95088 1.07453 9.34352C1.07059 9.4098 1.05993 9.47469 1.05993 9.54163C1.05993 12.1906 4.17335 14.3463 8 14.3463C11.8266 14.3463 14.9401 12.1906 14.9401 9.54163C14.9401 9.47469 14.9294 9.4098 14.9255 9.34352C15.5266 8.95088 15.8724 8.35152 15.9682 7.75447C16.073 7.10072 15.9173 6.44221 15.524 5.95064L15.5146 5.94021L15.5052 5.92979C15.0951 5.4685 14.5008 5.26707 13.9193 5.26664C13.3829 5.26625 12.8297 5.44225 12.4168 5.83907C11.3449 5.2251 10.0021 4.83364 8.53385 4.75573V2.95502C8.53385 2.43237 8.83559 2.0677 9.42117 2.0677C9.69914 2.0677 10.0378 2.20699 10.5681 2.39302C11.0165 2.55028 11.5999 2.70923 12.3459 2.75691C12.5243 3.2844 13.0197 3.66926 13.6054 3.66926C14.3395 3.66926 14.9401 3.06868 14.9401 2.33463C14.9401 1.60058 14.3395 1 13.6054 1C13.1043 1 12.6699 1.28317 12.4418 1.69442C11.8041 1.65911 11.3356 1.53103 10.9216 1.38579C10.4391 1.21654 9.99576 1 9.42117 1ZM2.08071 6.33435C2.29166 6.33419 2.49208 6.38955 2.65731 6.47928C2.06795 6.97122 1.62078 7.54599 1.35084 8.17363C1.20751 7.99671 1.12113 7.79807 1.08704 7.58556C1.02951 7.22698 1.13682 6.85424 1.30704 6.63359C1.46791 6.46045 1.76166 6.33458 2.08071 6.33435ZM13.9182 6.33435C14.2374 6.33458 14.5321 6.4605 14.693 6.63359C14.8632 6.85424 14.9705 7.22698 14.913 7.58556C14.8789 7.79807 14.7925 7.99671 14.6492 8.17363C14.3792 7.54599 13.9321 6.97122 13.3427 6.47928C13.5075 6.38965 13.7074 6.33419 13.9182 6.33435ZM5.33074 7.40622C5.92065 7.40622 6.39845 7.88402 6.39845 8.47392C6.39845 9.06383 5.92065 9.54163 5.33074 9.54163C4.74084 9.54163 4.26304 9.06383 4.26304 8.47392C4.26304 7.88402 4.74084 7.40622 5.33074 7.40622ZM10.6693 7.40622C11.2592 7.40622 11.737 7.88402 11.737 8.47392C11.737 9.06383 11.2592 9.54163 10.6693 9.54163C10.0794 9.54163 9.60155 9.06383 9.60155 8.47392C9.60155 7.88402 10.0794 7.40622 10.6693 7.40622ZM10.7965 10.3601C10.4553 11.3568 9.36452 12.2109 8 12.2109C6.63548 12.2109 5.54467 11.3572 5.20354 10.4321C5.81746 10.9302 6.84047 11.286 8 11.286C9.15953 11.286 10.1825 10.9297 10.7965 10.3601Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className="text-white flex justify-center lg:text-xl text-sm ">
              Reddit
            </h1>
          </Link>
        </div>
        <div className="bg-red-600 p-8 w-full hover:bg-red-700 self-center">
          <Link
            href="https://www.youtube.com/@bytewizard42"
            className="flex text-white justify-center self-center"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ipc-icon ipc-icon--youtube self-center text-white size-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path d="M9.955 14.955v-5.91L15.182 12l-5.227 2.955zm11.627-7.769a2.505 2.505 0 0 0-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 8.746 2 12 2 12s0 3.254.418 4.814c.23.86.908 1.538 1.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.505 2.505 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814z"></path>
            </svg>
            <h1 className="text-white flex justify-center lg:text-xl text-sm ">
              Youtube
            </h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
