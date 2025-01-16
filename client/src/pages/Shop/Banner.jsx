import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#f5f2f2] to-[#be8e8e]">
      <div className="py-48 flex flex-col justify-center items-center text-center px-4 space-y-12">
        {/* Header Section */}
        <div className="md:w-3/4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Unleash Your Inner Geek:
            <span className="text-[#7a2525]">
              {" "}
              Shop Our Exclusive Tech-themed Merchandise!
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            We offer a curated selection of high-quality products ranging from
            clothing and accessories to home decor and office essentials. Each
            item is carefully chosen to meet our standards of quality,
            functionality, and style.
          </p>
        </div>

        {/* Button Section */}
        <div>
          <a
            className="inline-block bg-[#7a2525] hover:bg-[#833131] transition-colors px-8 py-3 font-semibold text-white text-lg rounded-full shadow-md hover:shadow-lg"
            href="/Shop"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
