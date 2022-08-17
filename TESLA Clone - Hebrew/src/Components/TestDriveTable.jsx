import React, { useState } from "react";
import "../Style/AdminPage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TestDriveTable() {
  const [tempTestDriveArr, setTempTestDriveArr] = useState(
    localStorage.getItem("testDrive")
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
                כתובת
              </TableCell>
              <TableCell
                style={{ fontSize: 20, fontWeight: "bold" }}
                align="center"
              >
                טלפון
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {JSON.parse(tempTestDriveArr).map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{ fontSize: 16 }}
                  align="right"
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell style={{ fontSize: 16 }} align="right">
                  {row.email}
                </TableCell>
                <TableCell style={{ fontSize: 16 }} align="right">
                  {row.address}
                </TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
