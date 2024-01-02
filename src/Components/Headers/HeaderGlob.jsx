import { useState } from "react";
import notify from "../../assets/header/Noti.svg";
import close from "../../assets/cerrar.svg";
import { User } from "../../hook/UserData"; /// ===> traigo la data del usuario
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Search from "../Search/Search";
import { Link } from "react-router-dom";


export default function HeaderGlob({ onSearch }) {
  const { userData } = User();
  const redirectToHome = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const handleLogout = () => {
    Cookies.remove("user");
    redirectToHome("/");
  };

  return (
    <div>
      <header className="border-b-2  bg-white md:border-none">
        <nav>
          <div className="items-center h-[100px] justify-between px-5 md:flex md:items-center">
            <div>
              <div className="flex items-center justify-between ">
                <div className="flex ">
                  <div>
                   <Link to={"/Home"}> <h1 className="w-[340px] h-[50px] text-black text-[40px] font-normal font-['Lexend'] leading-snug">
                      DevSpaceX
                    </h1></Link>
                  </div>
                </div>
                <div className=" hidden md:block">
                  <Search onSearch={onSearch} />
                </div>

                <div className="md:hidden ">
                  <button
                    className="rounded-md mt-4 text-black outline-none focus:border focus:border-gray-400"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[38px] w-[48px] text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-black "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div
                className={`mt-5 flex-1 justify-self-center  pb-3 md:mt-0 md:block md:pb-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <nav className="mb-5 flex flex-col   md:mb-0 md:flex md:flex-row md:items-center md:justify-center md:gap-8">
                  <div className="flex justify-center items-center flex-col md:flex-row gap-4">
                    <img className="size-10" src={notify} alt="" />
                    <img
                      className="w-[45px] rounded-[50px]"
                      src={userData.Imagen}
                      alt="Usuario"
                    />
                    <img
                      className="size-5  cursor-pointer"
                      onClick={handleLogout}
                      src={close}
                      alt="Cerrar Sesion"
                    />
                    <nav className="mb-5 flex flex-col md:mb-0 md:flex md:flex-row md:items-center md:justify-center md:gap-8"></nav>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
