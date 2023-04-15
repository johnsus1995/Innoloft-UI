import PropTypes from "prop-types";
import Analytics from "src/components/Analytics";
import Newsletter from "src/components/Newsletter";

const Home = () => {
  return (
    <div className="Home">
      <div className="max-w-[800px] mt-[96px] w-full h-[80vh] mx-auto text-center flex flex-col">
        <p className="font-bold p-2 uppercase">Growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for blablabla
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analysis to increase revenue for BTB,BTC and SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto">Get started</button>
      </div>
      <Analytics/>
      <Newsletter/>
    </div>
  );
};

Home.defaultProps = {
  className: "",
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
