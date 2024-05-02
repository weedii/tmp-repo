import { NavLink } from "react-router-dom";
import { FaBoxesStacked } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";
import { GoAlertFill } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const SideBar = ({ menu }) => {
  const navItems = [
    {
      path: "products",
      tittle: "Products",
      icon: <FaBoxesStacked size={25} className="min-w-max" />,
    },
    {
      path: "orders",
      tittle: "Orders",
      icon: <LuClipboardList size={25} className="min-w-max" />,
    },
    {
      path: "alerts",
      tittle: "Alerts",
      icon: <GoAlertFill size={25} className="min-w-max" />,
    },
  ];

  return (
    <div
      className={`bg-white lg:w-[16rem]  min-h-screen h-full shadow-xl border-r-[1px] border-black overflow-hidden transition-all ease-out duration-200
      ${menu ? "w-[70%] fixed" : "w-0 relative"}`}
    >

        <div>
            <p className="text-3xl text-center mt-10 font-bold">E-shop</p>
        </div>

      <ul className="mt-20 px-2 flex flex-col gap-5 h-full">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.path}
              reloadDocument
              className="p-2 flex rounded-md gap-7 items-center cursor-pointer font-medium hover:bg-orange-600 hover:bg-opacity-20"
              style={({ isActive }) => {
                return isActive
                  ? { color: "white", backgroundColor: "#ec6034" }
                  : {};
              }}
            >
              {item.icon}
              {item.tittle}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
