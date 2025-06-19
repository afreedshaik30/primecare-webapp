import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start text-[white] bg-[url('assets/img/home.jpg')] bg-cover bg-no-repeat bg-opacity-70">
      {/* Dark overlay for background dimming */}
      <div className="absolute inset-0 bg-[#36ae9a]/50"></div>
      {/* Responsive content */}
      <div className="relative w-full px-5 sm:px-10 lg:px-28 py-50 space-y-5">
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
          Expert Care. <br /> Modern Facilities. <br /> Personalized Attention.
        </p>
        <p>
          At PrimeCare Hospital, we are committed to providing exceptional
          medical care tailored to your individual needs. With a team of
          experienced doctors, state-of-the-art technology, and a patient-first
          approach, we ensure your health is always in trusted hands. From
          preventive screenings to advanced diagnostics, our goal is to keep you
          and your loved ones healthy and informed every step of the way.
        </p>

        <div className="relative z-0">
          <Link to="services" smooth={true} duration={500}>
            <Button title="See Services" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
