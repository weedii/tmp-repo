const NavBar = () => {
  return (
    <div className="h-16 bg-slate-100 sticky top-0 z-10 flex justify-center shadow-md">
      <div className="flex items-center justify-between px-14 w-full">
        <p className="text-lg md:text-2xl font-bold">E-Shop</p>

        <div className="flex items-center space-x-12 font-semibold">
          <p className="cursor-pointer hover:text-slate-600">NavBar</p>
          <p className="cursor-pointer hover:text-slate-600">NavBar</p>
          <p className="cursor-pointer hover:text-slate-600">NavBar</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
