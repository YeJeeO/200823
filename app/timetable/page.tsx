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
    />
    <Table>
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
       
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony </TableCell>
          <TableCell>CEO</TableCell>
  
        </TableRow>
        <TableRow key="2">
          <TableCell> Reichert</TableCell>
          <TableCell>CEO</TableCell>
  
        </TableRow>
        </TableBody>
    </Table>
    </div>

  )

}

