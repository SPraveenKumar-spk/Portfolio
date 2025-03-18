import ClassSync from "../assets/ClassSync.png";
import AgriSmart from "../assets/Agrismart.png";
import HealthCare from "../assets/HealthCare.png";
import Network from "../assets/Network.png";
import SafeRider from "../assets/SafeRider.png";
import ChatMeet from "../assets/Chatmeet.png";

const Projects = () => {
  const projectList = [
    {
      title: "ClassSync",
      description:
        "A platform to streamline classroom management with real-time collaboration features.",
      tech: ["ReactJS", "Tailwind CSS", "Express.JS", "Node.JS", "MongoDB"],
      image: ClassSync,
      link: "https://github.com/SPraveenKumar-spk/ClassSync",
    },
    {
      title: "SafeRider",
      description:
        "A safety-focused ride-sharing app with real-time tracking and emergency SOS.",
      tech: ["ReactJS", "Tailwind CSS", "Flask", "MySQL"],
      image: SafeRider,
      link: "https://github.com/SPraveenKumar-spk/SafeRider",
    },
    {
      title: "Network Anomaly Detection",
      description:
        "A cybersecurity tool using ML to detect unusual network activities.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matlplotlib", "numpy"],
      image: Network,
      link: "https://github.com/SPraveenKumar-spk/Network_Anomaly_Detection",
    },
    {
      title: "AgriSmart",
      description:
        "An IoT-based solution for precision agriculture with real-time data.",
      tech: [
        "ReactJS",
        "Python",
        "Flask",
        "Scikit-learn",
        "CNN",
        "Pandas",
        "Matlplotlib",
        "numpy",
      ],
      image: AgriSmart,
      link: "https://github.com/SPraveenKumar-spk/AgriSmart",
    },
    {
      title: "Healthcare",
      description:
        "A patient management system with appointment and telemedicine features.",
      tech: ["React JS", "Tailwind CSS", "Java Springboot", "MySQL"],
      image: HealthCare,
      link: "https://github.com/SPraveenKumar-spk/HealthCare",
    },
    {
      title: "ChatMeet",
      description:
        "A real-time chat app with video call support for virtual meetings.",
      tech: ["React JS", "Node.js", "Socket.io", "WebRTC"],
      image: ChatMeet,
      link: "https://github.com/SPraveenKumar-spk/ChatMeet",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 md:py-10 py-5 px-6 sm:px-12 lg:px-24 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my work—innovative solutions brought to life with code and
            creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline group-hover:scale-105 transition-transform duration-200"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
