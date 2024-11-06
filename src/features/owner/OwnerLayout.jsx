import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { useState } from "react";

function OwnerLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppLayout toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen}>
        <CustomNavLink to="dashboard" toggleSidebar={setIsSidebarOpen}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>

        <CustomNavLink to="projects" toggleSidebar={setIsSidebarOpen}>
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
