import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "../css/frameslider.css";
import jsondat from "../pictures.json";
import xbox from "../images/xbox.svg";
import ps4 from "../images/ps4.svg";
import nitendoswitch from "../images/nitendoswitch.svg";

const Frameslider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {jsondat.content.map((image, i) => (
            <motion.div className="item">
              <img src={image.img} alt="" />
              <a href="/">{image.gametitle}</a>
              <div className="flex w-12 h-4 grid-col-1 icons">
                <img src={xbox} alt="" />
                <img src={ps4} alt="" />
                <img src={nitendoswitch} alt="" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Frameslider;
