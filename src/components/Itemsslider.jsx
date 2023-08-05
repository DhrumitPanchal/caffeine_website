import React, { Component } from "react";
import Itemcard from "./Itemcard";
import Slider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className="hidden" />;
}

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      carcoun: window.innerWidth >= 640 ? 3 : 1,
      cardots: window.innerWidth < 330 ? false : true,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ carcoun: window.innerWidth >= 640 ? 3 : 1 });
    this.setState({cardots: window.innerWidth < 330 ? false : true, });
  };

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: this.state.cardots,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.carcoun,
      slidesToScroll: this.state.carcoun,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <div className="">
          <div className="items-center flex">
            <Slider
              ref={(c) => (this.slider = c)}
              {...settings}
              className=" max-sm:w-[40rem] w-[90rem] "
            >
              <Itemcard
                name={"Espresso"}
                img={
                  "https://i.pinimg.com/564x/1b/76/ae/1b76aea6fbb3ab5a6a3e767bcd05a0be.jpg"
                }
              />
              <Itemcard
                name={"Cappuccino"}
                img={
                  "https://i.pinimg.com/236x/e0/a8/07/e0a807700ee67200cb583f68c52de4c8.jpg"
                }
              />
              <Itemcard
                name={"Latte"}
                img={
                  "https://i.pinimg.com/236x/58/a7/b6/58a7b6a4cdccfc9ee7629bdcf98e42ac.jpg"
                }
              />
              <Itemcard
                name={"Americano"}
                img={
                  "https://i.pinimg.com/236x/22/83/bb/2283bb1062a5e06c4e7b67c2e5da8d54.jpg"
                }
              />
              <Itemcard
                name={"Mocha"}
                img={
                  "https://i.pinimg.com/236x/93/aa/5d/93aa5d0cb7a25a6925f1bc4ee08bb4b7.jpg"
                }
              />
              <Itemcard
                name={"Macchiato"}
                img={
                  "https://i.pinimg.com/564x/1a/a8/70/1aa8700a1ce81ef13911afd26f611286.jpg"
                }
              />
              <Itemcard
                name={"Iced Coffee"}
                img={
                  "https://i.pinimg.com/236x/94/47/44/944744fafc801a5f2de37158c009a2c3.jpg"
                }
              />
              <Itemcard
                name={"Cold Brew"}
                img={
                  "https://i.pinimg.com/564x/bc/76/bc/bc76bc6e3b77eb9dac13cf6861006b29.jpg"
                }
              />
              <Itemcard
                name={"Affogato"}
                img={
                  "https://i.pinimg.com/564x/8c/cf/c0/8ccfc0308b70f75255b47c4abb28f2bb.jpg"
                }
              />
            </Slider>
          </div>
          <div className="flex justify-between my-auto mt-[6rem] mx-auto max-sm:mt-[6rem] max-sm:w-[15rem] w-[12rem]">
            <button
              className="button flex justify-center items-center max-sm:h-[5rem] max-sm:w-[5rem]  h-[4.5rem] w-[4.5rem] border-[.2rem] border-[#1b1107] bg-[#c5ad8c]"
              onClick={this.previous}
            >
              <FiArrowLeft className="text-[2.5rem]" />
            </button>
            <button
              className="button flex justify-center items-center max-sm:h-[5rem] max-sm:w-[5rem] h-[4.5rem] w-[4.5rem] border-[.2rem] bg-[#1b1107] border-[#1b1107] "
              onClick={this.next}
            >
              <FiArrowRight className="text-[2.5rem] text-white" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
