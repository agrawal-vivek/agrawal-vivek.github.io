import { Tooltip } from "@chakra-ui/react";
import React from "react";
import "../Style/social.css";

const Social = () => {
  return (
    <div id="social">
      <div id="git">
        {" "}
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
            <i class="fa-brands fa-github"></i>
          </a>
        </Tooltip>
      </div>
      <div id="link">
        {" "}
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
            {" "}
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Social;
