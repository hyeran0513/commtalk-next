export interface Board {
  boardId: number;
  boardName: string;
  desc: string;
}

export interface BoardWithPin {
  boardId: number;
  boardName: string;
  pinnedBoardId: number;
}
