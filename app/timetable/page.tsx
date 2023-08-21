import React from "react";
import { title } from "@/components/primitives";
import Image from 'next/image';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


export default function TimetablePage() {
  return (<Table>
      <TableHeader>
        <TableColumn>Day</TableColumn>
        <TableColumn>Coach</TableColumn>
        <TableColumn>Group</TableColumn>
      </TableHeader>
      </Table>

  )

}

