import React from "react";
import SectionFour from "./SectionFour/SectionFour";
import SectionOne from "./SectionOne/SectionOne";
import SectionSix from "./SectionSix/SectionSix";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import useContentful from "../../hooks/useContentful";
import { useState } from "react";
import { useEffect } from "react";
import SectionFive from "./SectionFive/SectionFive";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const { getServices } = useContentful();

  useEffect(() => {
    getServices().then((response) => setData(response));
  }, []);
  return (
    <div style={{ padding: "0 9vw" }}>
      <SectionOne />
      <SectionTwo data={data} />
      <SectionThree data={data} />
      <SectionFour data={data} />
      <SectionFive data={data} />
      <SectionSix data={data} />
    </div>
  );
};

export default LandingPage;
