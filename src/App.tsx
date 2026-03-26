import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
// import AboutUs from "./sections/AboutUs";
// import { FindUs } from "./sections/FindUs";
import { Home } from "./sections/Home";
import { Catalog } from "./sections/Catalog";
// import { Reviews } from "./sections/Reviews";

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <NavBar />
      <main>
        <Home />
        <Catalog />
        {/* <AboutUs />
        <Reviews />
        <FindUs /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
