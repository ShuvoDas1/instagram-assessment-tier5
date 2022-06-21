import React from "react";

const Profile = ({image, userName, fullName, width, height , btn}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex">
        <img
          style={{ width, height }}
          src={image}
          className="avatar-xs rounded-circle me-1 cursor-pointer"
          alt="User"
        />
        <div className="ms-3">
          <span style={{fontWeight: '500'}}>{userName}</span>
          <p>{fullName}</p>
        </div>
      </div>
      <span className="text-primary cursor ">{btn}</span>
    </div>
  );
};

export default Profile;
