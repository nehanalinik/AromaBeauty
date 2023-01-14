import React from "react";

const Profile = ({ setLoginUser, user }) => {
  const { name, phone, email, address } = user;
  return (
    <div>
      <div className="py-3 text-center">
        <h1 className="text-[2rem] title">Account Details</h1>
      </div>
      <div className="grid place-items-center p-2">
        <div>
          <p>
            Your Name: <span>{name}</span>
          </p>
          <p>
            Your Mobile: <span>{phone}</span>
          </p>
          <p>
            Your Email: <span>{email}</span>
          </p>
          <p>
            Your Address: <span>{address}</span>
          </p>
        </div>
        <div
          className="mt-6 primaryRedBtn cursor-pointer"
          onClick={() => setLoginUser({})}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Profile;
