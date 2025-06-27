
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
