import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";

const WrapperAdmin = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <div className="min-h-screen flex">
      <div className={`w- h-full z-20 bg-transparent fixed`} ref={menuRef}>
        <span onClick={toggleMenu} className="fixed top-5 right-5 lg:hidden">
          {menu ? (
            <TfiClose size={20} color="#ec6034" />
          ) : (
            <CiMenuFries size={24} color="#ec6034" />
          )}
        </span>
        <SideBar menu={menu} />
      </div>

      <div className="bg-white w-full h-full pt-16 lg:pl-64">
        <Outlet />
      </div>
    </div>
  );
};

export default WrapperAdmin;
