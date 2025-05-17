import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/services/postService";

export const usePost = (boardId: string, postId: string) => {
  return useQuery({
    queryKey: ["post", boardId, postId],
    queryFn: () => getPost(boardId, postId),
    enabled: !!boardId && !!postId,
  });
};
