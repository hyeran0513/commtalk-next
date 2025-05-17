import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createComment, getComment } from "@/services/commentService";

export const useComment = (postId: string) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComment(postId),
    enabled: !!postId,
  });
};

export const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createComment", postId],
    mutationFn: (payload: {
      parentId: number;
      content: string;
      anonymousYN: boolean;
    }) => createComment(postId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
  });
};
