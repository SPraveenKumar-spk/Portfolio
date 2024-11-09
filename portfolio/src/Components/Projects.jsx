import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { IoArrowRedo } from "react-icons/io5";
import TodoWebsite from "../assets/TodoWebsite.png";
import Image1 from "../assets/security.jpg";
import AgriSmart from "../assets/agrismart.png";
import ClassSync from "../assets/ClassSync.png";
import Amazon from "../assets/Amazon_clone.png";
import Transcribe from "../assets/Transcribe.png";
import ChatMeet from "../assets/ChatMeet.png";

function ProjectCard({ title, imageUrl, link, animation, isVisible }) {
  return (
    <div
      className={`mt-4 card mb-3 rounded rounded-4 customShadow ${
        isVisible ? `${animation} visible` : "invisible"
      }`}
    >
      <div className="card-header text-center text-success fs-5 fw-medium">
        {title}
      </div>
      <div className="card-body text-center">
        <div className="image-container position-relative">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="card-img" src={imageUrl} alt={title} />
            <div className="overlay">
              <p className="overlay-text bg-light rounded-2 text-info p-2">
                Click to view <IoArrowRedo size={30} />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

const Projects = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="container p-5" ref={ref}>
      <h2 className="text-info">Projects</h2>
      <div className="row justify-content-center" ref={inViewRef}>
        <div className="col-md-10">
          <ProjectCard
            title="ClassSync"
            imageUrl={ClassSync}
            link="https://classync.vercel.app"
            animation="slideInFromBottom"
            isVisible={inView}
          />
        </div>
        <div className="col-md-10">
          <ProjectCard
            title="AgriSmart"
            imageUrl={AgriSmart}
            link="https://agrismart-ai.vercel.app"
            animation="slideInFromLeft"
            isVisible={inView}
          />
        </div>
        <div className="col-md-10">
          <ProjectCard
            title="ChatMeet"
            imageUrl={ChatMeet}
            link="https://github.com/SPraveenKumar-spk/ChatMeet"
            animation="slideInFromLeft"
            isVisible={inView}
          />
        </div>
        <div className="col-md-10">
          <ProjectCard
            title="Network Anomaly Detection"
            imageUrl={Image1}
            link="https://github.com/SPraveenKumar-spk/Network_Anomaly_Detection"
            animation="slideInFromTop"
            isVisible={inView}
          />
        </div>
        <div className="col-md-10">
          <ProjectCard
            title="Transcribe"
            imageUrl={Transcribe}
            link="https://transcribeai.vercel.app"
            animation="slideInFromRight"
            isVisible={inView}
          />
        </div>
        <div className="col-md-10">
          <ProjectCard
            title="To Do"
            imageUrl={TodoWebsite}
            link="https://letsdo-app.vercel.app/"
            animation="slideInFromTop"
            isVisible={inView}
          />
        </div>
        <div className="col-md-10">
          <ProjectCard
            title="Amazon Clone"
            imageUrl={Amazon}
            link="https://github.com/SPraveenKumar-spk/Amazon_Clone"
            animation="slideInFromBottom"
            isVisible={inView}
          />
        </div>
      </div>
    </div>
  );
});

export default Projects;
