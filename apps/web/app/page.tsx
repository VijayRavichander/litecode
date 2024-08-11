import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
