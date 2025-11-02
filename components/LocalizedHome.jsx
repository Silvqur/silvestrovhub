"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  en: {
    hi: "Hi, I am",
    name: "Silver Mladshiy",
    profile: "Software Engineer · Founder",
    tagline:
      "Full-Stack Developer focused on scalable, high-performance web apps. I build with Next.js, TypeScript, and pragmatic design.",
    viewProjects: "View projects",
    contact: "Contact",
    aboutTitle: "About me",
    aboutText:
      "I'm a passionate Full-Stack Developer with 7+ years of experience in the Next.js ecosystem. I design and ship well-tested applications with a focus on performance, clean architecture, and delightful user experiences.",
    myKnowledge: "My knowledge",
    skills: [
      { title: "Next.js", desc: "App Router, SSR, SSG, Performance" },
      { title: "Python", desc: "APIs, automation & data" },
      { title: "System Architecture", desc: "Scalable systems design" },
      {
        title: "English language",
        desc: "I speak it really fluently and have a B1 certificate from Cambridge.",
      },
    ],
    coding: [
      {
        desc: "I mostly prefer coding in Python and JavaScript.",
        name: "Languages:",
      },
      {
        desc: "I have been coding since 2021 and continue to improve my skills.",
        name: "Description:",
      },
      {
        desc: "I wrote a simple website using Django, created dozens of Telegram bots using the Telebot library, and hundreds of small programs.",
        name: "Experience:",
      },
    ],
    sysarch: [
      {
        desc: "I learned the OSI model at the beginning of my journey. Then I tried setting up a router, and through these small steps, I've reached the point where I understand how most things work.",
        name: "The beginning:",
      },
      {
        desc: "IPv4, IPv6, TCP, UDP, HTTP, HTTPS, SMTP, FTP, SFTP, DHCP, DNS, BGP, SSH",
        name: "Protocols:",
      },
    ],
    projects: [
      {
        title: "Svoyazemlyanow",
        desc: "A website for a land company",
        logo: "/svz.png",
        href: "https://svoyazemlyanow.vercel.app",
      },
      {
        title: "Silvestrov Hub",
        desc: "An online portfolio website written by Silver Mladshiy",
        logo: "/favicon.png",
        href: "https://github.com/Silvqur/silvestrovhub",
      },
    ],
  },
  ru: {
    hi: "Привет, я",
    name: "Сильвер Младший",
    profile: "Инженер-программист · Основатель",
    tagline:
      "Full-Stack разработчик, ориентированный на масштабируемые высокопроизводительные веб-приложения. Работаю с Next.js, TypeScript и прагматичным дизайном.",
    viewProjects: "Посмотреть проекты",
    contact: "Связаться",
    aboutTitle: "Обо мне",
    aboutText:
      "Я увлечённый Full-Stack разработчик с более чем 7-летним опытом работы в экосистеме Next.js. Проектирую и выпускаю хорошо протестированные приложения с акцентом на производительность, чистую архитектуру и приятный пользовательский опыт.",
    myKnowledge: "Мои знания",
    skills: [
      { title: "Next.js", desc: "App Router, SSR, SSG, Производительность" },
      { title: "Python", desc: "API, автоматизация и данные" },
      {
        title: "Системная архитектура",
        desc: "Проектирование масштабируемых систем",
      },
      {
        title: "Английский язык",
        desc: "Говорю свободно, имею сертификат B1 от Cambridge.",
      },
    ],
    coding: [
      {
        desc: "Я предпочитаю программировать в основном на Python и JavaScript.",
        name: "Языки:",
      },
      {
        desc: "Я программирую с 2021 года и продолжаю совершенствовать свои навыки.",
        name: "Описание:",
      },
      {
        desc: "Написал простой сайт на Django, создал десятки Telegram-ботов с использованием библиотеки Telebot и сотни небольших программ.",
        name: "Опыт:",
      },
    ],
    sysarch: [
      {
        desc: "Я изучил модель OSI в начале своего пути. Затем попробовал настроить роутер, и через такие небольшие шаги дошёл до точки, где понимаю, как работает большинство вещей.",
        name: "Начало:",
      },
      {
        desc: "IPv4, IPv6, TCP, UDP, HTTP, HTTPS, SMTP, FTP, SFTP, DHCP, DNS, BGP, SSH",
        name: "Протоколы:",
      },
    ],
    projects: [
      {
        title: "Svoyazemlyanow",
        desc: "Сайт земельной компании",
        logo: "/svz.png",
        href: "https://svoyazemlyanow.vercel.app",
      },
      {
        title: "Silvestrov Hub",
        desc: "Сайт-портфолио написаный Silver Mladshiy",
        logo: "/favicon.png",
        href: "https://github.com/Silvqur/silvestrovhub",
      },
    ],
  },
};

function LanguageSwitcher({ lang, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        aria-pressed={lang === "en"}
        onClick={() => onChange("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          lang === "en" ? "bg-white/10 text-white" : "text-gray-300"
        }`}
      >
        EN
      </button>
      <button
        aria-pressed={lang === "ru"}
        onClick={() => onChange("ru")}
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          lang === "ru" ? "bg-white/10 text-white" : "text-gray-300"
        }`}
      >
        RU
      </button>
    </div>
  );
}

