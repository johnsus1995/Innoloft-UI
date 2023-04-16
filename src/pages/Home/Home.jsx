import PropTypes from "prop-types";
import Sidebar from "src/components/Sidebar";
import { AiOutlineRight, AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import Map from "src/components/utils/Map";

const Home = () => {
  return (
    <div className="Home">
      <div className="px-4 lg:px-[240px] h-[80vh] ">
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="hidden sm:flex">
            <Sidebar />
          </div>
          <div className="col-span-3">
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
            <div className="grid sm:grid-cols-3 grid-cols-1 bg-[#FFFFFF] ">
              <div className="col-span-2 border border-r-gray-200">
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
              <div className=" py-4 flex flex-col gap-4 px-3 border border-r-gray-200 border-l-0">
                <p>Offered By</p>
                <Logo className="w-[200px]" />
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
