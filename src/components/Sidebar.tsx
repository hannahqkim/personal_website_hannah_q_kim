import {
  Sidebar as AdvancedSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from './ui/sidebar';
import { Home, Briefcase, User, Archive, Github, Linkedin, Twitter, Instagram, PanelLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTypedText } from '../hooks/useTypedText';
import React from 'react';

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

const Sidebar = () => {
  const jobTitles = [
    "ML Engineer",
    "AI Engineer",
    "Data Engineer",
    "Data Scientist",
    "Research Engineer",
    "Software Engineer"
  ];
  const typedText = useTypedText(jobTitles, 80, 1200);
  const { state, toggleSidebar } = useSidebar();

  // Render the sidebar rail (skinny version)
  const renderRail = () => (
    <div className="fixed top-0 left-0 h-full z-40 flex flex-col items-center bg-sidebar border-r border-sidebar-border w-14">
      {/* Re-open button (custom, not SidebarTrigger) */}
      <button
        className="mt-4 mb-6 p-2 rounded hover:bg-sidebar-accent focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <PanelLeft className="w-6 h-6" />
      </button>
      {/* Navigation icons */}
      <nav className="flex flex-col gap-4 mt-2">
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

  return (
    <>
      {/* Show rail when sidebar is collapsed */}
      {state === 'collapsed' && renderRail()}
      <AdvancedSidebar collapsible="icon">
        <SidebarContent>
          <SidebarHeader>
            <div className="p-6 border-b border-sidebar-border flex flex-col items-center">
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
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
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
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarFooter>
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
          </SidebarFooter>
        </SidebarContent>
      </AdvancedSidebar>
    </>
  );
};

export default Sidebar;
