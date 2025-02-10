import { FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import avatar from "../../assets/avatar.png";
import { useState } from "react";

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Login", href: "/login" },
  { id: 4, name: "Register", href: "/register" },
  { id: 5, name: "Dashboard", href: "/user-dashboard" },
  { id: 6, name: "Orders", href: "/orders" },
  { id: 7, name: "Cart Page", href: "/cart" },
  { id: 8, name: "Check Out", href: "/checkout" },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = true;

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="max-w-screen-2xl p-4 mx-auto relative">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <FaBars />
          </Link>
          <div className="relative">
            <IoSearchOutline className="absolute inline-block left-1 top-2" />
            <input
              type="search"
              name="search"
              id="search"
              className="bg-[#EAEAEA] focus:outline-none rounded-md py-1 pl-6"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            {currentUser ? (
              <>
                <button onClick={handleDropdown} className="cursor-pointer">
                  <img src={avatar} alt="Avatar" />
                </button>
                {/* Navigation */}
                {isDropdownOpen && (
                  <>
                    <div className="absolute w-48 top-16 right-0 bg-white shadow-lg rounded-md z-40">
                      <ul className="">
                        {navigation.map((nav) => {
                          return (
                            <li key={nav.id}>
                              <Link
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                                to={nav.href}
                              >
                                {nav.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </>
                )}
              </>
            ) : (
              <FaRegUser />
            )}
          </div>
          <button className="hidden md:block">
            <FaRegHeart />
          </button>
          <Link to="/about" className="bg-primary py-2 px-4 rounded-md">
            <div className="flex items-center gap-2">
              <CgShoppingCart />
              <div>0</div>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
