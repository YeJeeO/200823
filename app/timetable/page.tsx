// import React from "react";
'use client';
import { title } from "@/components/primitives";
import Image from 'next/image';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import grath from '../../img/grath.jpg'; 

export default function TimetablePage() {
  return (<div> 
    	<h1 className={title({ color: "violet" })}>Расписание&nbsp;</h1>
      <Image
    src={grath}
    alt="icop"
    placeholder="blur"
    style={{objectFit: 'cover'}}
    fill={true}
    />
    
    <Table isStriped aria-label="collection table">
      <TableHeader>
        <TableColumn>ВРЕМЯ</TableColumn>
        <TableColumn>ПН</TableColumn>
        <TableColumn>ВТ</TableColumn>
        <TableColumn>СР</TableColumn>
        <TableColumn>ЧТВ</TableColumn>
        <TableColumn>ПТ</TableColumn>
        <TableColumn>СБ</TableColumn>
        </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>12:00 - 13:00</TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell>АЛМАЗЫ</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>17:00 - 18:00</TableCell>
          <TableCell>САПФИРЫ</TableCell>
          <TableCell> </TableCell>
          <TableCell> MandM </TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>18:00 - 19:00</TableCell>
          <TableCell> </TableCell>
          <TableCell>СФЕРА </TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell>БАЛЛЕТ </TableCell>
          <TableCell> </TableCell>
        </TableRow>
         <TableRow key="4">
          <TableCell>19:00 - 20:00</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>  </TableCell>
          <TableCell>CEO</TableCell>
          <TableCell> </TableCell>
          <TableCell>  </TableCell>
          <TableCell>CEO</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>21:00 - 22:00</TableCell>
          <TableCell> </TableCell>
          <TableCell>  </TableCell>
          <TableCell>ХОРЕО</TableCell>
          <TableCell> </TableCell>
          <TableCell> </TableCell>
          <TableCell>ХОРЕО</TableCell>
        </TableRow>
        </TableBody>
    </Table>
    </div>

  )

}

