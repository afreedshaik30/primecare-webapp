import BlogCard from "../layouts/BlogCard";

import img1 from "../assets/blog/blog1.jpg";
import img2 from "../assets/blog/blog2.jpg";
import img3 from "../assets/blog/blog3.jpg";
import img4 from "../assets/blog/blog4.jpg";
import img5 from "../assets/blog/blog5.jpg";
import img6 from "../assets/blog/blog6.jpg";

const blogData = [
  {
    img: img1,
    headlines: "Unraveling the Mysteries of Sleep",
    description: "Explore how sleep impacts your physical and mental health.",
    url: "https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips",
  },
  {
    img: img2,
    headlines: "The Heart-Healthy Diet",
    description:
      "Learn how your diet can strengthen your cardiovascular health.",
    url: "https://www.mayoclinic.org/diseases-conditions/heart-disease/in-depth/heart-healthy-diet/art-20047702",
  },
  {
    img: img3,
    headlines: "Skin Health 101",
    description: "Get essential tips to maintain glowing, healthy skin daily.",
    url: "https://www.everydayhealth.com/wellness/healthy-skin/",
  },
  {
    img: img4,
    headlines: "Decoding Blood Test Reports",
    description: "Understand your blood test results and what they mean.",
    url: "https://medlineplus.gov/lab-tests/how-to-understand-your-lab-results/",
  },
  {
    img: img5,
    headlines: "Why Regular Lab Tests Matter",
    description: "Discover how lab tests help in early detection of diseases.",
    url: "https://medlineplus.gov/lab-tests/what-you-need-to-know-about-blood-testing/",
  },
  {
    img: img6,
    headlines: "Understanding Pediatric Vaccinations",
    description:
      "Stay informed about essential vaccines for your child's health.",
    url: "https://kidshealth.org/en/parents/vaccine.html",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-[#dd8036]">
            Latest Post
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-600">
            Stay informed with our latest health tips and medical news.
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="my-10">
        <div className="flex flex-wrap justify-center gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              img={blog.img}
              headlines={blog.headlines}
              description={blog.description}
              url={blog.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
