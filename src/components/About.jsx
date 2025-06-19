import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className="text-[#dd8036] text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className="text-justify lg:text-start">
          At PrimeCare Hospital, we are dedicated to delivering world-class
          healthcare with compassion and precision. Our team of highly skilled
          medical professionals works around the clock to ensure every patient
          receives personalized attention and expert treatment in a safe,
          comfortable environment.
        </p>

        <p className="text-justify lg:text-start">
          We offer a wide range of services including general medicine, surgery,
          diagnostics, emergency care, and specialized consultations. Whether
          it's a routine check-up or a complex procedure, our state-of-the-art
          facilities and patient-first approach ensure optimal outcomes.
        </p>

        <p className="text-justify lg:text-start">
          Your health is our mission. From the moment you walk through our
          doors, we are committed to guiding you through your recovery journey
          with care, transparency, and trust. Experience compassionate care
          backed by cutting-edge technology—only at PrimeCare Hospital.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
