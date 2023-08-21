import React from "react";
import { title} from "@/components/primitives";
import Image from 'next/image';
import coach from '@/public/coach1.jpg'; 

export default function CoachPage() {
	return (
		<div  className="flex flex-col">
          <h1 className={title({ color: "violet" })}>Наши преподаватели</h1><br/>
          
		  <Image src={coach}
            alt="icop"
            placeholder="blur"
        fill={true}
        />
		<h1 className={title({ color: "violet" })}>Иванна</h1>
		<p className="text-small text-default-500">nextui.org</p>
		</div>
	);
}