import React from "react";
import Navebar from "./Navebar";
import Itemsslider from "./Itemsslider";
import Testimonialslider from "./Testimonialslider";
import { FiArrowRight} from "react-icons/fi";
import { FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

function Landingpage() {
  return (
    <>
      <section id="home">
        <div className="relative flex justify-between flex-col max-sm:h-fit h-screen w-full bg-[#1b1107] max-sm:py-[3rem] max-sm:px-[4rem] py-[2rem] px-[7rem]">
          <Navebar />
          <div className="flex max-sm:flex-col max-sm:gap-[4rem] my-auto justify-between">
            <img
              className="max-sm:bottom-[3rem] order-1 h-[35rem] md:top-[6rem] right-[10rem]"
              src="/images/Group.png"
              alt=""
            />
            <div className="flex flex-col max-sm:gap-[1.5rem] gap-[1rem] max-sm:w-full max-sm:mt-[5rem] w-[35rem] text-white">
              <h1 className="max-sm:text-[11vw] max-sm:leading-[11.5vw] text-[5rem] leading-[5.5vw] font-fonts">
                Discover The <br /> Art Of Perfect <br />
                Coffee
              </h1>
              <p className="max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:w-[38rem] text-[1.3rem] w-[30rem] font-extralight font-sans ">
                Experience The Rich And Bold Flavors Of Our Exquisite Coffee
                Blends, Crafted To Awaken Your Senses And Start Your day Right.
              </p>
              <div className="flex max-sm:gap-[2.5rem] gap-[1.5rem] mt-[1rem]">
                <div
                  href="#"
                  className="flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] bg-white text-[#1b1107] border-[.1rem] border-white cursor-pointer"
                >
                  Order Now{" "}
                  <FiArrowRight className="text-[2rem] mt-[.2rem] ml-[.5rem]" />
                </div>
                <div
                  href="#"
                  className="flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] border-[.1rem] border-white cursor-pointer text-white"
                >
                  Explore More
                </div>
              </div>
              <div className="flex max-sm:w-full  max-sm:mt-[1.3rem] max-sm:gap-[4rem] mt-[2rem] gap-[2rem] text-white">
                <div className="text-center ">
                  <h1 className="max-sm:text-[4rem] text-[2.5rem] font-fonts ">
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
            <img
              className="max-sm:h-[42rem] h-[35rem]"
              src="/images/Group 2.png"
              alt=""
            />
            <div className="flex flex-col max-sm:items-center justify-center gap-[2rem]">
              <h2 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]">
                Coffee Heaven
              </h2>
              <p className="text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans">
              Welcome to Coffee Heaven! Indulge in our rich, aromatic brews sourced from the finest beans worldwide. Experience bliss with our delightful pastries and cozy ambiance, creating your perfect coffee haven.
              </p>
              <a href="#menu">
              <div className="text-[#e7d7bd] flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] bg-[#1b1107] cursor-pointer">
                View All
                <FiArrowRight className="max-sm:text-[2rem] max-sm:ml-[.8rem] text-[1.7rem] ml-[.5rem]" />{" "}
              </div>
              </a>
            </div>
          </div>

          <div className="flex max-sm:flex-col max-sm:gap-[5rem] gap-[20rem]">
            <img
              className="max-sm:h-[42rem] h-[35rem] max-sm:order-[0] order-1"
              src="/images/Group 3.png"
              alt=""
            />
            <div className="flex flex-col max-sm:items-center justify-center gap-[2rem]">
              <h2 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]">
                Jean's Coffee
              </h2>
              <p className="text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans">
              Coffee Jean's Coffee serves the finest brews, sourced from exotic beans worldwide. Indulge in aromatic delights, crafted with passion and expertise, offering a true coffee connoisseur's experience. Sip, savor, repeat!
              </p>
              <a href="#menu">
              <div className="text-[#e7d7bd] flex justify-center items-center max-sm:h-[4.5rem] max-sm:w-[15rem] max-sm:text-[1.5rem] h-[3.5rem] w-[11rem] text-[1.4rem] bg-[#1b1107] cursor-pointer">
                View All
                <FiArrowRight className="max-sm:text-[2rem] max-sm:ml-[.8rem] text-[1.7rem] ml-[.5rem]" />
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="menu">
        <div className="bg-[#ddb288] flex flex-col max-sm:gap-[10rem] gap-[5rem] max-sm:py-[7rem] py-[8rem] px-[6rem]">
          <div className="flex flex-col justify-center gap-[3rem] items-center">
            <h1 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]">
              Best Selling Items
            </h1>
            <p className="text-center text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans max-sm:w-full w-[60rem]">
            Welcome to our coffee shop! Indulge in our handcrafted coffee blends, expertly brewed to perfection. Pair it with delectable pastries, fluffy croissants, and delightful macarons, creating a delightful and memorable experience for your taste buds.
            </p>
            <Itemsslider />
            {/* <SimpleSlider/> */}
          </div>
        </div>
      </section>

      <section id="">
        <div className="bg-[#e7d7bd] flex flex-col max-sm:gap-[10rem] gap-[5rem] max-sm:py-[7rem] py-[8rem] px-[6rem]">
          <div className="flex flex-col justify-center max-sm:gap-[7rem] gap-[5rem] items-center">
            <h1 className="text-[#1b1107] font-fonts max-sm:text-[10.5vw] max-sm:leading-[11vw] max-sm:text-center text-[4.5rem] leading-[5vw]">
              What Our Customer Says
            </h1>
            <Testimonialslider />
          </div>
        </div>
      </section>

      <section id="contect">
        <div className="bg-[#ddb288] flex flex-col max-sm:gap-[10rem] gap-[5rem] max-sm:py-[7rem] py-[8rem] px-[6rem] w-full">
          <div className=" flex max-sm:flex-col flow-row justify-center max-sm:gap-[5rem] gap-[12rem] items-center">
            <h1 className="w-[65rem] max-sm:w-full text-[#1b1107] font-fonts max-sm:text-[8vw] max-sm:leading-[8.5vw] max-sm:text-center text-[3.5rem] leading-[4vw]">
              Stay Up To Date On <br />
              All News And Offers.
            </h1>
            <div className="flex flex-col gap-[2rem]">
              <p className=" text-[#1b1107] max-sm:text-[1.7rem] max-sm:leading-[2.3rem] max-sm:text-center text-[1.3rem] font-sans ">
                Be The First To Know About New Collections,Spacial Event,And
                What's Going On At Kitchen
              </p>
              <form action="" className="flex w-full max-sm:h-[5rem] h-[4rem]">
                <input
                  type="text"
                  className="bg-[#bd9d7e] max-sm:w-full max-sm:text-[1.5rem] w-[75%]  text-[#1b1107] p-[1rem] text-[1.3rem] placeholder:text-[#1b1107]"
                  placeholder="Enter Your Email Addres"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#1b1107] h-full max-sm:w-[20%] w-[15%] flex justify-center items-center"
                >
                  <FiArrowRight className="text-white text-[2.5rem]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="">
        <div className="bg-[#1a1106] flex max-sm:flex-col max-sm:py-[1rem] max-sm:px-[0] px-[7rem]  text-white">
          <div className="flex flex-col gap-[2rem] max-sm:w-full w-[42%] max-sm:px-[6rem] py-[6rem] px-[1.5rem] max-sm:border-x-[0] max-sm:border-b-[.1rem] border-x-[.1rem] border-[#ddb288]">
            <div className="w-full h-[20rem] flex justify-center items-center bg-[#c6ad8f] border-white border-[.4rem] text-[5.5rem] font-fonts text-[#1a1106]">
              Caffeine
            </div>
            <h2 className="text-[2rem] max-sm:text-center font-light font-sans">
              Enjoy Better And Better Quality Coffee With Caffeine.
            </h2>
          </div>
          <div className="flex flex-col gap-[2rem] max-sm:w-full w-[35%] max-sm:px-[6rem] py-[6rem] px-[1.5rem] max-sm:text-[2.5rem] text-[2rem]">
            <h2 className="max-sm:text-[5rem] text-[2.7rem] font-fonts max-sm:text-center">
              Contect Us
            </h2>
            <div className="max-sm:text-center font-light font-sans">
              <h2>Caffeine@Gmail.com</h2>
              <h2>
                Call Us: <span className="">(321) 512 - 57420 </span>
              </h2>
              <h2>
                Text Us: <span className="">(321) 512 - 57420 </span>
              </h2>
            </div>
            <h2 className="mt-[1rem] max-sm:text-center font-light font-sans">
              39 Brookly Street Convington,<br className="max-sm:block hidden"/> VA 244426
            </h2>
          </div>
          <div className="flex flex-col gap-[3rem] max-sm:w-full w-[30%] max-sm:px-[7.5rem] py-[6rem] px-[1.5rem] max-sm:border-x-[0] max-sm:border-t-[.1rem] border-x-[.1rem] border-[#ddb288]">
            <div className="w-full max-sm:h-[20rem] h-[12rem] flex justify-center items-center  border-[#ddb288] border-[.2rem] text-[5.5rem] font-fonts text-[#1a1106]">
              <iframe
                src="https://www.youtube.com//embed/TeCofkfVHqo"
                title="YouTube video player"
                frameBorder={2}
                className="w-full h-full object-contain"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={false}
              />
            </div>

            <di className='flex flex-col max-sm:gap-[2rem] gap-[1rem]'>
              <h2 className="text-[2.5rem] max-sm:text-[4rem] font-fonts max-sm:text-center">
                Follow Us
              </h2>
              <div>
                <di className='flex max-sm:justify-center max-sm:gap-[2rem] gap-[1.5rem] text-[#1a1106] max-sm:text-[3.5rem] text-[1.8rem]'>
                  <a href="https://instagram.com/dhrumit__789?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank">
                  <div className="max-sm:h-[5rem] max-sm:w-[5rem] h-[3rem] w-[3rem] rounded-full flex justify-center items-center bg-[#ddb288] ">
                  <FaInstagram/>
                  </div>
                    </a>
                    <a href="https://www.facebook.com/dhrumitpanchal789?mibextid=ZbWKwL" target="_blank">
                    <div className="max-sm:h-[5rem] max-sm:w-[5rem] h-[3rem] w-[3rem] rounded-full flex justify-center items-center bg-[#ddb288] ">
                  <FaFacebook/>
                  </div>
                    </a>
                    <a href="https://twitter.com/DhrumitPanchal6?t=TylLfdpvzi7sJDDtoJbwLg&s=09" target="_blank">
                    <div className="max-sm:h-[5rem] max-sm:w-[5rem] h-[3rem] w-[3rem] rounded-full flex justify-center items-center bg-[#ddb288] ">
                  <FaTwitter/>
                  </div>
                    </a>
                  
                  {/* <a href="#"  onclick="location.href='mailto:dhrumitpanchal789@gamicom'">
                  <div className="max-sm:h-[5rem] max-sm:w-[5rem] h-[3rem] w-[3rem] rounded-full flex justify-center items-center bg-[#ddb288] ">
                  <BsEnvelopeFill/>
                  </div>
                  </a> */}
                 
                  
                </di>
              </div>
            </di>
          </div>
        </div>
        <div className="bg-[#1a1106] flex justify-center max-sm:py-[2rem] py-[2rem] px-[7rem] text-white border-t-[.1rem] border-[#ddb288]">
          <h2 className="text-[1.5rem] font-light font-sans">@Devloped By Dhrumit</h2>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
