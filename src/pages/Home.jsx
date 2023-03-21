import React from "react";
import bg from "../images/ubi-homescreen-r6-y8s1-bg-desktop.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Footer from "../components/Footer";
import VideoFeature from "../components/VideoFeature";
import InsideUbi from "../components/InsideUbi";
import Ubistore from "../components/Ubistore";
import News from "../components/News";
import Slider from "../components/Slider";
const Home = () => {
  const slider = [
    {
      title: "OPERATION COMMANDING FORCE",
      bg: "../images/ubi-homescreen-r6-y8s1-bg-desktop.jpg",
      text: "Sabotage enemy drones and make them your own with Brava, our newest Brazilian Attacker joining Siege!",
      banner: "../images/ubi-homescreen-logo-r6extraction.png",
      promotext: "RAINBOW SIX SIEGE",
    },
    {
      title: "Welcome to Season 1: Lover Coaster!",
      bg: "../images/JD23_KeyArt_S1_FINAL.jpg",
      text: "This season is all about celebrating the love you have for your friends, family, soulmate, and for yourself!",
      banner: "../images/jd23-homescreen-logo-horizontal.png",
      promotext: "JUST DANCE 2023",
    },
    {
      title: "The Settlers: New Allies",
      bg: "../images/TSNA_KA_noLogo_1920x1080_darken.jpg",
      text: "Available now!",
      banner: "../images/TSNA_Logo_EN_White.png",
      promotext: "THE SETTLERS",
    },
    {
      title: "THE CREW MOTORFEST",
      bg: "../images/ubi-homescreen-crew_motorfest-bg-desktop.jpg",
      text: "The new chapter of The Crew franchise.",
      banner: "../images/ubi-homescreen-logo-crew_motorfest.png",
      promotext: "THE CREW",
    },
    {
      title: "SEASON 5 - WINTER WONDERLAND RIDER",
      bg: "../images/WinterWonderland_FINAL_16x9_noLogo_darken.jpg",
      text: "Time to shred, it’s Winter season in the Republic!",
      banner: "../images/homescreen-hero-riders_republic-logo-color.png",
      promotext: "RIDERS REPUBLIC",
    },
    {
      title: "Assassin's Creed Mirage",
      bg: "../images/acmirage-homescreen-bg-desktop.jpg",
      text: "Become the most versatile Assassin in franchise history. Coming in 2023.",
      banner: "../images/ACM-White-Orange-crest-v1.png",
      promotext: "ASSASINS CREED MIRAGE",
    },
    {
      title: "The Settlers: New Allies out now with Ubisoft+",
      bg: "../images/ubi-homescreen-store-settlers_ubiplus-bg-desktop.jpg",
      text: "Build your settlement in a graphically stunning world! Discover the latest from the real-time strategy franchise.",
      banner: "../images/ubi-homescreen-logo-ubisoftplus-white.png",
      promotext: "UBISOFT+",
    },
    {
      title: "Save up to 80% on premium games, DLC and more!",
      bg: "../images/ubi-homescreen-store-premium_sale-bg-desktop.jpg",
      text: "Enjoy complete experiences for great prices.",
      banner: "../images/ubi-homescreen-logo-ubisoftstore.png",
      promotext: "UBISOFT STORE",
    },
    {
      title: "Mario + Rabbids Sparks of Hope - The Tower of Doooom",
      bg: "../images/mrsh-tower-of-doom-bg-desktop.jpg",
      text: "Face your doooom in this new ultimate tactical experience.",
      banner: "../images/SHK_Ubicom_logo.png",
      promotext: "MARIO + RABBIDS SPARK OF HOPE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="overflow-hidden group">
      <div
        className="w-screen h-screen duration-500 bg-cover "
        style={{ backgroundImage: `url(${slider[currentIndex].bg})` }}
      >
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex justify-center gap-5 py-2 top-4 ">
          {slider.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl bg-transparent cursor-pointer z-9 "
            >
              <div className="a">
                <p className="p-10 text-sm font-bold text-white hover:scale-150 ">
                  {slide.promotext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Slider />
      <News />
      <Ubistore />
      <InsideUbi />
      <VideoFeature />
      <Footer />
    </div>
  );
};

export default Home;
