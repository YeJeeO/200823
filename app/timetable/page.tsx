import React from "react";
import { title } from "@/components/primitives";
import Image from 'next/image';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import grath from '@/public/grath.jpg'; 

export default function TimetablePage() {
  return (<div> <Image
    src={grath}
    alt="icop"
    placeholder="blur"
    style={{objectFit: 'cover'}}
    fill={true}
    /></div>

  )

}

