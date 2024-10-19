import { useInView } from "react-intersection-observer";
import TodoWebsite from "../assets/TodoWebsite.png";
import Image1 from "../assets/Anomaly.jpg";
import AgriSmart from "../assets/agrismart.png";
import ClassSync from "../assets/ClassSync.png";
import Amazon from "../assets/Amazon_clone.png";
import Transcribe from "../assets/Transcribe.png";

function ProjectCard({ title, imageUrl, link, animation, isVisible }) {
  return (
    <div
      className={`mt-4 card mb-3 rounded rounded-4 customShadow ${
        isVisible ? `${animation} visible` : "invisible"
      }`}
      style={{ height: "30rem", Width: "25rem" }}
    >
      <div className="card-header text-center text-success fs-5 fw-medium">
        {title}
      </div>
      <div className="card-body">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="card-img" src={imageUrl} alt={title} />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="container p-5">
      <h2 className="text-info">Projects</h2>
      <div className="row" ref={ref}>
        <div
          className="col-md-6 d-flex justify-content-center"
          title="Click to Visit"
        >
          <ProjectCard
            title="ClassSync"
            imageUrl={ClassSync}
            link="https://classsync-learn.vercel.app"
            animation="slideInFromBottom"
            isVisible={inView}
          />
        </div>
        <div
          className="col-md-6 d-flex justify-content-center"
          title="Click to Visit"
        >
          <ProjectCard
            title="AgriSmart"
            imageUrl={AgriSmart}
            link="https://agrismart-ai.vercel.app"
            animation="slideInFromLeft"
            isVisible={inView}
          />
        </div>
        <div
          className="col-md-6 d-flex justify-content-center"
          title="Click to Visit"
        >
          <ProjectCard
            title="Network Anomaly Detection"
            imageUrl={Image1}
            link="https://github.com/SPraveenKumar-spk/Network_Anomaly_Detection"
            animation="slideInFromTop"
            isVisible={inView}
          />
        </div>
        <div
          className="col-md-6 d-flex justify-content-center"
          title="Click to Visit"
        >
          <ProjectCard
            title="Transcribe"
            imageUrl={Transcribe}
            link="https://transcribeai.vercel.app"
            animation="slideInFromRight"
            isVisible={inView}
          />
        </div>
        <div
          className="col-md-6 d-flex justify-content-center"
          title="Click to Visit"
        >
          <ProjectCard
            title="To Do"
            imageUrl={TodoWebsite}
            link="https://todo-app-sand-six-17.vercel.app/"
            animation="slideInFromTop"
            isVisible={inView}
          />
        </div>
        <div
          className="col-md-6 d-flex justify-content-center"
          title="Click to Visit"
        >
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
}

export default Projects;
