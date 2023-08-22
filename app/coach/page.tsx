import React from "react";
import { title, subtitle} from "@/components/primitives";
import Image from 'next/image';
import coach from '@/public/coach1.jpg'; 
import coachTwo from '@/public/coach2.jpg'; 

export default function CoachPage() {
	return (
		<div  className="flex flex-col">
          <h1 className={title({ color: "violet" })}>Наши преподаватели</h1>
		  <br/>
		  <br/>
		  <h1 className={title({ color: "pink" })}>Иванна&nbsp;</h1>
		  <Image className="justify-center"
		   src={coach}
            alt="icop"
            placeholder="blur"
              />
		<h2 className={subtitle({ class: "mt-4" })}>Образование:</h2>
		<p className="text-small text-default-500">Новосибирский Государственный Педагогический Университет. Опыт работы более 10 лет.
Мастер-классы и обучение: DHI 2015, INSPIRATION DANCE FESTIVAL 2015, СИБ ПРО КАЧ 2015, MYDANCE CAMP 2016, Hot Dancehall and Vogue weekend 2016, WWDC 2016, DHI 2017, WWDC 2017, WWDC 2018, WWDC 2019.
Участвовал более чем в 70 всероссийских и международных хореографических конкурсах.
Танец для меня жизнь!
И запомните - не талантливых детей не бывает!
Слоган: Мы те, кого должны превзойти ученики наши. В этом — истинное бремя всех наставников.
2011-2023 - танцор и солист `KimTime ballet`
С 2011 - педагог, хореограф KimTime, г.Новосибирск
2007 - окончена музыкальная школа, г. Новосибирск</p>
<br/>
<h1 className={title({ color: "violet" })}>Виктория&nbsp;</h1>
          
		  <Image src={coachTwo}
            alt="icop"
            placeholder="blur"
              />
			<h2 className={subtitle({ class: "mt-4" })}>Образование:</h2>
		<p className="text-small text-default-500"> Новосибирский Государственный Педагогический Университет. Опыт работы более 10 лет.
Мастер-классы и обучение: DHI 2015, INSPIRATION DANCE FESTIVAL 2015, СИБ ПРО КАЧ 2015, MYDANCE CAMP 2016, Hot Dancehall and Vogue weekend 2016, WWDC 2016, DHI 2017, WWDC 2017, WWDC 2018, WWDC 2019.
Участвовал более чем в 70 всероссийских и международных хореографических конкурсах.
Танец для меня жизнь!
И запомните - не талантливых детей не бывает!
Слоган: Мы те, кого должны превзойти ученики наши. В этом — истинное бремя всех наставников.
2011-2023 - танцор и солист `KimTime ballet`
С 2011 - педагог, хореограф KimTime, г.Новосибирск
2007 - окончена музыкальная школа, г. Новосибирск</p>
		</div>
	);
}