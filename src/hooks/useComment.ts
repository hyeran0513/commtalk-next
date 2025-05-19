import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createComment,
  deleteComment,
  editComment,
  getComment,
  likeComment,
} from "@/services/commentService";

// 게시글 댓글 목록 조회
export const useComment = (postId: string) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComment(postId),
    enabled: !!postId,
  });
};

// 게시글 댓글 생성
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

// 게시글 댓글 삭제
export const useDeleteComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteComment", postId],
    mutationFn: () => deleteComment(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
  });
};

// 게시글 댓글 수정
export const useEditComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["editComment", postId, commentId],
    mutationFn: (payload: { content: string; anonymousYN: boolean }) =>
      editComment(postId, commentId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
  });
};

// 게시글 댓글 좋아요 및 취소
export const useLikeComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["likeComment", postId],
    mutationFn: () => likeComment(postId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments", postId],
      });
    },
  });
};
