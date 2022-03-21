import React from "react";
import Contact from "./Contact/Contact";
import Feature from "./Features/Features";
import Landing from "./Landing/Landing";

const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      <Feature />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
