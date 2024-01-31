import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div></div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
