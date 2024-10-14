import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
{/*           <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
     <div class='sk-ww-linkedin-profile-post' data-embed-id='25475141'/><script wait src='https://widgets.sociablekit.com/linkedin-profile-posts/widget.js' async defer/>
  );
};

export default SectionWrapper(Tech, "");
