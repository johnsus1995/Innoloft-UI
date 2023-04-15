import PropTypes from "prop-types";

const Newsletter = (props) => {
  const { className } = props;
  return (
    <div className="Newsletter">
      <div className="w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips and tricks to optimize your flow?
            </h1>
            <p>Sign up to our news letter and stay up to date.</p>
          </div>
          <div className="my-4 ">
            <div className="flex gap-5 flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="py-3 border "
                type="email"
                placeholder="Enter your email..."
              />
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto">
                Notify me
              </button>
            </div>
              <p>We care about protection of your data, read our privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter.defaultProps = {
  variant: "default",
  className: "",
};

Newsletter.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Newsletter;
