import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import PhonesContainer from "../components/PhonesContainer/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const phoneData = useLoaderData();
  // console.log(phoneData);
  const [phones, setPhone] = useState(phoneData);
  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchedPhones = phoneData.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhone(searchedPhones);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <PhonesContainer phones={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
