
import { Home, User, Code, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navigationItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Skills', icon: Code, path: '/skills' },
    { name: 'Projects', icon: Briefcase, path: '/projects' },
    { name: 'Experience', icon: User, path: '/experience' },
    { name: 'Contact', icon: Mail, path: '/contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/hannahqkim/' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <img 
          src="/lovable-uploads/91097503-d60d-4a06-921e-9c88d99a67f5.png" 
          alt="Hannah Kim"
          className="w-12 h-12 rounded-full mb-3"
        />
        <h2 className="font-semibold text-gray-900">Hannah</h2>
        <p className="text-sm text-gray-600">ML/Data Engineer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-3">Connect</p>
        <div className="space-y-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <social.icon className="w-4 h-4 mr-3" />
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
