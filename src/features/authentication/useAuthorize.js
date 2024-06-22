import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;

  // if (pathname.includes("owner")) {
  //   if (user && user.roel === "OWNER") isAuthorized = true;
  // }
  // if (pathname.includes("freelancer")) {
  //   if (user && user.roel === "FREELANCER") isAuthorized = true;
  // }
  // if (pathname.includes("ADMIN")) {
  //   if (user && user.roel === "ADMIN") isAuthorized = true;
  // }

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  return { isLoading, isAuthenticated, isAuthorized, user };
}
