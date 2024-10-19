import React from "react";
import profile from "../assets/profile2.png";

function Hero() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-light mb-4 mb-lg-0">
          <div className="p-3">
            <p
              className="text-animate fs-2 fw-bold "
              style={{ color: "#fd7e14" }}
            >
              I'm S.Praveen Kumar
            </p>
            <p className="fw-bold fs-4" style={{ color: "#147efd" }}>
              Web Developer and Machine Learning Engineer
            </p>
            <p className="fs-5">
              I am passionate about Machine learning, Web Development, and
              proficient in Python and Java. My coursework and personal projects
              have equipped me with a solid foundation in programming.
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-start">
          <img className="profile-img img-fluid" src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
