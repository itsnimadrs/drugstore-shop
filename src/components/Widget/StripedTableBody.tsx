import TableBody from "@mui/material/TableBody";
import StyledTableRow from "../mui-customized/styledTableRow";
import StyledTableCell from "../mui-customized/StyledTableCell";
import { ColumnType } from "../Widget/TableHeader";
import React from "react";

export interface StripedTableBodyProps {
  columns: ColumnType[];
  rowsData: any[];
  actions?: any; // be more specific later...
}

const renderCell = (row: any, column: ColumnType, actions: any = {}) =>
  column.content && column.key ? column.content(row, actions[column.key]) : row[column.path ?? "no-path!"];

const StripedTableBody = ({ columns, rowsData, actions }: StripedTableBodyProps) => {
  return (
    <TableBody>
      {rowsData.map(row => (
        <StyledTableRow key={row._id}>
          {columns.map((column: ColumnType) => (
            <StyledTableCell key={row._id + (column.path ?? column.key)} align={column.align ?? "center"}>
              {renderCell(row, column, actions)}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default StripedTableBody;
