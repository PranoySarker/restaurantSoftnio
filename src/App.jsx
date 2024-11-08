import "./App.css";
import Header from "./components/Header";
import pizzaBG from "./assets/pizza_bg.png";
import Hero from "./components/Hero";
import MidSection from "./components/MidSection";
import Popular from "./components/Popular";
import BookTable from "./components/BookTable";
import CustomerTestimonial from "./components/CustomerTestimonial";
import Footer from "./components/Footer";
import AboutTab from "./components/AboutTab";

function App() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <div
        className="absolute top-0 w-full h-content bg-repeat pt-20 md:pt-10"
        style={{ backgroundImage: `url(${pizzaBG})` }}
      >
        <div className="absolute top-0 inset-0 bg-gradient-to-r from-[#BD1F17] via-[#A61D13] to-[#8E1B0F] opacity-75"></div>

        <Hero />
      </div>

      <div className="mt-[160%] md:mt-[50%]">
        <MidSection />
        <Popular />
        <BookTable />
        <CustomerTestimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
