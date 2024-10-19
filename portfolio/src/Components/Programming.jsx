import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiFlask, SiMongodb, SiThealgorithms, SiExpress } from "react-icons/si";

function CircularProgressBar({ percentage }) {
  return (
    <div className="progress-circle" data-percentage={percentage}>
      <svg className="progress-circle-svg" viewBox="0 0 100 100">
        <circle className="circle-bg" cx="50" cy="50" r="45"></circle>
        <circle
          className="circle"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={`${percentage * 2.85}, 285`}
        ></circle>
      </svg>
      <div className="progress-text">
        <span>{percentage}%</span>
      </div>
    </div>
  );
}

const Programming = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="p-5 container" ref={ref}>
      <h2 className="text-info">Technical Skills</h2>
      <div className="row pt-5 pb-2 justify-content-center" ref={inViewRef}>
        {[
          {
            icon: <FaJava className="icon mb-3" />,
            title: "Java",
            percentage: 90,
          },
          {
            icon: <FaPython className="icon mb-3" />,
            title: "Python",
            percentage: 80,
          },
          {
            icon: (
              <>
                <FaHtml5 className="icon mb-3" />
                <FaCss3Alt className="icon mb-3" />
                <RiJavascriptFill className="icon mb-3" />
              </>
            ),
            title: "Web Development",
            percentage: 90,
          },
          {
            icon: (
              <>
                <SiMongodb className="icon mb-3" />
                <SiExpress className="icon mb-3" />
                <FaReact className="icon mb-3" />
                <FaNodeJs className="icon mb-3" />
              </>
            ),
            title: "MERN Stack Development",
            percentage: 90,
          },
          {
            icon: <GiArtificialIntelligence className="icon mb-3" />,
            title: "AI/ML",
            percentage: 80,
          },
          {
            icon: <SiFlask className="icon mb-3" />,
            title: "Flask",
            percentage: 85,
          },
          {
            icon: <SiThealgorithms className="icon mb-3" />,
            title: "Data Structures and Algorithms",
            percentage: 70,
          },
        ].map((skill, index) => (
          <div
            className={`col-md-4 mb-4 skill-card-wrapper ${
              inView ? "animate" : ""
            }`}
            key={index}
          >
            <div className="card skill-card text-center ">
              <div className="card-body">
                {skill.icon}
                <h5 className="card-title text-primary">{skill.title}</h5>
                <CircularProgressBar
                  percentage={inView ? skill.percentage : 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Programming;
