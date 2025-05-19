"use client";

import PinBoards from "@/components/PinBoards";
import PopularPosts from "@/components/PopularPosts";

export default function Home() {
  return (
    <div className="m-auto max-w-[1240px] pt-[166px] pb-[40px]">
      <main className="flex gap-[40px]">
        <section className="flex-1">
          <div className="mb-[20px]">
            <h3 className="text-lg font-semibold">나만의 핀 고정 게시판</h3>
          </div>
          <PinBoards />
        </section>

        <aside className="w-[360px]">
          <div className="mb-[20px]">
            <h3 className="text-lg font-semibold">실시간 인기 게시글</h3>
          </div>
          <PopularPosts />
        </aside>
      </main>
    </div>
  );
}
