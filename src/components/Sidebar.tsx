
import { Home, Briefcase, User, Mail, Github, Linkedin, Twitter, Instagram, Archive } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navigationItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Projects', icon: Briefcase, path: '/projects' },
    { name: 'Experience', icon: User, path: '/experience' },
    { name: 'Archive', icon: Archive, path: '/archive' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/hannahqkim' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/hannahqkim/' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/kimhannah321' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/han.q.kim' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-sidebar-border">
        <img 
          src="/lovable-uploads/91097503-d60d-4a06-921e-9c88d99a67f5.png" 
          alt="Hannah Kim"
          className="w-12 h-12 rounded-full mb-3"
        />
        <h2 className="font-semibold text-sidebar-foreground">Hannah</h2>
        <p className="text-sm text-sidebar-foreground/70">ML/Data Engineer</p>
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
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
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
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/50 mb-3">Connect</p>
        <div className="space-y-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground rounded-lg transition-colors"
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
