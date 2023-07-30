import React from "react";

function Testimonial(props) {
  return (
    <div className="text-white">
    <div className="max-sm:w-full max-sm:h-[7rem] h-[6rem] w-full "></div>
    <div className="relative flex flex-col justify-between items-center bg-[#1b1107] max-sm:w-full max-sm:px-[3rem] w-[60rem] px-[5rem] py-[2rem] max-sm:min-h-[43rem] min-h-[26rem]">
      <div className="overflow-hidden absolute max-sm:-top-[7rem] -top-[5.5rem] bg-white max-sm:border-[.8rem] border-[.7rem] border-white max-sm:h-[14rem] max-sm:w-[14rem] h-[11rem] w-[11rem] rounded-full">
        <img src={props.img} alt="" />
      </div>
      <p className="max-sm:mt-[8rem] mt-[6rem] text-[1rem text-center max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans">
        {props.review}
      </p>
      <div className="mt-[3rem] ">
        <h2 className="max-sm:text-[2.5rem] text-[2rem] ">{props.name}</h2>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
