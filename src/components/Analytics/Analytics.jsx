import PropTypes from "prop-types";
import Laptop from "src/assets/laptop.jpg";

const Analytics = (props) => {
  const { className } = props;
  return (
    <div className="Analytics">
      <div className="w-full py-16 px-4 bg-black">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4"
            src={Laptop}
            alt="/"
          />
          <div className="text-white flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage data analytics centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, pharetra
              cursus dapibus gravida morbi odio, urna sollicitudin sociis neque
              sodales cras. Sem purus consequat condimentum bibendum integer
              pharetra aliquet velit mus, auctor sollicitudin metus fames
              facilisi felis nostra vehicula tellus dapibus
            </p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Analytics.defaultProps = {
  variant: "default",
  className: "",
};

Analytics.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Analytics;
