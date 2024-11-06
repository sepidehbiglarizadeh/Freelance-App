import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to ,toggleSidebar}) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 p-2 py-1.5 rounded-lg transition-all duration-300";

  return (
    <li >
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `bg-primary-100/80 text-primary-900 ${navLinkClass}`
            : `${navLinkClass} text-secondary-600`
        }
        onClick={() => toggleSidebar(false)}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
