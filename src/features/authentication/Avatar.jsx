import React from "react";
import useUser from "./useUser";

function Avatar() {
  const { user, isLoading } = useUser();

  return (
    <div className="hidden md:flex items-center gap-x-2 text-secondary-600">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/user.jpg"
        alt="user-account"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default Avatar;
