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
			label1: "Главная",
			href: '/',
		},
    
    {
			label2: "Мероприятия",
      href: "/event",
		},
    {
      label3: "Расписание",
      href: "/timetable",
    },
    {
      label4: "Педагоги",
      href: "/coach",
    },
	
		
	],
	links: {
        sponsor: "https://vk.com/kimtime"
	},
};