export default function LocalizedHome() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "ru") {
        setLang(saved);
        return;
      }
      const nav = (
        navigator.language ||
        navigator.userLanguage ||
        "en"
      ).toLowerCase();
      if (nav.startsWith("ru")) setLang("ru");
    } catch (e) {
      // localStorage may be unavailable in some environments
    }
  }, []);

  function handleChange(l) {
    setLang(l);
    try {
      localStorage.setItem("lang", l);
    } catch (e) {}
  }

  const t = translations[lang] || translations.en;

  return (
    <div className="max-w-6xl mx-auto z-50 px-4 sm:px-6 lg:px-0 py-4 pb-32">
      <div className="flex justify-end mb-6">
        <LanguageSwitcher lang={lang} onChange={handleChange} />
      </div>
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
        <div className="w-full lg:w-auto flex-none flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-sm text-gray-300 mb-2 text-nowrap">{t.profile}</p>
          <div className="relative inline-block rounded-full ring-1 ring-white/10 overflow-hidden mb-6">
            <Image
              src="/pic.jpg"
              height={600}
              width={600}
              alt={t.name}
              className="w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-full shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            {t.hi} <span className="text-star-gold">{t.name}</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl pb-7">
            {t.tagline}
          </p>
          <div className="flex sm:flex-row gap-3 sm:gap-x-7">
            <div>
              <Link
                href={"https://t.me/Silv_ML"}
                className="flex gap-x-2 items-center justify-center sm:justify-start bg-blue-600 shadow-lg shadow-blue-600 hover:bg-blue-700 hover:shadow-blue-700 p-3 rounded-2xl"
                target="blank"
              >
                <svg
                  className="t-sociallinks__svg size-7"
                  role="presentation"
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
                    fill="#ffffff"
                  ></path>
                </svg>

                <p className="text-white text-md self-center">Telegram</p>
              </Link>
            </div>
            <div>
              <Link
                href={"https://x.com/silver_mladshiy"}
                className="flex gap-x-2 items-center justify-center sm:justify-start bg-white shadow-lg shadow-white hover:bg-gray-300 hover:shadow-gray-300 p-3 rounded-2xl"
                target="blank"
              >
                <svg
                  width="251px"
                  height="256px"
                  viewBox="0 0 251 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="size-6"
                >
                  <g>
                    <path
                      d="M149.078767,108.398529 L242.331303,0 L220.233437,0 L139.262272,94.1209195 L74.5908396,0 L0,0 L97.7958952,142.3275 L0,256 L22.0991185,256 L107.606755,156.605109 L175.904525,256 L250.495364,256 L149.07334,108.398529 L149.078767,108.398529 Z M118.810995,143.581438 L108.902233,129.408828 L30.0617399,16.6358981 L64.0046968,16.6358981 L127.629893,107.647252 L137.538655,121.819862 L220.243874,240.120681 L186.300917,240.120681 L118.810995,143.586865 L118.810995,143.581438 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
                <p className="text-black self-center">Twitter</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <div className="bg-white/3 border border-white/6 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-2xl text-white font-bold mb-2">
              {t.aboutTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed">{t.aboutText}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {t.skills.map((s) => (
                <div
                  key={s.title}
                  className="p-3 rounded-md glass-panel"
                >
                  <p className="text-white font-semibold">{s.title}</p>
                  <p className="text-gray-300 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 sm:mt-20">
        <h2 className="text-3xl text-white font-bold mb-6">
          {lang === "ru" ? "Проекты" : "Projects"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((p, index) => (
            <article
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg glass-panel border border-white/6"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-white/6 flex items-center justify-center">
                {/* Use Next Image for optimization; files should be placed in /public/projects */}
                <Image
                  src={p.logo}
                  alt={`${p.title} logo`}
                  width={64}
                  height={64}
                  className="object-contain w-16 h-16"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{p.desc}</p>

                <div className="mt-3">
                  <Link
                    href={p.href}
                    className="text-star-gold text-sm font-medium hover:underline"
                    target="blank"
                  >
                    {lang === "ru" ? "Открыть" : "Open"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-12 sm:mt-16">
        <h2 className="text-3xl text-white font-bold mb-6">
          {lang === "ru" ? "Мои знания" : "My knowledge"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.map((k) => (
            <div
              key={k.title}
              className="p-5 rounded-xl w-full glass-panel border border-white/6"
            >
              <p className="text-xl text-white font-semibold">{k.title}</p>
              <p className="text-gray-300 mt-2 text-sm">{k.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-32">
          <h3 className="text-2xl text-white font-bold mb-4">
            {lang === "ru" ? "Мои навыки программирования" : "Codding skills"}
          </h3>
          <div className="space-y-3">
            {t.coding.map((itm, index) => (
              <div key={index} className="timeline-item glass-panel fade-up">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex gap-x-5">
                      <p className="text-white font-semibold self-center">
                        {itm.name}
                      </p>
                      <p className="text-gray-300 text-md mt-1 self-center">
                        {itm.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-2xl text-white font-bold mb-4">
            {lang === "ru" ? "Мои навыки системной арихитектуры" : "System Architect"}
          </h3>
          <div className="space-y-3">
            {t.sysarch.map((itm, index) => (
              <div key={index} className="timeline-item glass-panel fade-up">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex gap-x-5">
                      <p className="text-white font-semibold self-center">
                        {itm.name}
                      </p>
                      <p className="text-gray-300 text-md mt-1 self-center">
                        {itm.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
