import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout({ children, toggleSidebar}) {
  return (
    <div className="md:grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header toggleSidebar={toggleSidebar} />
      {/* <Sidebar /> */}
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto h-[90vh]">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

// owner, admin, freelancer (multi app layout)
// owner => dashboard, project,...
// freelancer => dashboard, proposals,tnx,...
// admin => users, projects, proposals,...
