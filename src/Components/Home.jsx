import React, { useEffect } from "react";
import "../Style/home.css";

import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import { Tooltip } from "@chakra-ui/react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/10cKa4fgfYDvAGmok7nieL_0fhvVd7Sl9/view?usp=sharing",
      "_blank"
    );
  };
  
  return (
    <section id="home">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="profile"
      >
        {/* image */}
        <img src="https://i.postimg.cc/8CWY2b0S/fotor-2023-3-18-20-41-0.png" alt="" />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        id="vivek"
      >
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          {" "}
          Hello
          <img
            width={40}
            src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
            alt=""
          />{" "}
          My Name Is{" "}
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          id="user-detail-name"
        >
          Vivek Agrawal
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          id="type"
        >
          <Typewriter
            deleteSpeed={90}
            typeSpeed={100}
            delaySpeed={2500}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Life Long Learner",
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="..."
          />
        </h1>

        <a href="./fw21_0457-Vivek_Agrawal_Resume.pdf" target="_blank" rel="noreferrer" download>
          <button
            id="resume"
            style={{
              borderRadius: "1rem",
              color: "white",
              padding: "15px 20px 15px 20px",
            }}
            onClick={handleClick}
          >
            Resume
          </button>
        </a>

        <div id="homesocial">
          <Tooltip
            label="Github"
            placement="bottom"
            borderRadius={"8px 10px "}
            padding={"10px"}
            color={"white"}
            bg="gray"
            fontSize="18px"
          >
            <a target="blank" href="https://github.com/agrawal-vivek">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>
          </Tooltip>

          <Tooltip
            label="Linkedin"
            placement="bottom"
            borderRadius={"8px 10px "}
            padding={"10px"}
            color={"white"}
            bg="gray"
            fontSize="18px"
          >
            <a
              target="blank"
              href="https://www.linkedin.com/in/vivek-agrawal-063373193/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
export default Home;
