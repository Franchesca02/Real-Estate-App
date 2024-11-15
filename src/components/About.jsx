import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:gap-20 md:items-start">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col md:items-start items-center mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">17+</p>
              <p>Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">23+</p>
              <p>Min. Sq. Fit Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">18+</p>
              <p>Projects Ongoing</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            Welcome to Real-Estate-Homes-by-Ify, where we turn your real estate
            dreams into reality. With years of expertise in the property market,
            we are dedicated to helping individuals, families, and businesses
            find their perfect spaces. Whether you’re buying, selling, or
            investing, we pride ourselves on delivering exceptional service
            tailored to your unique needs. Our team of passionate professionals
            understands that real estate is more than transactions—it’s about
            building futures and creating lasting memories. We prioritize
            transparency, integrity, and personalized care in every interaction,
            ensuring a seamless journey for our clients. At
            Real-Estate-Homes-by-Ify, we don’t just sell properties; we craft
            lifestyles. Let us guide you home.
          </p>

          <a
            href="#Contact"
            className="border border-blue-600 bg-transparent text-blue-500 hover:text-white px-8 py-2 rounded hover:bg-gray-900"
          >
            Learn More...
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
