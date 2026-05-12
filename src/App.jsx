import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

