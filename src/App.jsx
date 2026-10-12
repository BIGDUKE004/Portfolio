import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Flow from "./components/Flow.jsx";
import Work from "./components/Work.jsx";
import Stack from "./components/Stack.jsx";
import Principles from "./components/Principles.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Stack />
        <Flow />
        <Principles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
