import React from "react";
import Profile from "../components/Profile";

const User = ({ setLoginUser, user }) => {
  return (
    <div className="max-w-[1240px] mx-auto p-2">
      <Profile setLoginUser={setLoginUser} user={user} />
    </div>
  );
};

export default User;
