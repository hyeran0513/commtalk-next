import axios from "@/api/axiosInstance";

// 회원 생성
export const createMember = async (
  nickname: string,
  password: string,
  confirmPassword: string,
  username: string,
  email: string,
  phone: string
) => {
  const res = await axios.post(`/members`, {
    nickname,
    password,
    confirmPassword,
    username,
    email,
    phone,
  });

  return res.data;
};

// 로그인
export const loginMember = async (nickname: string, password: string) => {
  const res = await axios.post(`/members/login`, {
    nickname,
    password,
  });

  return res.data;
};
