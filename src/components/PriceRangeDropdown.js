import React, { useContext } from "react";
import { useState } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: "Price range(any)",
    },
    {
      value: "10000 - 13000",
    },
    {
      value: "13000 - 16000",
    },
    {
      value: "16000 - 19000",
    },
    {
      value: "19000 - 22000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700"
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
