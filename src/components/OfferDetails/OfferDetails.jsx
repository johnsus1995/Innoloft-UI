import PropTypes from "prop-types";
import {
  AiOutlineSetting,
  AiOutlineFieldTime,
  AiOutlineCreditCard,
  AiOutlineDollar,
} from "react-icons/ai";

const OfferDetails = (props) => {
  return (
    <div className="OfferDetails">
      <div className="grid grid-cols-2">
        <div className="flex gap-3 items-start mb-3">
          <AiOutlineSetting className="mt-1"/>
          <div>
            <p className="mb-1">Technology</p>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 1</span>
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 2</span>
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 3</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <AiOutlineCreditCard className="mt-1"/>
          <div>
            <p className="mb-1">Business model</p>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 1</span>
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 2</span>
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 3</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <AiOutlineFieldTime className="mt-1"/>
          <div>
            <p className="mb-1">TRL</p>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 1</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <AiOutlineDollar className="mt-1"/>
          <div>
            <p className="mb-1">Costs</p>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferDetails.defaultProps = {
  variant: "default",
  className: "",
};

OfferDetails.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default OfferDetails;
