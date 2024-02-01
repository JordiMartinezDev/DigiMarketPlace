"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState, useRef } from "react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
type Props = {};

const NavItems = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  {
    /** This returns pathname and we could use it to know the selected link on navbar */
  }

  const isAnyOpen = activeIndex !== null;

  return (
    <div className="flex  gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          ></NavItem>
        );
      })}
    </div>
  );
};

export default NavItems;
