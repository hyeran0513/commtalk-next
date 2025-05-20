import {
  confirmPassword,
  createMember,
  deleteMember,
  editMember,
  getMember,
  loginMember,
} from "@/services/memberService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

// 회원 조회
export const useGetMember = () => {
  return useQuery({
    queryKey: ["member"],
    queryFn: () => getMember(),
  });
};

// 회원 삭제
export const useDeleteMember = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteMember"],
    mutationFn: () => deleteMember(),
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      queryClient.invalidateQueries({
        queryKey: ["member"],
        exact: false,
      });
      router.push(`/`);
    },
    onError: (error) => {
      alert("회원 삭제 실패" + error.message);
    },
  });
};

// 회원 수정
export const useEditMember = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["editMember"],
    mutationFn: ({
      nickname,
      email,
      phone,
    }: {
      nickname: string;
      email: string;
      phone: string;
    }) => editMember(nickname, email, phone),
    onSuccess: () => {
      router.push(`/mypage`);
    },
    onError: (error) => {
      alert("회원 수정 실패" + error.message);
    },
  });
};

// 비밀번호 변경
export const useChangePassword = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["changePassword"],
    mutationFn: ({
      currentPassword,
      newPassword,
      confirmPassword,
    }: {
      currentPassword: string;
      newPassword: string;
      confirmPassword: string;
    }) => editMember(currentPassword, newPassword, confirmPassword),
    onSuccess: () => {
      router.push(`/members/login`);
    },
    onError: (error) => {
      alert("비밀번호 변경 실패" + error.message);
    },
  });
};

// 현재 비밀번호 확인
export const useConfirmPassword = (onSuccessCallback: () => void) => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["confirmPassword"],
    mutationFn: ({ currentPassword }: { currentPassword: string }) =>
      confirmPassword(currentPassword),
    onSuccess: () => {
      onSuccessCallback();
      router.push("/mypage/member/edit");
    },
    onError: (error) => {
      alert("현재 비밀번호 확인 실패: " + error.message);
    },
  });
};
