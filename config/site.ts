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
	links: {
		docs: "https://github.com/YeJeeO",
        sponsor: "https://vk.com/kimtime"
	},
};
