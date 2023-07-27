import React from "react";
import Navebar from "./Navebar";
import Itemsslider from "./Itemsslider";
import { HiMiniArrowRight } from "react-icons/hi2";

function Landingpage() {
  return (
    <>
    <section id="home">
      <div className="relative flex justify-between flex-col max-sm:h-fit h-screen w-full bg-[#1b1107] max-sm:py-[3rem] py-[2rem] px-[7rem]">
        <Navebar />
        <div className="flex max-sm:flex-col max-sm:gap-[4rem] my-auto justify-between">
          <img
            className="max-sm:bottom-[3rem] order-1 h-[35rem] md:top-[6rem] right-[10rem]"
            src="/images/Group.png"
            alt=""
          />
          <div className="flex z-20 flex-col max-sm:gap-[1.5rem] gap-[1rem] max-sm:w-full max-sm:mt-[5rem] w-[35rem] ">
            <h1 className="max-sm:text-[11vw] max-sm:leading-[11.5vw] text-[5rem] leading-[5.5vw] font-fonts ">
              Discover The <br /> Art Of Perfect <br />
              Coffee
            </h1>
            <p className="max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:w-[38rem] text-[1.3rem] w-[30rem] font-extralight font-sans">
              Experience The Rich And Bold Flavors Of Our Exquisite Coffee
              Blends, Crafted To Awaken Your Senses And Start Your day Right.
            </p>
            <div className="flex max-sm:gap-[2.5rem] gap-[1.5rem] mt-[1rem]">
              <div
                href="#"
                className="flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] bg-white text-[#1b1107] border-[.1rem] border-white cursor-pointer"
              >
                Order Now{" "}
                <HiMiniArrowRight className="text-[2rem]"
                 value={{ color: '#1b1107'}} />
              </div>
              <div
                href="#"
                className="flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] border-[.1rem] border-white cursor-pointer"
              >
                Explore More
              </div>
            </div>
            <div className="flex max-sm:w-full  max-sm:mt-[1.3rem] max-sm:gap-[4rem] mt-[2rem] gap-[2rem]">
              <div className="text-center">
                <h1 className="max-sm:text-[4rem] text-[2.5rem] font-fonts">
                  50+
                </h1>
                <p className="max-sm:text-[1.4rem] text-[1rem]">
                  ITEM OF COFFEE
                </p>
              </div>
              <div className="text-center">
                <h1 className="max-sm:text-[4rem] text-[2.5rem] font-fonts ">
                  20+
                </h1>
                <p className="max-sm:text-[1.4rem] text-[1rem]">
                  Order Running
                </p>
              </div>
              <div className="text-center">
                <h1 className="max-sm:text-[4rem] text-[2.5rem] font-fonts">
                  2K+
                </h1>
                <p className="max-sm:text-[1.4rem]  text-[1rem]">
                  Happy Coustomer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
       <div className="flex flex-col max-sm:gap-[10rem] gap-[5rem] bg-[#e7d7bd] max-sm:py-[7rem] py-[8rem] px-[7rem]">
        <div className="flex max-sm:flex-col max-sm:gap-[5rem] gap-[20rem]">
          <img className="max-sm:h-[42rem] h-[35rem]" src="/images/116519736b4e21508b7b4e35b0edd6bb.jpg" alt="" />
           <div className="flex flex-col max-sm:items-center justify-center gap-[2rem]">
             <h2 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]" >Coffee Heaven</h2>
             <p className="text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex maxime ipsum quasi aut non vel, a aspernatur eligendi odit facere nulla laboriosam quam quae porro officia dicta praesentium voluptatibus!</p>
             <div className="text-[#e7d7bd] flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] bg-[#1b1107] cursor-pointer">View All</div>
           </div>
          </div>

          <div className="flex max-sm:flex-col max-sm:gap-[5rem] gap-[20rem]">
          <img className="max-sm:h-[42rem] h-[35rem] max-sm:order-[0] order-1" src="/images/116519736b4e21508b7b4e35b0edd6bb.jpg" alt="" />
           <div className="flex flex-col max-sm:items-center justify-center gap-[2rem]">
             <h2 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]" >Jean's Coffee</h2>
             <p className="text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex maxime ipsum quasi aut non vel, a aspernatur eligendi odit facere nulla laboriosam quam quae porro officia dicta praesentium voluptatibus!</p>
             <div className="text-[#e7d7bd] flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] bg-[#1b1107] cursor-pointer">View All</div>
           </div>
          </div>
       </div>
    </section>

    <section id="menu">
      <div className="bg-[#ddb288] flex flex-col max-sm:gap-[10rem] gap-[5rem] max-sm:py-[7rem] py-[8rem] px-[7rem]">
        <div className="flex flex-col justify-center gap-[3rem] items-center">
          <h1 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]">Best Selling Items</h1>
          <p className="text-center text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans max-sm:w-full w-[60rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, eligendi quae incidunt commodi sequi porro molestiae. Quas, quia molestiae hic impedit et necessitatibus illo ullam quam explicabo deserunt harum sunt?</p>
          <Itemsslider/>
        </div>
      </div>
    </section>
    </>
  );
}

export default Landingpage;
