import React from "react";
import Hero from "./Hero/Hero";
import Rewards from "./Rewards/Rewards";
import Challenges from "./Challenges/Challenges";
import Guide from "./Guide/Guide";
import KnowMore from "./KnowMore/KnowMore";
import Fellowship from "./Fellowship/Fellowship";
import CompletedChallenges from "./CompletedChallenges/CompletedChallenges";
import Subscribe from "./Subscribe/Subscribe";
import Ownership from "./Ownership/Ownership";
import SignUp from "./SignUp/SignUp";

const Home = () => {
  return (
    <>
      <Hero />
      <Rewards />
      <Challenges />
      <Guide />
      <KnowMore />
      <Fellowship />
      <CompletedChallenges />
      <Subscribe />
      <Ownership />
      <SignUp />
    </>
  );
};

export default Home;
