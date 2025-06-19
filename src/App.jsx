import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctor from "./components/Doctor";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} theme="colored" />

      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="docs">
          <Doctor />
        </div>
        <div id="blog">
          <Blogs />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
