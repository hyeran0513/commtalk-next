interface BoardPageProps {
  params: { boardId: string };
}

const BoardPage = ({ params }: BoardPageProps) => {
  const { boardId } = params;

  return (
    <div className="m-auto max-w-[1240px] pt-[166px] pb-[40px]">
      <h1>Board ID: {boardId}</h1>
    </div>
  );
};

export default BoardPage;
