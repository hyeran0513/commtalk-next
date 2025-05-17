import { useQuery } from "@tanstack/react-query";
import { getBoard } from "@/services/boardService";

export const useBoard = () => {
  return useQuery({
    queryKey: ["boards"],
    queryFn: () => getBoard(),
  });
};
