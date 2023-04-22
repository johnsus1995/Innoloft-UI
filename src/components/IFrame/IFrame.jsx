import PropTypes from "prop-types";

const IFrame = (props) => {
  const { width, height } = props;
  return (
    <div className="IFrame flex justify-center">
      <iframe
        // width="560"
        // height="315"
        width={width}
        height={height}
        src="https://www.youtube.com/embed/6vA4BuJM3_g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

IFrame.defaultProps = {
  variant: "default",
  className: "",
};

IFrame.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default IFrame;
