import React from "react";
import Itemcard from "./Itemcard";
import items from "./ItemsApi";

function Itemsslider() {
  return (
    <>
      <div
        id="content"
        className=" flex max-sm:gap-[5rem] gap-[4rem] max-sm:px-0 px-[1rem] scroll-smooth overflow-scroll w-full max-sm:snap-mandatory max-sm:snap-x "
      >
        <Itemcard items={items} />
      </div>
      <div className="flex gap-[2rem]">
        <div className="flex justify-center items-center h-[4rem] w-[4rem] border-[.2rem] border-[#1b1107]"></div>
        <div className="flex justify-center items-center h-[4rem] w-[4rem] border-[.2rem] border-[#1b1107]"></div>
      </div>
    </>
  );
}

export default Itemsslider
// export default Itemsslider;
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
          // <div>
          //   <h3>3</h3>
          // </div>
          // <div>
          //   <h3>4</h3>
          // </div>
          // <div>
          //   <h3>5</h3>
          // </div>
          // <div>
          //   <h3>6</h3>
    //      </div>
   //     </Slider>
  //    </div>
  //  );
 // }
//}
