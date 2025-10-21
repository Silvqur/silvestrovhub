import Image from "next/image";
import RandomStars from "../components/starbg";

export default function HomePage() {
  return (
    <main className="min-h-screen space-bg">
      <RandomStars density={500} />
      <div className="max-w-[100rem] mx-auto z-50">
        <div className="z-40 pt-20">
          <div className="flex justify-center">
            <Image
              src={"/pic.jpg"}
              height={1000}
              width={1000}
              alt="???"
              className="max-w-[20rem] rounded-full z-40"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
