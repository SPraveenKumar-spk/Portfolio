import {
  FaLaptopCode,
  FaCloud,
  FaCode,
  FaBrain,
  FaPuzzlePiece,
} from "react-icons/fa";
import { FaAngleRight, FaBookOpen } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-gray-900 py-10  px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-gray-800 dark:to-gray-900 -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 bg-clip-text">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              S. Praveen Kumar
            </span>
            , a Computer Science enthusiast graduating in 2025, passionate about
            building innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              As a fresher with a strong foundation in Computer Science, I
              specialize in full-stack development using the MERN stack, along
              with Java and Python. I'm skilled in Data Structures & Algorithms,
              Machine Learning, MySQL, AWS, and version control with Git/GitHub.
              My goal is to create efficient, scalable, and user-focused
              applications that solve real-world problems.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center px-2 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                See My Projects
                <FaAngleRight className="mx-2 transform transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-2 py-2 md:px-6 md:py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLaptopCode className="text-indigo-500 text-4xl" />,
                title: "Full-Stack Dev",
                desc: "Building web apps with MERN Stack (MongoDB, Express.js, React, Node.js).",
              },
              {
                icon: <FaCode className="text-indigo-500 text-4xl" />,
                title: "Programming",
                desc: "Skilled in Java and Python, with a strong ability to develop efficient and optimized solutions.",
              },

              {
                icon: <FaPuzzlePiece className="text-indigo-500 text-4xl" />,
                title: "DSA Problem Solving",
                desc: "Proficient in solving complex problems with optimized algorithms.",
              },
              {
                icon: <FaBrain className="text-indigo-500 text-4xl" />,
                title: "Machine Learning",
                desc: "Experienced in building ML models with Python and TensorFlow.",
              },
              {
                icon: <FaCloud className="text-indigo-500 text-4xl" />,
                title: "Cloud & Tools",
                desc: "Hands-on with AWS, MySQL, and Git/GitHub for development.",
              },
              {
                icon: <FaBookOpen className="text-indigo-500 text-4xl" />,
                title: "Course work",
                desc: "Knowledge of Computer Networks, Database Mangament and Operating System",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500 rounded-b-md transition-all duration-300 group-hover:w-24" />
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Coding Profiles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                platform: "LeetCode",
                link: "https://leetcode.com/u/SPraveen_15/",
                desc: "Actively solving DSA problems to sharpen my skills.",
              },
              {
                platform: "CodeChef",
                link: "https://www.codechef.com/users/spraveen15",
                desc: "Participating in contests to enhance my coding expertise.",
              },
            ].map((profile) => (
              <a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {profile.platform}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {profile.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 grid  grid-cols-3  gap-8 text-center">
          {[
            { value: "2025", label: "Graduation Year" },
            { value: "5+", label: "Projects Completed" },
            { value: "250+", label: "DSA Problems Solved" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
