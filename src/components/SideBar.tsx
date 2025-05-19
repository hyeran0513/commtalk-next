import Link from "next/link";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="w-[360px] border-r border-gray-200 h-screen">
      <div className="flex justify-content items-center px-[20px] h-[72px] border-b border-gray-200">
        <Link href="/mypage" className="text-black-200 text-3xl font-bold">
          커톡커톡
        </Link>
      </div>

      <div>
        <ul>
          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/comment">나의 댓글 작성 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/like">나의 좋아요 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/post">나의 작성 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/mypage/scrap">나의 스크랩 게시글</Link>
          </li>

          <li className="px-[20px] py-[10px] cursor-pointer">
            <Link href="/" className="flex items-center gap-[8px]">
              <BiHomeAlt /> 홈으로 이동하기
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
