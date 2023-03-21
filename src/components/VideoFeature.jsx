import React from "react";
import vpromo1 from "../images/feat_videos-acmirage-trailer-ncsa.jpg";
import vpromo2 from "../images/feat_videos-sparks_of_hope-launch_trailer-ncsa.jpg";
import vpromo3 from "../images/feat_videos-skull_and_bones-trailer-ncsa.jpg";
import playbtn from "../images/VJZAU2PvHlVoa.svg";
import triangle from "../images/Bf62CxwEIWF3o.png";
import showcase from "../images/UC_PRODUCT_VISUAL_V2.png";

const VideoFeature = () => {
  return (
    <div>
      {" "}
      <section className="VIDEOFEATURES lg:bg-[#f0f3f4] pt-9 pb-16 md:bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-center pb-9 pt-9 ">
            Featured Videos
          </h2>
          <div className="lg:grid lg:grid-cols-3 gap-11 px-11 md:flex md:flex-col">
            <div className="z-10 col-start-1 row-start-1">
              <img className="rounded-lg " src={vpromo1} alt="" />
            </div>
            <img
              className="z-10 h-20 row-start-1 p-5 lg:self-center lg:col-start-1 justify-self-center md:hidden lg:block sm:hidden"
              src={playbtn}
              alt=""
            />
            <div className="col-start-2 row-start-1">
              <img className="rounded-lg" src={vpromo2} alt="" />
            </div>
            <img
              className="z-10 h-20 row-start-1 p-5 lg:self-center lg:col-start-2 justify-self-center md:hidden lg:block sm:hidden"
              src={playbtn}
              alt=""
            />
            <div className="col-start-3 row-start-1">
              <img className="rounded-lg " src={vpromo3} alt="" />
            </div>
            <img
              className="z-10 h-20 p-5 lg:self-center lg:col-start-3 lg:row-start-1 justify-self-center md:hidden lg:block sm:hidden"
              src={playbtn}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="Ubisoft connect bg-[#091225]">
        <div className="flex justify-center">
          <img className="h-7" src={triangle} alt="" />
        </div>
        <div className="flex justify-center gap-24 pt-1">
          <div className="text-center">
            <img className="h-60" src={showcase} alt="" />
          </div>
          <div className="self-center text-white ">
            <h3 className="pb-3 text-5xl font-semibold ">Ubisoft Connect</h3>
            <p className="pb-5 text-3xl">
              Join the Ubisoft Community! Console | PC | Mobile | Web
            </p>
            <button className=" flex px-20 py-2 font-bold text-white bg-[#006ef5] rounded-full hover:text-[#006ef5] hover:bg-white hover:transition hover:duration-500 hover:border-2 hover:border-[#006ef5]">
              DISCOVER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoFeature;
