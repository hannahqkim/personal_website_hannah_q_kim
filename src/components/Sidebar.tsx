import React, { useState } from 'react';
import { Home, Briefcase, User, Mail, Github, Linkedin, Twitter, Instagram, Archive, X, PanelLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTypedText } from '../hooks/useTypedText';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const jobTitles = [
    "ML Engineer",
    "AI Engineer",
    "Data Engineer",
    "Data Scientist",
    "Research Engineer",
    "Software Engineer"
  ];
  const typedText = useTypedText(jobTitles, 80, 1200);

  // Sidebar panel (sheet/drawer) for mobile
  const renderSidebarPanel = () => (
    <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
      <div className="absolute left-0 top-0 h-full w-64 bg-sidebar text-sidebar-foreground flex flex-col shadow-xl">
        {/* Close button at upper right */}
        <button
          className="absolute top-4 right-4 p-2 rounded hover:bg-sidebar-accent focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          <X className="w-6 h-6" />
        </button>
        {/* Profile section (optional) */}
        <div className="p-6 border-b border-sidebar-border flex flex-col items-center">
          <img 
            src="/lovable-uploads/0O6A4999_s.jpg" 
            alt="Hannah Kim"
            className="w-12 h-12 rounded-full mb-3"
          />
          <h2 className="font-semibold text-sidebar-foreground">Hannah</h2>
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
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Connect section (social links) */}
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
    </div>
  );

  // Skinny rail for mobile
  const renderRail = () => (
    <div className="fixed top-0 left-0 h-full z-40 flex flex-col items-center bg-sidebar border-r border-sidebar-border w-14 md:hidden">
      {/* Re-open button at top right of rail */}
      <button
        className="absolute top-4 right-2 p-2 rounded hover:bg-sidebar-accent focus:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
      >
        <PanelLeft className="w-6 h-6" />
      </button>
      {/* Navigation icons */}
      <nav className="flex flex-col gap-4 mt-16">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              }`
            }
          >
            <item.icon className="w-6 h-6" />
          </NavLink>
        ))}
      </nav>
    </div>
  );

  // Full sidebar for desktop
  const renderDesktopSidebar = () => (
    <div className="hidden md:fixed md:left-0 md:top-0 md:h-full md:w-64 md:bg-sidebar md:border-r md:border-sidebar-border md:flex md:flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-sidebar-border">
        <img 
          src="/lovable-uploads/0O6A4999_s.jpg" 
          alt="Hannah Kim"
          className="w-12 h-12 rounded-full mb-3"
        />
        <h2 className="font-semibold text-sidebar-foreground">Hannah</h2>
        <p className="text-sm text-sidebar-foreground/70 h-5">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
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

  return (
    <>
      {/* Mobile sidebar/rail */}
      {isOpen ? renderSidebarPanel() : renderRail()}
      {/* Desktop sidebar */}
      {renderDesktopSidebar()}
    </>
  );
};

export default Sidebar;
