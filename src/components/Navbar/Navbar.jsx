import PropTypes from "prop-types";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { AiOutlineMessage,AiOutlineSearch } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import { SlBell } from "react-icons/sl";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { productDetails } from "src/store/product/selectors";


const Navbar = (props) => {
  const navigate = useNavigate();
  const _product = useSelector(productDetails);

  return (
    <div className="Navbar">
      <div className="px-4 xl:px-[200px] grid grid-cols-4 bg-secondary_violet h-[55px] ">
        <div className="min-w-[140px] min-h-[26.29px] ml-0  flex" onClick={()=>navigate('/product')}>
          <Logo className="w-[150px] cursor-pointer"/>
        </div>

      <div className="col-span-3 flex justify-between items-center ">
        <div className="border relative hidden lg:flex">
          <VscSearch className=" hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer mr-2"/>
          <input
            className="hidden md:flex md:w-[300px] lg:w-[400px] xl:w-[500px]  h-[27px] p-2 rounded-md outline-none"
            placeholder="Enter interests, keyword, company name, etc."
            type="text"
          />
        </div>
        <div>
          <ul className=" hidden lg:flex gap-5 justify-between items-center md:flex ">
            <li className="cursor-pointer">
              <AiOutlineMessage />
            </li>
            <li className="flex gap-1 items-center cursor-pointer">
              <p>EN</p>
              <BsChevronDown />
            </li>
            <li className="cursor-pointer">
              <SlBell />
            </li>
            <li className="flex gap-1 items-center cursor-pointer">
              <div className="w-[40px]">
                <img
                  className="rounded-full"
                  src={_product?.user?.profilePicture}
                  alt="/"
                />
              </div>
              <BsChevronDown />
            </li>
          </ul>
        </div>
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
