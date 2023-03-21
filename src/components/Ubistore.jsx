import React from "react";
import promo1 from "../images/ubi-homescreen-store_promo-settlers_launch.jpg";
import promo2 from "../images/ubi-homescreen-store_promo-skul_and_bones-en.jpg";
import promo3 from "../images/ubi-homescreen-store_promo-premium_sale.jpg";
const Ubistore = () => {
  return (
    <div>
      {" "}
      <section className="bg-[#f0f3f4] py-9">
        <div className="text-center">
          <h2 className="pt-5 pb-5 text-3xl font-bold tracking-wider text-center ">
            UBISOFT STORE
          </h2>
          <div className="lg:grid lg:grid-cols-3 md:flex-col md:flex gap-11 px-11">
            <div className="z-10 col-start-1 row-start-1">
              <img src={promo1} alt="" />
            </div>
            <p className="z-10 col-start-1 row-start-1 p-5 text-lg font-bold cursor-pointer lg:text-white md:text-black hover:underline ">
              PLAY THE SETTLERS: NEW ALLIES WITH UBISOFT+
            </p>
            <div className="col-start-2 row-start-1">
              <img src={promo2} alt="" />
            </div>
            <p className="z-10 col-start-2 row-start-1 p-5 text-lg font-bold cursor-pointer lg:text-white md:text-black hover:underline ">
              JOIN THE GOLDEN AGE OF PIRACY AND RISK IT ALL FOR RICHES
            </p>
            <div className="col-start-3 row-start-1">
              <img src={promo3} alt="" />
            </div>
            <p className="z-10 col-start-3 row-start-1 p-5 text-lg font-bold cursor-pointer lg:text-white md:text-black hover:underline ">
              UP TO 80% OFF
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ubistore;
