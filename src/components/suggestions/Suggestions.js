import React from "react";
import Profile from "../profile/Profile";
import "./Suggestions.scss";

const Suggestions = ({ suggestions }) => {
  return (
    <div className="px-5 py-3 wrapper">
        <Profile
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU"
          userName="Shuvo024"
          fullName="Shuvo Das"
          width="55px"
          height="55px"
          btn="Switch"
        />

        <div className="suggestions mt-3">
          <div className="d-flex justify-content-between">
            <h6 className="text-muted">Suggestions For You</h6>
            <span>See all</span>
          </div>

          <div className="mt-3">
            {suggestions.map((item, index) => (
              <div key={index}>
                <Profile
                  image={item?.user?.profile_picture}
                  userName={item?.user?.username}
                  fullName={item?.user?.full_name}
                  width="35px"
                  height="35px"
                  btn="Follow"
                />
              </div>
            ))}
          </div>
        </div>

    </div>
  );
};

export default Suggestions;
