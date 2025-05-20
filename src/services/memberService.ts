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

// 회원 조회
export const getMember = async () => {
  const res = await axios.get("/members/me");

  console.log("@@@" + JSON.stringify(res.data));
  return res.data;
};

// 회원 삭제
export const deleteMember = async () => {
  const res = await axios.delete("/members/me");

  return res.data;
};

// 회원 수정
export const editMember = async (
  username: string,
  email: string,
  phone: string
) => {
  const res = await axios.patch("/members/me", {
    username,
    email,
    phone,
  });

  return res.data;
};

// 비밀번호 변경
export const changePassword = async (
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  const res = await axios.patch("/membsers/password", {
    currentPassword,
    newPassword,
    confirmPassword,
  });

  return res.data;
};

// 현재 비밀번호 확인
export const confirmPassword = async (currentPassword: string) => {
  const res = await axios.post("/members/password/confirm", {
    currentPassword,
  });

  return res.data;
};
