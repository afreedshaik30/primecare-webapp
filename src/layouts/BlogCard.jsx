const BlogCard = ({ img, headlines, description, url }) => {
  return (
    <div className="w-full sm:w-[45%] lg:w-[30%] p-4 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer hover:scale-105 bg-white">
      <img
        src={img}
        alt={headlines}
        className="h-48 w-full object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {headlines}
      </h2>
      <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
      <div className="flex justify-center mt-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded hover:bg-amber-500 transition-shadow">
            Know More..
          </button>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
