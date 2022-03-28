import React from "react";
import Contact from "./Contact/Contact";
import Feature from "./Features/Features";
import Landing from "./Landing/Landing";

const Home = ({ searchName }) => {
  return (
    <React.Fragment>
      <Landing searchName={searchName} />
      <Feature />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
