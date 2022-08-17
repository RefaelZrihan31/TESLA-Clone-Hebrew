import React, { useState } from "react";
import "../Style/AdminPage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PopupOrder from "./PopupOrder";

export default function OrdersTable() {
  const [allOrdersArr, setAllOrdersArr] = useState(
    localStorage.getItem("allOrders")
  );
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                מספר הזמנה
              </TableCell>

              <TableCell
                style={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                שם מלא
              </TableCell>
              <TableCell
                style={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                כתובת מייל
              </TableCell>

              <TableCell
                style={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                מספר טלפון
              </TableCell>

              <TableCell
                style={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                מספר שלדה
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {JSON.parse(allOrdersArr).map((row) => (
              <TableRow
                key={row.orderNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ fontSize: 16, color: "rgb(52,96,155)" }}
                  align="right"
                  component="th"
                  scope="row"
                >
                  {row.orderNumber}
                </TableCell>

                <TableCell style={{ fontSize: 16 }} align="right">
                  {row.fullName}
                </TableCell>

                <TableCell style={{ fontSize: 16 }} align="right">
                  {row.email}
                </TableCell>

                <TableCell style={{ fontSize: 16 }} align="right">
                  {row.phoneNumber}
                </TableCell>

                <TableCell style={{ fontSize: 16 }} align="right">
                  {row.vin}
                </TableCell>
                <TableCell>
                  <PopupOrder row={row}></PopupOrder>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
