import PropTypes from "prop-types";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineBranches,
  AiOutlineDown,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { productDetails } from "src/store/product/selectors";


const Sidebar = (props) => {
  const _product = useSelector(productDetails);

  return (
    <div className="Sidebar py-4 h-[100%]">
      <div className="flex gap-5 items-center">
        <div className="w-[60px]">
          <img
            className="rounded-full"
            src={_product?.user?.profilePicture}
            alt="/"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg">{`${_product?.user?.firstName} ${_product?.user?.lastName}`}</p>
          <p className="text-sm">Innoloft Gmbh</p>
        </div>
      </div>
      <div className="py-4">
        <ul>
          <li className="py-2 flex items-center">
            <span className="cursor-pointer">
              <AiOutlineHome />
            </span>
            <span className="ml-3 cursor-pointer">Home</span>
          </li>
          <li className="py-2 flex items-center">
            <span className="cursor-pointer">
              <AiOutlineUsergroupAdd />
            </span>
            <span className="ml-3 cursor-pointer">Members</span>
          </li>
          <li className="py-2 flex items-center justify-between">
            <a href="#" className="flex">
              <span  className="cursor-pointer">
                <AiOutlineBranches />
              </span>
              <span className="ml-3 cursor-pointer">Organizations</span>
            </a>
            <div className="cursor-pointer">
              <AiOutlineDown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {
  variant: "default",
  className: "",
};

Sidebar.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Sidebar;
