import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogoutUser from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogoutUser();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
}

export default Logout;
