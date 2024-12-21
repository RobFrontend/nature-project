import React from "react";
import Carousel from "../components/carousel";
import HomeKVs from "../components/HomeKVs";
import CabinsList from "../components/CabinsList";
import Hero from "../components/hero";
import Features from "../components/features";
import { natureImages } from "../data/cabins";

export default function Home() {
  const imgArr = natureImages;
  return (
    <>
      <div className="overflow-hidden relative">
        <Hero>Home</Hero>
      </div>
      <Features />
      <Carousel imgArr={imgArr} />
      <HomeKVs />
    </>
  );
}
