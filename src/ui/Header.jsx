import Avatar from "../features/authentication/Avatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { user, isLoading } = useUser();

  return (
    <div className=" bg-secondary-0 py-4 px-8 border-b border-secondary-200">
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
