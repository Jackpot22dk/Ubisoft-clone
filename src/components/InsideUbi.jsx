import React from "react";
import ubi1 from "../images/ubi-inside_ubisoft-forward2022-announce.jpg";
import ubi2 from "../images/ubi-inside_ubisoft-dev_conference_shapes_culture.jpg";
import ubi3 from "../images/UN_MeetAccessibilityTeam_480x480.jpg";

const InsideUbi = () => {
  return (
    <div>
      {" "}
      <section className="INSIDE UBISOFT py-9 sm:hidden md:hidden lg:block">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wider text-center pb-9 pt-9 ">
            INSIDE UBISOFT
          </h2>
          <div className="lg:grid lg:grid-cols-3 gap-11 px-11">
            <div className="z-10 col-start-1 row-start-1">
              <img className="lg:rounded-lg md:w-[100%]" src={ubi1} alt="" />
            </div>
            <p className="z-10 self-end h-20 col-start-1 row-start-1 p-5 text-lg font-bold text-white bg-black cursor-pointer md:align-middle bg-opacity-60 hover:underline">
              UBISOFT FORWARD 2022 RECAP
            </p>
            <div className="col-start-2 row-start-1">
              <img className="lg:rounded-lg md:w-[100%]" src={ubi2} alt="" />
            </div>
            <p className="z-10 self-end h-20 col-start-2 row-start-1 p-5 text-lg font-bold text-white bg-black cursor-pointer bg-opacity-60 hover:underline">
              HOW THE UBISOFT DEVELOPERS CONFERENCE HELP SHAPE UBISOFTS CULTURE
            </p>
            <div className="col-start-3 row-start-1">
              <img className="lg:rounded-lg md:w-[100%]" src={ubi3} alt="" />
            </div>
            <p className="z-10 self-end h-20 col-start-3 row-start-1 p-5 text-lg font-bold text-white bg-black cursor-pointer bg-opacity-60 hover:underline ">
              MEET UBISOFTS ACCESSIBILITY TEAM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsideUbi;
