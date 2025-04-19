import React from "react";
import Hero from "../components/Hero/Hero";
import PhonesContainer from "../components/PhonesContainer/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const phoneData = useLoaderData();
  // console.log(phoneData);

  return (
    <div>
      <Hero></Hero>
      <PhonesContainer phoneData={phoneData}></PhonesContainer>
    </div>
  );
};

export default Home;
