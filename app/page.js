import Image from "next/image";
import RandomStars from "../components/starbg";

export default function HomePage() {
  return (
    <main className="min-h-screen space-bg">
      <RandomStars density={500} />
      <div>
      </div>
    </main>
  );
}