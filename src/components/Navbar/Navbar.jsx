import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = (props) => {
  const { className } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="Navbar">
      <nav className="" >

      </nav>
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
