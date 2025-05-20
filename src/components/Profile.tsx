import { useGetMember } from "@/hooks/useMember";
import React from "react";

const Profile = () => {
  const { data: member } = useGetMember();
  return (
    <div>
      {member?.nickname} ({member?.username})님
    </div>
  );
};

export default Profile;
