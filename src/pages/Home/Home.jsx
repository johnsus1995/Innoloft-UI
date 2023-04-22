import PropTypes from "prop-types";
import Sidebar from "src/components/Sidebar";
import { AiOutlineRight, AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import Map from "src/components/utils/Map";
import IFrame from "src/components/IFrame";
import OfferDetails from "src/components/OfferDetails";

const Home = () => {
  return (
    <div className="Home">
      <div className="px-4 lg:px-[200px]">
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
          <div className="col-span-1 hidden sm:flex">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <div className="block sm:flex justify-between items-center">
              <nav className=" py-4">
                <ol className="list-reset flex text-gray-500">
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600"
                    >
                      <AiOutlineHome className="mt-[3px]" />
                    </a>
                  </li>
                  <li className="mx-2">
                    <AiOutlineRight className="mt-[3px]" />
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600"
                    >
                      Offers
                    </a>
                  </li>
                  <li className="mx-2">
                    <AiOutlineRight className="mt-[3px]" />{" "}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-blue-600"
                    >
                      Intelligent Finite Elements in Structural mechanics
                    </a>
                  </li>
                </ol>
              </nav>
              <button className="bg-primary w-[50px] h-[35px] text-white rounded-md">
                Edit
              </button>
            </div>
            <div className="flex flex-col md:grid grid-cols-3 bg-white border border-gray-200">
              <div className="col-span-2 border border-r-1 border-gray-200">
                <img
                  src="src/assets/images/heroImage.png"
                  alt="/"
                ></img>
                <div className="p-3">
                  <p className="font-bold">
                    Intelligent Finite Elements in Structural mechanics
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
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
              <div className="mt-3 p-4 bg-[#FFFFFF] border border-r-gray-200">
                <p>Video</p>
                <div className="px-[50px] py-3">

                <IFrame width="715" height="300"/>
                </div>
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

Home.defaultProps = {
  className: "",
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
