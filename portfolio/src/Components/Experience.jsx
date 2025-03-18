const Experience = () => {
  const experienceList = [
    {
      role: "Machine Learning Intern",
      company: "IIT Delhi AIA FSM",
      duration: "May 2024 - July 2024",
      description:
        "Developed a real-time network anomaly detection model using the KDD Cup dataset, achieving 98% accuracy with Random Forest. Automated anomaly alerts via email, enabling prompt incident response and traffic analysis.",
      skills: ["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib"],
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Infosys",
      duration: "Jan 2024 - Mar 2024",
      description:
        "Built a real-time e-commerce intelligence tool using ARIMA for price prediction and LLMs for sentiment analysis, with Slack notifications for competitor insights on pricing, discounts, and sentiment.",
      skills: ["Python", "NLP", "E-commerce", "LLMs"],
    },
    {
      role: "Research Paper Presenter & Author",
      company: "I4AM 4.0 Conference",
      duration:
        "Published in Springer Advanced Manufacturing 4.0 Proceedings, 2024",
      description:
        "Presented a research paper on Network Communication Anomaly Detection using Machine Learning at the I4AM 4.0 Conference, published in Springer Advanced Manufacturing 4.0 Proceedings, highlighting AI-driven solutions for smart industries.",
      skills: ["Research", "AI in Industry 4.0", "Network Anomaly"],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900  px-6 sm:px-12 lg:px-24 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into my professional journey and contributions in AI, ML,
            and research.
          </p>
        </div>

        <div className="space-y-12">
          {experienceList.map((exp, index) => (
            <div
              key={exp.role}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6 group"
            >
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" />
              {index !== experienceList.length - 1 && (
                <div className="absolute left-0 top-1/2 h-full w-1 bg-blue-600 -z-10" />
              )}
              <div className="ml-8">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
