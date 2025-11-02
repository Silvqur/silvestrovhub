import RandomStars from "../components/starbg";
import LocalizedHome from "../components/LocalizedHome";

export default function HomePage() {
  return (
    <main className="min-h-screen space-bg relative overflow-hidden">
      <RandomStars density={350} />
      <LocalizedHome />
    </main>
  );
}
