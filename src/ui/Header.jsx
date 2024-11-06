import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from "../features/authentication/Avatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header({ isOpen, toggleSidebar }) {
  const { isLoading } = useUser();

  return (
    <div className=" bg-secondary-0 py-4 border-b border-secondary-200 flex">
      <button className="p-3 md:hidden" onClick={toggleSidebar} >
        <RxHamburgerMenu className="w-6 h-6 text-secondary-600" />
      </button>
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <Avatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
