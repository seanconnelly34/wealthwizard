import React from "react";
import moment from 'moment';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";
import data from "./data.json";

const Step1 = () => (
<>
<h1>Financial Documents</h1>
<Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>File Name</TableCell>
          <TableCell>Created At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/*Display array of file names and dates. */}
          {data.map(val => (
            <TableRow key={Math.random()}>
                <TableCell>{val.fileName}</TableCell>
                <TableCell>{moment(val.createdAt * 1000).format('LLLL')}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Paper>
  </>
);

export default Step1;
