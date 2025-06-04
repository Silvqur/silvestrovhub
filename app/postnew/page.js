export default function PostNew() {
  const dataf = [
    { name: "Href to image", placeholder: "/2.jpg" },
    { name: "title", placeholder: "A new software" },
    { name: "First text", placeholder: "CodeGenius leverages advanced" },
    {
      name: "Second text",
      placeholder: "machine learning models to understand...",
    },
  ];
  const datas = [
    { name: "Href to image", placeholder: "/2.jpg" },
    { name: "First text", placeholder: "CodeGenius leverages advanced" },
    {
      name: "Second text",
      placeholder: "machine learning models to understand...",
    },
  ];

  return (
    <main className="bg-white">
      <div>
        <div className="px-2 mb-16">
          <h1 className="flex justify-center lg: text-4xl text-black  border-b-2 border-black">
            Post a short news
          </h1>
        </div>
        {dataf.map((itm, index) => (
          <div className="flex mt-5 mx-2" key={index}>
            <h1 className="text-nowrap self-center text-black mr-3 font-mono w-[15rem] lg:w-[10rem]">
              {itm.name}
            </h1>
            <input
              className="border-2 border-gray-300 p-2 w-full text-black"
              placeholder={itm.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="mt-20">
        <div className="px-2 mb-16">
          <h1 className="flex justify-center lg: text-4xl text-black  border-b-2 border-black">
            Post a big news
          </h1>
        </div>
        <div className="pb-96">
          {datas.map((itm, index) => (
            <div className="flex mt-5 mx-2 " key={index}>
              <h1 className="text-nowrap self-center text-black mr-3 font-mono w-[15rem] lg:w-[10rem]">
                {itm.name}
              </h1>
              <input
                className="border-2 border-gray-300 p-2 w-full text-black"
                placeholder={itm.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
