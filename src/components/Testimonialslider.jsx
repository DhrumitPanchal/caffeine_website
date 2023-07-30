import React, { Component } from "react";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import { FiArrowRight,FiArrowLeft } from "react-icons/fi";


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="hidden"/>
  )
}


export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

 
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
      <div className="md:relative w-full md:flex items-center justify-center">
      <div className="items-center">
        <Slider ref={c => (this.slider = c)} {...settings} className="  max-sm:w-full w-[60rem]">
          <Testimonial
            key={1}
            img={"https://i.pinimg.com/564x/01/8e/73/018e73b515b25cbba0efc02463cb5627.jpg"}
            name={"Benjamin Alexander"}
            review={
              "I absolutely love this café! The way they seal each coffee item with my name just adds a personal touch to the whole experience. Not only is the coffee delicious and always made to perfection, but the staff is also friendly and remembers my name. It's like having my personalized coffee spot. Highly recommended!"
            }
          />
          <Testimonial
            key={2}
            img={"https://i.pinimg.com/236x/af/17/9a/af179a84bb429284e4f9e15485d81548.jpg"}
            name={"Olivia Grace"}
            review={
"This café has a unique concept of sealing coffee items with customer names, and it's a fantastic idea! The coffee itself is rich and flavorful, and the personalized touch makes it feel special. I only wish they had a few more varieties of beans to choose from. Nonetheless, it's a cozy place to enjoy a cup of joe."            }
          />
          <Testimonial
            key={3}
            img={"https://i.pinimg.com/236x/86/c6/b0/86c6b0974e503798fb2fcc3c012489c0.jpg"}
            name={"Sophia Roberts"}
            review={
"The café's ambiance is cozy and inviting, and their coffee never disappoints. I love how they seal their cups with customers' names, making it feel like they genuinely care about each visitor. The baristas are skilled and friendly, and the pastries they offer complement the coffee perfectly. A charming spot to spend some quality time."            }
          />
          <Testimonial
            key={4}
            img={"https://i.pinimg.com/236x/8e/87/65/8e87651ecc0cf5952db1d0a18fcc411d.jpg"}
            name={"Matthew Jameson"}
            review={
"What a delightful café experience! The moment they hand you a cup with your name on it, you can't help but smile. The coffee is always top-notch, and they have excellent options for milk alternatives, which is a huge plus for me. Whether you're working or catching up with friends, this café provides a warm and welcoming atmosphere."            }
          />
          <Testimonial
            key={5}
            img={"https://i.pinimg.com/236x/72/37/23/723723a0003949505ac36c79888a4deb.jpg"}
            name={"Christopher Lee"}
            review={
"This café has quickly become my favorite coffee spot. The attention to detail, such as sealing the coffee cups with customers' names, truly sets them apart. The baristas are skilled and passionate about their craft, and it reflects in the quality of the coffee they serve. I appreciate the effort they put into creating a personalized experience for their patrons. Can't wait to visit again!"            }
          />
        </Slider>
      </div>
      <div className="md:absolute flex justify-between my-auto mt-[4rem] mx-auto max-sm:mt-[6rem] max-sm:w-[15rem] w-[75rem]">
       <button
         className="button flex justify-center items-center max-sm:h-[5rem] max-sm:w-[5rem]  h-[4.5rem] w-[4.5rem] border-[.1rem] bg-[rgba(194,174,146,255)] border-[#1b1107] "
         onClick={this.previous}
       >
        <FiArrowLeft className="text-[2.5rem]"/>
       </button>
       <button 
         className="button flex justify-center items-center max-sm:h-[5rem] max-sm:w-[5rem] h-[4.5rem] w-[4.5rem] border-[.1rem] bg-[rgba(194,174,146,255)] border-[#1b1107] "
         onClick={this.next}>
        <FiArrowRight className="text-[2.5rem]"/>
       </button>
     </div>
     </div>
     </>
    );
  }
}
