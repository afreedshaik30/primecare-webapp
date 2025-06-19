import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { GiPill } from "react-icons/gi";
import ServicesCard from "../layouts/ServicesCard";

const servicesData = [
  {
    icon: <MdHealthAndSafety size={35} className="text-backgroundColor" />,
    title: "Health Check",
    description:
      "Routine checkups and preventive screenings to keep you healthy.",
  },
  {
    icon: <RiMicroscopeLine size={35} className="text-backgroundColor" />,
    title: "Lab Test",
    description: "Advanced diagnostic tests performed with accuracy and speed.",
  },
  {
    icon: <GiPill size={35} className="text-backgroundColor" />,
    title: "Pharmacy",
    description: "On-site pharmacy providing trusted medications and support.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      {/* Section Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-[#dd8036]">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-700">
            We offer a wide range of quality healthcare services for your
            wellbeing.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
