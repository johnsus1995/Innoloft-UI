import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as productActions from "src/store/product/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Landing = () => {
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    await dispatch(productActions.get());
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="Landing flex justify-center items-center flex-col text-blue-500 h-[200px]">
      <div className="flex justify-start flex-col">
        <Link
          to="/product"
          className="hover:text-blue-900"
        >
          1. /product/
        </Link>
        <Link
          to="/product/edit"
          className="hover:text-blue-900"
        >
          2. /product/edit/
        </Link>
      </div>
    </div>
  );
};

Landing.defaultProps = {
  className: "",
};

Landing.propTypes = {
  className: PropTypes.string,
};

export default Landing;
