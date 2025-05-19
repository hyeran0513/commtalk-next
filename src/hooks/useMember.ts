import { createMember, loginMember } from "@/services/memberService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// 회원 생성
export const useCreateMember = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["createMember"],
    mutationFn: ({
      nickname,
      password,
      confirmPassword,
      username,
      email,
      phone,
    }: {
      nickname: string;
      password: string;
      confirmPassword: string;
      username: string;
      email: string;
      phone: string;
    }) =>
      createMember(nickname, password, confirmPassword, username, email, phone),
    onSuccess: () => {
      router.push(`/members/login`);
    },
    onError: (error) => {
      alert("생성 실패" + error.message);
    },
  });
};

// 로그인
export const useLoginMember = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["loginMember"],
    mutationFn: ({
      nickname,
      password,
    }: {
      nickname: string;
      password: string;
    }) => loginMember(nickname, password),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.message);
      router.push(`/`);
    },
    onError: (error) => {
      alert("로그인 실패" + error.message);
    },
  });
};
