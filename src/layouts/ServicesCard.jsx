const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-3 w-full lg:w-1/3 p-6 border border-gray-200 bg-white rounded-xl shadow-md cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 hover:border-[#36ae9a] hover:shadow-lg">
      {/* Icon with hover effect */}
      <div className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#36ae9a]">
        {icon}
      </div>

      {/* Title */}
      <h1 className="font-semibold text-xl text-gray-800">{title}</h1>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Learn More */}
      <h3 className="mt-2 text-backgroundColor font-medium hover:text-[#dd8036] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
