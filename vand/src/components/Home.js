import React from "react";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h4 className="text">
          Learning to sign alone<br></br>can be hard
        </h4>
        <div className="sub">Don't learn alone, learn with us!</div>
        <h4 className="text">
          250,000-500,000 Americans<br></br> use sign language
        </h4>
        <div className="sub">Take the leap and make the difference</div>
        <h4 className="text">
          Studying ASL promotes better awareness<br></br>
          and sensitivity to the deaf<br></br>
          and hard of hearing community
        </h4>
        <div className="sub">
          As someone proficient in ASL, you will develop a strong appreciation
          for deaf culture{" "}
        </div>
      </div>
      <div className="col-md-5 col-sm-5 mt-3">
        <img
          className="float-right"
          src="social.svg"
          width="280px"
          height="280px"
          alt="guy"
        ></img>
      </div>
    </div>
  );
};

export default Home;
