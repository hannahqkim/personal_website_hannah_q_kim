import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import AboutPage from '../pages/AboutPage';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar toggle button for mobile */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <SidebarTrigger />
        </div>
        <Sidebar />
        <main className="ml-14 md:ml-64">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
