export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "DanceWebProject",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "О нас",
			href: "/",
		},
    {
      label: "Педагоги",
      href: "/coach",
    },
    {
      label: "Расписание",
      href: "/pricing",
    },
    {
      label: "Мероприятия",
      href: "/blog",
    },
    {
      label: "Галерея",
      href: "/galery",
    }
	],
	navMenuItems: [
			{
			label: "Главная",
			href: "/",
		},
		{
			label: "Расписание",
			href: "/pricing",
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
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
