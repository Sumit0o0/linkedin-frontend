export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Linkedin Clone",
  description: "Beautiful, fast and modern Linkedin Clone with Next.js",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Jobs",
      href: "/jobs",
    },
    {
      label: "Network",
      href: "/network",
    },
    {
      label: "Message",
      href: "/message",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
