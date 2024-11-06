import {
  HiCollection,
  HiHome,
  HiUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { useState } from "react";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppLayout toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen}>
        <CustomNavLink to="dashboard" toggleSidebar={setIsSidebarOpen}>
          <HiHome />
          <span>داشبورد</span>
        </CustomNavLink>
        <CustomNavLink to="users" toggleSidebar={setIsSidebarOpen}>
          <HiUser />
          <span>کاربران</span>
        </CustomNavLink>
        <CustomNavLink to="projects" toggleSidebar={setIsSidebarOpen}>
          <HiOutlineViewGrid />
          <span>پروژه ها</span>
        </CustomNavLink>
        <CustomNavLink to="proposals" toggleSidebar={setIsSidebarOpen}>
          <HiCollection />
          <span>درخواست ها</span>
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
