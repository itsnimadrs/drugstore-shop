import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader from "./TableHeader";
import StripedTableBody, { StripedTableBodyProps } from "../Widget/StripedTableBody";
import React from "react";

interface StripedTableProps extends StripedTableBodyProps {} 
const StripedTable = ({ columns, rowsData, actions }: StripedTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHeader columns={columns} />
        <StripedTableBody columns={columns} rowsData={rowsData} actions={actions} />
      </Table>
    </TableContainer>
  );
};

export default StripedTable;
