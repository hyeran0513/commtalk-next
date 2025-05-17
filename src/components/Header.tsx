import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center m-auto max-w-[1240px] h-[72px]">
        <Link href="/" className="text-black-200 text-3xl font-bold">
          커톡커톡
        </Link>
      </div>
    </div>
  );
};

export default Header;
