import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  // useEffect(() => {
  //   setToggle(!false);
  // }, []);

  return (
    <div className="Navbar">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="md:flex hidden">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">contact</li>
        </ul>
        <div
          onClick={handleClick}
          className="block md:hidden"
        >
          {!toggle ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !toggle
              ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-600 text-white ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>

          <ul className=" uppercase p-4">
            <li className="p-4 border-b border-gray-400">Home</li>
            <li className="p-4 border-b border-gray-400">Company</li>
            <li className="p-4 border-b border-gray-400">Resources</li>
            <li className="p-4 border-b border-gray-400">About</li>
            <li className="p-4">contact</li>
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
