'use client';
import { title, subtitle} from "@/components/primitives";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Image from 'next/image';
import coach from '@/public/9.jpg'; 
import coachTwo from '@/public/coach1.jpg'; 

export default function CoachPage() {
	return (
		<div  className="flex flex-col">
          <h1 className={title({ color: "violet" })}>Наши преподаватели</h1>
		  
	  <Card className="py-4 pb-10 pt-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col text-center justify-center ">
	  <h1 className={title({ color: "pink"})}>Иванна</h1>
	  <h2 className={subtitle({ class: "mt-4" })}>Образование:</h2>
	  <p className="text-small text-default-500">Новосибирский Государственный Педагогический Университет. Опыт работы более 10 лет.
Мастер-классы и обучение: DHI 2015, INSPIRATION DANCE FESTIVAL 2015, СИБ ПРО КАЧ 2015, MYDANCE CAMP 2016, Hot Dancehall and Vogue weekend 2016, WWDC 2016, DHI 2017, WWDC 2017, WWDC 2018, WWDC 2019.
Участвовала более чем в 70 всероссийских и международных хореографических конкурсах.
Танец для меня жизнь!
И запомните - не талантливых детей не бывает!
<h2 className={subtitle({ class: "mt-4"})}>Слоган: Мы те, кого должны превзойти ученики наши. В этом — истинное бремя всех наставников.</h2>
2011-2023 - танцор и солист `KimTime ballet`
С 2011 - педагог, хореограф KimTime, г.Новосибирск
2007 - окончена музыкальная школа, г. Новосибирск</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 text-center justify-center ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={coach}
          width={410}
        />
      </CardBody>
    </Card>
		  
	
		
<br/>
<Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col text-center justify-center ">
	  <h1 className={title({ color: "pink"})}>Василиса</h1>
	  <h2 className={subtitle({ class: "mt-4" })}>Образование:</h2>
	  <p className="text-small text-default-500 ">Новосибирский Государственный Педагогический Университет. Опыт работы более 10 лет.
Мастер-классы и обучение: DHI 2015, INSPIRATION DANCE FESTIVAL 2015, СИБ ПРО КАЧ 2015, MYDANCE CAMP 2016, Hot Dancehall and Vogue weekend 2016, WWDC 2016, DHI 2017, WWDC 2017, WWDC 2018, WWDC 2019.
Участвовала более чем в 70 всероссийских и международных хореографических конкурсах.
Танец для меня жизнь!
И запомните - не талантливых детей не бывает!
<h2 className={subtitle({ class: "mt-4"})}>Слоган: Мы те, кого должны превзойти ученики наши. В этом — истинное бремя всех наставников.</h2>
2011-2023 - танцор и солист `KimTime ballet`
С 2011 - педагог, хореограф KimTime, г.Новосибирск
2007 - окончена музыкальная школа, г. Новосибирск</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 text-center justify-center ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={coachTwo}
          width={600}
        />
      </CardBody>
    </Card>
		</div>
	);
}