import React from "react";
import gridimg from "../images/Season_11.jpg";
import laby from "../images/UN_AOCD_thumbnail960x540.jpg";
import rabbids from "../images/MRSH_DLC1-TowerOfDoom_960x540.jpg";
import dance from "../images/JD23_KeyArt_S1_FINAL.jpg";

const News = () => {
  return (
    <div>
      {" "}
      <section className="px-11 news">
        <div>
          <h2 className="pt-5 pb-5 text-3xl font-bold tracking-wider text-center ">
            LATEST NEWS
          </h2>
          <div className="lg:grid lg:grid-cols-4 lg:grid-rows-3 md:flex md:flex-col gap-9">
            <div className="col-span-2 row-span-2">
              <img src={gridimg} alt="" />
              <p className="pb-2">March 3, 2023</p>
              <h3 className="text-lg font-bold ">
                This Week at Ubisoft: The Division 2 New Season Live Now, Mario
                + Rabbids Sparks of Hope Gets First DLC
              </h3>
            </div>
            <div className="col-start-3">
              <img src={rabbids} alt="" />
            </div>
            <div className="col-start-4">
              <p className="pb-2">March 2, 2023</p>
              <h3 className="text-lg font-bold ">
                {" "}
                Mario + Rabbids Sparks of Hope Free Demo and First DLC, The
                Tower of Doooom, Available Now
              </h3>
            </div>
            <div className="col-start-3 row-start-2">
              <img src={laby} alt="" />
            </div>
            <div className="col-start-4 row-start-2">
              <p className="pb-2">February 28, 2023</p>
              <h3 className="text-lg font-bold ">
                Assassin’s Creed Odyssey Partners with Ashmolean Museum for
                Mythological Exhibit
              </h3>
            </div>
            <div className="col-start-1 row-start-3">
              <img src={gridimg} alt="" />
            </div>
            <div className="col-start-2 row-start-3">
              <p className="pb-2">February 28, 2023</p>
              <h3 className="text-lg font-bold ">
                The Division 2 Warlords of New York Season 11 Begins Today
              </h3>
            </div>
            <div className="col-start-3 row-start-3">
              <img src={dance} alt="" />
            </div>
            <div className="col-start-4 row-start-3">
              <p className="pb-2">February 27, 2023</p>
              <h3 className="text-lg font-bold ">
                Just Dance 2023 Edition Season 1: Lover Coaster Now Available
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5 pb-5 btn">
          <button className="flex px-20 py-4 font-bold text-white bg-[#d80388] rounded-full hover:text-[#d80388] hover:bg-white hover:transition hover:duration-500 hover:border-2 hover:border-[#d80388]">
            ALL NEWS
          </button>
        </div>
      </section>
    </div>
  );
};

export default News;
