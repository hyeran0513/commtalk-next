import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  deletePost,
  editPost,
  getPopularPost,
  getPostDetail,
  getPostList,
  likePost,
  scrapPost,
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
    queryKey: ["postDetail", boardId, postId],
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

// 게시글 좋아요 및 취소
export const useLikePost = (boardId: string, postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["likePost", boardId, postId],
    mutationFn: () => likePost(boardId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postDetail", boardId, postId],
      });
    },
    onError: (error) => {
      alert("좋아요 실패" + error.message);
    },
  });
};

// 게시글 스크랩 및 취소
export const useScrapPost = (boardId: string, postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["scrapPost", boardId, postId],
    mutationFn: () => scrapPost(boardId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postDetail", boardId, postId],
      });
    },
    onError: (error) => {
      alert("스크랩 실패" + error.message);
    },
  });
};

// 인기 게시글 목록 조회
export const usePopularPost = () => {
  return useQuery({
    queryKey: ["popularPost"],
    queryFn: () => getPopularPost(),
  });
};
