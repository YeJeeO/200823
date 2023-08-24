// import React from "react";
'use client';
import { title } from "@/components/primitives";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import Image from 'next/image';
import one from '../../img/1.jpg'; 
import two from '../../img/2.jpg'; 
import three from '../../img/3.jpg'; 
import four from '../../img/4.jpg'; 
import five from '../../img/5.jpg';
import six from '../../img/6.jpg'; 
import seven from '../../img/7.jpg';  

export default function GaleryPage() {
  return (<div className="flex flex-col">
    <h1 className={title({ color: "violet" })}>Фотографии</h1><br />

        <Table hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>   </TableColumn>
        <TableColumn>   </TableColumn>
        <TableColumn>   </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell><Image src={one}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
          <TableCell><Image src={two}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
          <TableCell><Image src={three}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src={four}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
          <TableCell><Image src={five}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
          <TableCell><Image src={six}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src={seven}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
          <TableCell><Image src={four}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
          <TableCell><Image src={one}
            alt="icop"
            placeholder="blur"
      width="450"
      height="300"
    /></TableCell>
        </TableRow>
      
      </TableBody>
    </Table>
  </div>
  )

}