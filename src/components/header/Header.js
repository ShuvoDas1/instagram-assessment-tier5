import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import messgengerIcon from "../../assets/images/messenger-mono.png";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Header = () => {


  return (
    <div className="header">
      <div className="logo__wrapper">
        <h4 className="logo cursor">Instagram</h4>
      </div>

      <div className="search__wrapper">
        <div className='search'>
          <SearchIcon className='icon' />
          <input
            className=" input no-outline"
            type="text"
            placeholder="Search"
            id="search"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="options__wrapper">
        <HomeOutlinedIcon  className='option' />
        <img src={messgengerIcon} alt="" className='option' style={{width: '25px', height: '25px'}} />
        <AddCircleOutlineOutlinedIcon className='option'  />
        <FavoriteBorderOutlinedIcon className='option' />
        <img
        style={{ width: "30px", height: "30px" }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU'
        className="avatar-xs rounded-circle me-1 cursor-pointer"
        alt="User"
      />
      </div>
    </div>
  );
};

export default Header;
