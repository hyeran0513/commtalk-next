import axios from "@/api/axiosInstance";

// 회원 댓글 작성 게시글 목록 조회
export const getMyComment = async () => {
  const res = await axios.get("/posts/me/commented");

  return res.data;
};

// 회원 좋아요 게시글 목록 조회
export const getMyLike = async () => {
  const res = await axios.get("/posts/me/liked");

  return res.data;
};

// 회원 작성 게시글 목록 조회
export const getMyPost = async () => {
  const res = await axios.get("/posts/me/posted");

  return res.data;
};

// 회원 스크랩 게시글 목록 조회
export const getMyScrap = async () => {
  const res = await axios.get("/posts/me/scrapped");

  return res.data;
};
