"use client";

import Link from "next/link";
import React, { useState } from "react";
import Category from "./Category";
import { BiMenu, BiUser } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMypage = pathname.startsWith("/mypage");
  const isMembers = pathname.startsWith("/members");

  if (isMypage || isMembers) return null;

  return (
    <div className="fixed z-[100] w-full bg-white">
      {/* 로고 영역 */}
      <div className="border-b border-gray-200">
        <div className="flex items-center m-auto max-w-[1240px] h-[72px]">
          <Link href="/" className="text-black-200 text-3xl font-bold">
            커톡커톡
          </Link>

          <div className="flex items-center gap-[40px] ml-auto">
            <button
              className="cursor-pointer"
              onClick={() => router.push("/members")}
            >
              회원가입
            </button>

            <button
              className="cursor-pointer"
              onClick={() => router.push("/members/login")}
            >
              로그인
            </button>

            <button onClick={() => router.push("/mypage")}>
              <BiUser className="text-[24px] cursor-pointer" />
            </button>
          </div>
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
