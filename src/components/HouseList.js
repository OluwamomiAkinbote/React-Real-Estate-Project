import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import { Link } from "react-router-dom";
import House from "../components/House";

const HouseList = () => {
  const { houses, loadig } = useContext(HouseContext);
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
