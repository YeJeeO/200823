import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Image from 'next/image';
import studiaOne from '@/public/Studia 1.jpg'; 
import studiaTwo from '@/public/Studia 2.jpg'; 
import grant from '@/public/64.jpg'; 

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-5lg justify-center">
			
				<h1 className={title({ color: "violet" })}>Наша студия&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
				Танцевальная студия г. Новосибирск
Обладатель Гран-при всероссийских и международных фестивалей и конкурсов. 
Хореография в Новосибирске хореографическая студия
			  
Хореография очень ярко представлена в нашей студии. Она разделяется на классическую и современную.<br />
<Image className="justify-center"
        src={studiaTwo}
        alt="icop"
        placeholder="blur"
  width="400"
         />

Наша хореографическая школа основана в 2007 году. Мы победители многих чемпионатов и конкурсов. 
Исполнительское мастерство учеников отмечено дипломами на различных фестивалях города.
			  
Мы успешно обучаем современной и классической хореографии, выступаем на концертах, участвуем в соревнованиях, конкурсах. Каждые полгода проводим отчётные выступления на лучших площадках города.
Для некоторых учеников, прошедших обучение, хореография стала профессией. Многие из них уже сами профессиональные педагоги хореографы и успешно работают в хореографических организациях Новосибирска.
KimTime активно ведёт благотворительную деятельность.  <br />
<Image className="justify-center"
        src={studiaOne}
        alt="icop"
        placeholder="blur"
  width="400"
         />
		
Мы являемся спонсорами благотворительных концертов `Новосибирск`, `Улыбнёмся вместе`. Мы научим танцевать, поможем почувствовать дух сцены и стать артистом. Направления: club dance, vogue, break dance, hip-hop, jazz funk, dancehall, contemporary, балет, хореография для детей.
Основателем и директором является выпускник Российской академии театрального искусства (ГИТИС) г. Москва, педагог-хореограф высшей категории  Новосибирского государственного хореографического училища, лауреат премии губернатора Новосибирской области в сфере культуры и искусства Михаил Колтунов.	
				</h2>
				<h1 className={title({color:"pink"})}>
				Детская хореографическая студия в Новосибирске
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>Заниматься хореографией можно с 3 лет. Наши преподаватели могут многому научить. 
  Они и сами продолжают развитие и проходят стажировки у иностранных хореографов. 
  Например: dancehall queen SHISHA (Франция), Buddha Stretch (USA), Michel Tinho (Бразилия), Ill Kozby (USA), Brian Green (USA).
  На занятиях мы стремимся раскрыть у каждого скрытые возможности тела. Развить творческую активность. 
  Мы организовываем разные дополнительные тренинги, которые выявляют потенциал учеников. Постоянно работаем над усовершенствованием программы уроков. Проводим обучение танцам.
Занятия хореографией в Новосибирске KimTime
  У нас единая методика занятий, которую контролирует художественный руководитель. Перед концертами проводятся дополнительные репетиции. Кто желает заниматься более интенсивно предусмотрены посещения нескольких групп. Группы делятся по уровню подготовки и возрасту. На протяжении года открываются новые группы для занятий. С нами при желании Вы можете стать профессиональным хореографом.
 Возраст от 3-17 лет и взрослые
   Тренировки могут посещать все желающие без ограничений и вступительных отборов. 
   Есть уроки по возрастам 4-5 и 6 лет для самых маленьких с 3 лет. 
   Группы по современным стилям: 5-6, 7-9, 10-12, 13-16, 17-20 и 20 и без ограничений. 
   Хореографический коллектив KimTime постоянный участник соревнований. 
   С нашими командами мы выезжаем на фестивали в другие города. 
   За полугодие проходит не менее двух больших концертов. 
   На нашем счету есть и полноценные спектакли
   </h2>
   <Image
        src={grant}
        alt="icop"
        placeholder="blur"
		className="inline-block justify-center"
  width="350"         />
			</div>

		</section>
	);
}