import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import AboutPage from '../pages/AboutPage';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        {/* Theme toggle button in the upper right corner */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {/* Sidebar toggle button for mobile */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <SidebarTrigger />
        </div>
        {/* Sidebar with tinted background */}
        <div className="w-14 md:w-64 bg-[#f5f5f4] border-r border-gray-200">
          <Sidebar />
        </div>
        {/* Main content with soft gradient background */}
        <main className="flex-1 ml-14 md:ml-0 bg-gradient-to-br from-[#f8fafc] via-[#f3f4f6] to-[#fdf6ee] min-h-screen">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
