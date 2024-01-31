"use client";

import React, { useState } from "react";
type Props = {};

const NavItems = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  return <div className="flex  gap-4 h-full">NavItems</div>;
};

export default NavItems;
