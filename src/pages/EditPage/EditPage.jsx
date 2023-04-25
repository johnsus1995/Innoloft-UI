import PropTypes from "prop-types";
import Sidebar from "src/components/Sidebar";
import { AiOutlineRight, AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import Map from "src/components/utils/Map";
import IFrame from "src/components/IFrame";
import OfferDetails from "src/components/OfferDetails";
import { useNavigate } from "react-router-dom";
import WysiwygEditor from "src/components/utils/WysiwygEditor";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productActions from "src/store/product/actions";
import { productDetails } from "src/store/product/selectors";

const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _product = useSelector(productDetails);

  console.log(_product);

  const fetchProduct = async () => {
    const res = await dispatch(productActions.get());
  };

  const onViewOfferClick = () => {
    // navigate("/")
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="EditPage">
      <div className="px-4 lg:px-[200px]">
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
          <div className="col-span-1 hidden sm:flex">
            <Sidebar />
          </div>
          <div className="col-span-3 pt-3">
            <div className="block sm:flex justify-between items-center pb-3 ">
              <p>Offer Title</p>
              <button
                className="bg-primary px-3 py-1.5 text-white rounded-md"
                onClick={onViewOfferClick}
              >
                View Offer
              </button>
            </div>
            <div className="flex flex-col md:grid grid-cols-3 bg-white border border-gray-200">
              <div className="col-span-2 border border-r-1 border-gray-200">
                <img
                  src="src/assets/images/heroImage.png"
                  alt="/"
                ></img>
                <div className="p-3">
                  <input
                    type="text"
                    className="border border-gray-200 w-[100%] py-1.5 px-2 rounded-md outline-none"
                  />

                  <div className="pt-3">
                    <WysiwygEditor />

                    <div className="border border-gray-200 p-3 my-3 md:grid grid-cols-2 gap-3">
                      <div className="">
                        <div>
                          <p>Category</p>
                          <input
                            type="text"
                            className="outline-none border border-gray-200 w-[100%] px-2"
                          />
                        </div>
                        <div>
                          <p>TRL</p>
                          <select>
                            <option>TRL 1</option>
                            <option>TRL 1</option>
                            <option>TRL 1</option>
                            <option>TRL 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="">
                        <div>
                          <p>Business Model</p>
                          <input
                            type="text"
                            className="outline-none border border-gray-200 w-[100%] px-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 py-3">
                      <button>Cancel</button>
                      <button className="bg-primary text-white px-2 rounded-md py-1">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-3 pt-5">
                <div className="flex flex-col gap-4">
                  <p>Offered By</p>
                  <Logo className="w-[100%]" />
                  <div className="flex gap-5 items-center">
                    <div className="w-[50px]">
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

                  <div className="flex gap-1 text-gray-600">
                    <CiLocationOn className="w-[30px] mt-1" />
                    Jülicher Straße 72a, 52070 Aachen, Germany
                  </div>
                  <Map />
                </div>
              </div>
            </div>

            <div className="mt-3 p-3 bg-[#FFFFFF] border border-r-gray-200 mb-4">
              <p className="py-2">Video</p>
            </div>

            <div className="mt-3 p-3 bg-[#FFFFFF] border border-r-gray-200 mb-4">
              <p className="py-2">Offer details</p>
              <OfferDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditPage.defaultProps = {
  className: "",
};

EditPage.propTypes = {
  className: PropTypes.string,
};

export default EditPage;
