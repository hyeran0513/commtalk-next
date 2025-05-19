import SideBar from "@/components/SideBar";

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <SideBar />

      <section className="flex-1">
        <div className="h-[72px] border-b border-gray-200"></div>

        <div className="px-[30px]">{children}</div>
      </section>
    </main>
  );
}
