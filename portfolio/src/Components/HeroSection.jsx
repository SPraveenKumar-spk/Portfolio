import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaAngleRight, FaFileCode } from "react-icons/fa6";
import ResumeFile from "../assets/S__Praveen_Kumar_2025.pdf";
import Profile from "../assets/Profile.jpg";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6 sm:px-12 lg:px-24 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-gray-800 dark:to-gray-900 -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-relaxed leading-relaxed">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              S. Praveen Kumar
            </span>{" "}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Full Stack Developer
            </span>{" "}
            graduating in 2025, specializing in building scalable web
            applications and leveraging{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Machine Learning
            </span>{" "}
            to create intelligent, data-driven solutions. I thrive on solving
            complex problems, ensuring optimized performance, and delivering
            seamless user experiences.
          </p>

          <div className="flex gap-10">
            <a
              href={ResumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1 py-1 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              View Resume
              <FaFileCode className="mx-2 transform transition-transform duration-300 group-hover:-translate-y-1.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-1 py-1 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Contact Me
              <FaAngleRight className="mx-2 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-xl -z-10" />
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="hidden md:flex flex-col items-center justify-between w-12 h-64 md:h-80 lg:h-96 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
            <a
              href="https://github.com/SPraveenKumar-spk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-1/3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/spraveenkumar1501/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-1/3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/im_praveen_s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-1/3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
