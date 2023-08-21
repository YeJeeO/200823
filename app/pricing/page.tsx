

import React from "react";
import { title } from "@/components/primitives";
import Image from 'next/image';

export default function PricingPage() {
  return (<div className="flex flex-col">
    <h1 className={title({ color: "violet" })}>Наша студия</h1><br />
    {/*           <p className="text-small text-default-500">nextui.org</p> */}
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      alt="icono de la app"
      width="70"
      height="70"
    />
  </div>
  )

}

