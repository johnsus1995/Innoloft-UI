import PropTypes from "prop-types";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { AiOutlineMessage } from "react-icons/ai";
import { SlBell } from "react-icons/sl";
import { BsChevronDown } from "react-icons/bs";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="  flex justify-between items-center bg-secondary_white h-[55px]  mx-auto px-4">
        <div className="min-w-[140px] min-h-[26.29px] ml-0 ">
          <Logo />
        </div>
        <div className="border">
          <input
            className="hidden md:flex md:w-[300px] lg:w-[350px] xl:w-[500px]  h-[27px] p-2 rounded-md "
            placeholder="Enter interests, keyword, company name, etc."
            type="text"
          />
        </div>
        <div>
          <ul className=" hidden lg:flex gap-5 justify-between items-center md:flex">
            <li>
              <AiOutlineMessage />
            </li>
            <li className="flex gap-1 items-center">
              <p>EN</p>
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
