"use client";

import Link from "next/link";
import React, { useState } from "react";
import Category from "./Category";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-[100] w-full bg-white">
      {/* 로고 영역 */}
      <div className="border-b border-gray-200">
        <div className="flex items-center m-auto max-w-[1240px] h-[72px]">
          <Link href="/" className="text-black-200 text-3xl font-bold">
            커톡커톡
          </Link>
        </div>
      </div>

      {/* 메뉴 버튼 영역 */}
      <div className="border-b border-gray-200">
        <div className="flex items-center m-auto max-w-[1240px] h-[50px]">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <BiMenu className="text-[24px]" />
          </button>
        </div>
      </div>

      {/* 카테고리 영역 */}
      {open && <Category onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Header;
