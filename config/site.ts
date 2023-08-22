export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "DanceWebProject",
	description: "With LOVE",
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
      href: "/timetable",
    },
    {
      label: "Мероприятия",
      href: "/event",
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
			href: "/timetable",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
			docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://vk.com/kimtime"
	},
};
