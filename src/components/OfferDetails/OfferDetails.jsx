import PropTypes from "prop-types";
import {
  AiOutlineSetting,
  AiOutlineFieldTime,
  AiOutlineCreditCard,
  AiOutlineDollar,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { productDetails } from "src/store/product/selectors";

const OfferDetails = (props) => {
  const _product = useSelector(productDetails);

  return (
    <div className="OfferDetails">
      <div className="grid grid-cols-2">
        <div className="flex gap-3 items-start mb-3">
          <AiOutlineSetting className="mt-1" />
          <div>
            <p className="mb-1">Technology</p>
            <div className="flex gap-2 flex-col md:flex-row">
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label1</span>
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label2</span>
              <span className="bg-gray-200 px-2 py-0 rounded-full">Label3</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <AiOutlineCreditCard className="mt-1" />
          <div>
            <p className="mb-1">Business model</p>
            <ul className="flex gap-2 flex-col">
              {_product?.businessModels?.map((model) => (
                <li className="bg-gray-200 px-2  rounded-full w-fit">
                  <div className="inline-block w-[90px]">
                    <span className="truncate block">{model?.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3 items-start py-3">
          <AiOutlineFieldTime className="mt-1" />
          <div>
            <p className="mb-1">TRL</p>
            <div className="flex gap-2  w-[100px] md:w-[200px] lg:w-[300px]">
              <span className="bg-gray-200 px-2 py-0 rounded-full truncate">
                {_product?.trl.name}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start py-3">
          <AiOutlineDollar className="mt-1" />
          <div>
            <p className="mb-1">Costs</p>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-2 py-0 rounded-full">
                {_product?.investmentEffort}
              </span>
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
