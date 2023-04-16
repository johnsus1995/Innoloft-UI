import PropTypes from "prop-types";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { AiOutlineMessage } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { SlBell } from "react-icons/sl";
import { BsChevronDown } from "react-icons/bs";

import ProfilePic from "src/assets/images/profilePic.png";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="w-full h-[55px] px-[240px] bg-secondary_white flex items-center justify-between">
        <div className="w-[140px] h-[26.29px]">
          <Logo />
        </div>
        <div className="border">
          <input
            className="w-[500px] h-[27px] p-2 rounded-md"
            placeholder="Enter interests, keyword, company name, etc."
            type="text"
          />
        </div>
        <div>
          <ul className="flex gap-5 justify-between items-center">
            <li>
              <AiOutlineMessage />
            </li>
            <li className="flex gap-1">
              <CiGlobe />
              <BsChevronDown />
            </li>
            <li>
              <SlBell />
            </li>
            <li className="flex gap-1 items-center">
              <div className="w-[40px]">
                <img
                  src="src/assets/images/profilePic.png"
                  alt="/"
                />
              </div>
              <BsChevronDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  variant: "default",
  className: "",
};

Navbar.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
