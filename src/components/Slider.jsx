import React from "react";
import Frameslider from "../components/Frameslider";

const Slider = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="">
          <Frameslider />
          <div className="flex justify-center pt-5 btn">
            <button className="flex px-14 py-4 font-bold text-white bg-[#d80388] rounded-full hover:text-[#d80388] hover:bg-white hover:transition hover:duration-500 hover:border-2 hover:border-[#d80388]">
              VIEW ALL GAMES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
