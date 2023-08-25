'use client';
import { title } from "@/components/primitives";
import Image from 'next/image';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import lOgo from '../../img/logo_big.jpg'; 
import showOne from '../../img/show1.jpg';
import showTwo from '../../img/show2.jpg';
import showThree from '../../img/show3.jpg';


export default function EventPage() {
	return (<div className="container text-center justify-center mx-auto">
	           <p className={title({ color: "violet", size: "md"})}>Events</p>
             <Table fullWidth={true}>
      <TableHeader>
        <TableColumn>28/08/2023</TableColumn>
        <TableColumn>10/09/2023</TableColumn>
        <TableColumn>31/12/2023</TableColumn>
        <TableColumn>15/11/2023</TableColumn>
        <TableColumn>31/02/2024</TableColumn>
        <TableColumn>31/02/2024</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
            <Image className="justify-center"
        src={showOne}
        alt="icop"
        placeholder="blur"
        width="250"
         /> 
         </TableCell>
          <TableCell>
          <Image className="justify-center"
        src={showTwo}
        alt="icop"
        placeholder="blur"
  width="230"
         />
          </TableCell>
          <TableCell>
          <Image className="justify-center"
        src={showThree}
        alt="icop"
        placeholder="blur"
  width="300"
         />
          </TableCell>
          <TableCell>
          <Image className="justify-center"
        src={showTwo}
        alt="icop"
        placeholder="blur"
  width="230"
         />
          </TableCell>
          <TableCell>
          <Image className="justify-center"
        src={lOgo}
        alt="icop"
        placeholder="blur"
  width="300"
         />
          </TableCell> 
          <TableCell>
            <Image className="justify-center"
        src={showOne}
        alt="icop"
        placeholder="blur"
        width="250"
         /> 
        </TableCell>   
        </TableRow>
        <TableRow key="2">
          <TableCell> Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Sap</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Sap</TableCell>
           <TableCell> Reichert</TableCell>
        </TableRow>
        </TableBody>
    </Table>



       
 </div>
	);
}
