import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  editPost,
  getPostDetail,
  getPostList,
} from "@/services/postService";
import { useRouter } from "next/navigation";

// 게시판 게시글 목록 조회
export const usePostList = (
  boardId: string,
  keyword?: string,
  page: number = 0,
  size: number = 10,
  sort: string[] = []
) => {
  return useQuery({
    queryKey: ["postList", boardId, keyword, page, size, sort],
    queryFn: () => getPostList(boardId, keyword, page, size, sort),
    enabled: !!boardId,
  });
};

// 게시글 생성
export const useCreatePost = (boardId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createPost", boardId],
    mutationFn: ({
      title,
      content,
      anonymousYN,
      commentableYN,
      hashtags,
    }: {
      title: string;
      content: string;
      anonymousYN: boolean;
      commentableYN: boolean;
      hashtags: string[];
    }) =>
      createPost(boardId, title, content, anonymousYN, commentableYN, hashtags),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postList", boardId],
        exact: false,
      });

      router.push(`/boards/${boardId}`);
    },
    onError: (error) => {
      alert("생성 실패" + error.message);
    },
  });
};

// 게시글 상세 조회
export const usePostDetail = (boardId: string, postId: string) => {
  return useQuery({
    queryKey: ["post", boardId, postId],
    queryFn: () => getPostDetail(boardId, postId),
    enabled: !!boardId && !!postId,
  });
};

// 게시글 삭제
export const useDeletePost = (boardId: string, postId: string) => {
  return useMutation({
    mutationKey: ["deletePost", boardId, postId],
    mutationFn: () => deletePost(boardId, postId),
    onSuccess: () => {
      console.log("삭제 성공");
    },
    onError: (error) => {
      alert("삭제 실패" + error.message);
    },
  });
};

// 게시글 수정
export const useEditPost = (boardId: string, postId: string) => {
  return useMutation({
    mutationKey: ["editPost", boardId, postId],
    mutationFn: () => editPost(boardId, postId),
  });
};
