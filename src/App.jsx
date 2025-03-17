import Navbar  from "./components/navbar";
import Hero from "./pages/Hero";
import Tabs from "./pages/Tabs";
import About from "./pages/About";
import Stacks from "./pages/Stacks";
import Spacing from "./components/Spacing";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
    <Hero/>
    <About/>

    <Gallery/>
    <Stacks/>
    <Spacing/>
    <Footer></Footer>
    </div>
  );
}
