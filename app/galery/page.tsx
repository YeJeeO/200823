

import React from "react";
import { title } from "@/components/primitives";
import Image from 'next/image';
import one from '@/public/1.jpg'; 

export default function GaleryPage() {
  return (<div className="flex flex-col">
    <h1 className={title({ color: "violet" })}>Фотографии</h1><br />
    {/*           <p className="text-small text-default-500">nextui.org</p> */}
	<Image src={one}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    />
  </div>
  )

}