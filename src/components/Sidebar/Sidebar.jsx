import PropTypes from "prop-types";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineBranches,
  AiOutlineDown,
} from "react-icons/ai";

const Sidebar = (props) => {
  return (
    <div className="Sidebar px-4 py-4 h-[100%] w-[100%]">
      <div className="flex gap-5 items-center">
        <div className="w-[60px]">
          <img
            src="src/assets/images/profilePic.png"
            alt="/"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg">Jaison John</p>
          <p className="text-sm">Innoloft Gmbh</p>
        </div>
      </div>
      <div className="py-4">
        <ul>
          <li className="py-2 flex items-center">
            <span>
              <AiOutlineHome />
            </span>
            <span className="ml-3">Home</span>
          </li>
          <li className="py-2 flex items-center">
            <span>
              <AiOutlineUsergroupAdd />
            </span>
            <span className="ml-3">Members</span>
          </li>
          <li className="py-2 flex items-center justify-between">
            <a href="#" className="flex">
              <span >
                <AiOutlineBranches />
              </span>
              <span className="ml-3">Organizations</span>
            </a>
            <div>
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
