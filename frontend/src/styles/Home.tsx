import React from "react";
import navimg from "../images/navimg.svg";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.svg";
import Edit from "../components/Edit";

const Home = () => {
  return (
    <div className="container">
      <div className="text-1">
        <h3>Work on Big idea Without the Busy Work</h3>
      </div>
      <div className="text-2">
        <p>
          From the small stuff to the big picture, Organizes work so teams are
          clear what to do
        </p>
      </div>
      <div className="container-img1">
        <img src={image1} alt="/" />
      </div>
      <div className="container-img2">
        <img src={image2} alt="/" />
      </div>
      <div className="nav-bar">
        <div className="nav-flex">
          <div className="logo">Eduate</div>
          <div className="nav-items-1">
            <a href="/Home">Home</a>
          </div>
          <div className="nav-items-2">
            <a href="/Add Employees">Add Employees </a>
          </div>
          <div className="nav-items-3">
            <a href="/View">View</a>
          </div>
          <div className="nav-img">
            <img src={navimg} alt="/" />
          </div>

          <div className="text-3">
            <h3>We don't just sell websites, we create websites that Sell</h3>
          </div>
          <div className="text-4">
            <p>
              You need to ask yourself how differentiating content should be,
              who created it, and how you know if it really makes a significant
              contribution to your website.
            </p>
          </div>
        </div>
        <div className="container-img3">
          <img src={image3} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Home;
