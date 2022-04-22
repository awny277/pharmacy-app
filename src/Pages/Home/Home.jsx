import React from "react";
import Contact from "./Contact/Contact";
import Feature from "./Features/Features";
import Landing from "./Landing/Landing";

const Home = ({
  searchName,
  ShowMotahedaInMapClick,
  ShowMogtam3InMapClick,
  ShowNahdiInMapClick,
}) => {
  return (
    <React.Fragment>
      <Landing searchName={searchName} />
      <Feature
        ShowMotahedaInMapClick={ShowMotahedaInMapClick}
        ShowMogtam3InMapClick={ShowMogtam3InMapClick}
        ShowNahdiInMapClick={ShowNahdiInMapClick}
      />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
