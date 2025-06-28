import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex">
        <div className="relative">
          <Sidebar />
          {/* Sidebar toggle button at the upper right of the sidebar, always visible */}
          <div className="absolute top-4 right-4 z-50">
            <SidebarTrigger />
          </div>

        </div>
        <main className="flex-1 md:ml-64">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
