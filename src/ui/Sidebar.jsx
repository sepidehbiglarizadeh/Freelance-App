import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

function Sidebar({ children, toggleSidebar, isOpen }) {
  return (
    <>
      <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4 hidden md:block">
        <ul className="flex flex-col gap-y-4">{children}</ul>
      </div>

      <div className="relative md:hidden">
        <div
          className={`fixed inset-y-0 right-0 w-64 transform transition-transform bg-secondary-0 border-l border-gray-200 p-4 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:relative md:w-auto`}
        >
          <button className="mb-6" onClick={() => toggleSidebar(false)}>
            <HiXMark className="w-6 h-6 text-secondary-600" />
          </button>
          <ul className="flex flex-col gap-y-4">{children}</ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
