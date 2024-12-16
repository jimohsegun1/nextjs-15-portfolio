import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Review = () => {
  return (
    <div className="py-16 bg-[#050709] ">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[90%] sm:w-4/5 mx-auto mt-20 ">
      <Slider/>
      </div>
    </div>
  );
};

export default Review;
