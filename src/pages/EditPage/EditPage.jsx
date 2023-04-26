import PropTypes from "prop-types";
import Sidebar from "src/components/Sidebar";
import { CiLocationOn } from "react-icons/ci";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { ReactComponent as EditIcon } from "src/assets/icons/Edit.svg";
import Map from "src/components/utils/Map";
import OfferDetails from "src/components/OfferDetails";
import { useNavigate } from "react-router-dom";
import WysiwygEditor from "src/components/utils/WysiwygEditor";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as productActions from "src/store/product/actions";
import { productDetails, productLoader } from "src/store/product/selectors";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";

const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="#e8eaf6"
      strokeWidth="4"
      animationDuration="1"
      width="25"
      visible={true}
    />
  );
};

const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _product = useSelector(productDetails);
  const _loading = useSelector(productLoader);

  const [formData, setFormData] = useState({
    heading: "Intelligent Finite Elements in Structural mechanics",
    description: "",
    category: "",
    businessModel: "",
    trl: "",
    videoLink: "",
  });

  const [description, setDescription] = useState("");

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSaveClick = async () => {
    const reqData = {
      ...formData,
      description,
    };

    const res = await dispatch(productActions.update(reqData));
    if (res) {
      toast("Product updated Successfully");
      navigate("/product");
    }
  };

  const onViewOfferClick = () => {
    navigate("/");
  };

  return (
    <div className="EditPage">
      <div className="px-4 lg:px-[200px]">
        <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3">
          <div className="col-span-1 hidden sm:flex">
            <Sidebar />
          </div>
          <div className="col-span-3 pt-3">
            <div className="flex  justify-between items-center pb-3 ">
              <p>Offer Title</p>
              <button
                className="bg-primary px-3 py-1.5 text-white rounded-md"
                onClick={onViewOfferClick}
              >
                View Offer
              </button>
            </div>
            <div className="flex flex-col md:grid grid-cols-3 bg-white border border-gray-200 rounded-lg">
              <div className="col-span-2 border border-r-1 border-gray-200 relative rounded-tl-lg rounded-bl-lg ">
                <div className="absolute right-0 bg-white">
                  <EditIcon />
                </div>
                <img
                  className="rounded-tl-lg"
                  src={_product.picture}
                  alt="/"
                />
                <div className="p-3 rounded-bl-lg">
                  <input
                    type="text"
                    value={formData.heading}
                    name="heading"
                    onChange={onInputChange}
                    className="border border-gray-200 w-[100%] py-1.5 px-2 rounded-md outline-none"
                  />

                  <div className="pt-3 rounded-bl-lg">
                    <WysiwygEditor setDescription={setDescription} />

                    <div className="border border-gray-200 p-3 my-3 md:grid grid-cols-2 gap-3">
                      <div className="rounded-bl-lg">
                        <div className="pb-3">
                          <p>Category</p>
                          <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={onInputChange}
                            className="outline-none border border-gray-200 w-[100%] px-2 py-1"
                          />
                        </div>
                        <div>
                          <p>TRL</p>
                          <select
                            name="trl"
                            value={formData.trl}
                            onChange={onInputChange}
                            className="w-[100%] bg-white border border-gray-200 py-1 outline-none"
                          >
                            <option>Select TRL</option>
                            <option>TRL 1</option>
                            <option>TRL 2</option>
                            <option>TRL 3</option>
                            <option>TRL 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="py-3 md:py-0">
                        <div>
                          <p>Business Model</p>
                          <input
                            type="text"
                            name="businessModel"
                            value={formData.businessModel}
                            onChange={onInputChange}
                            className="outline-none border border-gray-200 w-[100%] px-2 py-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 py-3">
                      <button onClick={() => navigate("/product")}>
                        Cancel
                      </button>
                      <button
                        className="bg-primary text-white min-w-[60px] rounded-md py-1 flex justify-center"
                        onClick={onSaveClick}
                      >
                        {_loading ? <Spinner /> : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-3 pt-5">
                <div className="flex flex-col gap-4">
                  <p>Offered By</p>
                  <Logo className="w-[75%]" />
                  <div className="flex gap-5 items-center">
                    <div className="w-[50px]">
                      <img
                        className="rounded-full"
                        src={_product?.user?.profilePicture}
                        alt="/"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold text-md text-gray-600">{`${_product?.user?.firstName} ${_product?.user?.lastName}`}</p>
                      <p className="text-sm text-gray-600">Innoloft Gmbh</p>
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

            <div className="mt-4 px-5 py-5 bg-[#FFFFFF] border border-r-gray-200 mb-4 rounded-lg">
              <p className="pb-2">Video</p>
              <input
                type="text"
                name="videoLink"
                value={formData.videoLink}
                onChange={onInputChange}
                placeholder="Add a youtube or vimeo link"
                className="border border-gray-200 w-[100%] px-2 py-1 outline-none"
              />
            </div>

            <div className="mt-3 p-3 bg-[#FFFFFF] border border-r-gray-200 mb-4 rounded-lg">
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
