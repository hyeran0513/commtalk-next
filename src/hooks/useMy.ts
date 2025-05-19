import {
  getMyComment,
  getMyLike,
  getMyPost,
  getMyScrap,
} from "@/services/myService";
import { useQuery } from "@tanstack/react-query";

// 회원 댓글 작성 게시글 목록 조회
export const useMyComment = () => {
  return useQuery({
    queryKey: ["myComment"],
    queryFn: () => getMyComment(),
  });
};

// 회원 좋아요 게시글 목록 조회
export const useMyLike = () => {
  return useQuery({
    queryKey: ["myLike"],
    queryFn: () => getMyLike(),
  });
};

// 회원 작성 게시글 목록 조회
export const useMyPost = () => {
  return useQuery({
    queryKey: ["myPost"],
    queryFn: () => getMyPost(),
  });
};

// 회원 스크랩 게시글 목록 조회
export const useMyScrap = () => {
  return useQuery({
    queryKey: ["myScrap"],
    queryFn: () => getMyScrap(),
  });
};
