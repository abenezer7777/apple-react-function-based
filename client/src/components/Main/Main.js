import React from "react";
import SectionOne from "../body/Section-one";
import SectionTwo from "../body/SectionTwo.js";
import SectionThree from "../body/SectionThree.js";
import SectionFour from "../body/SectionFour.js";
import SectionFifth from "../body/SectionFifth.js";
import SectionSix from "../body/SectionSix.js";
import Slideshow from "../body/Slideshow.js";
import YoutubeVideos from "../body/YoutubeVideos";

function Main() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFifth />
      <SectionSix />
      <Slideshow />
      <YoutubeVideos />
    </div>
  );
}

export default Main;
