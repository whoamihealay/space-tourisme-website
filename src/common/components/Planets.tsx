import React from "react";
import Image from "next/image";

const Planets = ({ dest, children }) => {
  const getData = () => {
    let destinations = [];

    fetch("data.json")
      .then((response) => response.json())
      .then((data) => (destinations = data.destinations));
  };

  return (
    <div>
      <Image
        src="/assets/destination/image-moon.png"
        alt="Moon"
        width="170px"
        height="170px"
      />
      {children}
      <h2>{dest.name}</h2>
    </div>
  );
};

export default Planets;
