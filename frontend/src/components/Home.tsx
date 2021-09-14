import React from "react";
import image1 from "../images/image__1.jpg";
import image2 from "../images/image__2.jpg";
import image3 from "../images/image__3.jpg";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <h3>
          Work on Big idea
          <br /> Without the Busy Work
        </h3>
        <p>
          From the small stuff to the big picture, Organizes work so teams are
          clear what to do
        </p>
        <img src={image1} alt="" />
      </div>
      <div className="home__container--left">
        <h2>We don't just sell websites, we create websites that Sell</h2>
        <img src={image2} alt="" />
        <p>
          You need to ask yourself how differentiating content should be, who
          created it, and how you know if it really makes a significant
          contribution to your website.
        </p>
      </div>
      <div className="h">
        <img src={image3} alt="" />
      </div>
    </>
  );
};

export default Home;
