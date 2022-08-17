import React, { useState } from "react";
import "../Style/AdminPage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function UsersTable() {
  const [tempUserArr, setTempUserArr] = useState(localStorage.getItem("users"));

  const deleteUser = (rowUser) => {
    const filterUserDel = JSON.parse(tempUserArr).filter((user) => {
      return user.email !== rowUser;
    });
    localStorage.setItem("users", JSON.stringify(filterUserDel));
    setTempUserArr(JSON.stringify(filterUserDel));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {JSON.parse(tempUserArr).map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Checkbox
                    icon={
                      <DeleteOutlinedIcon
                        onClick={() => deleteUser(row.email)}
                      />
                    }
                  />
                </TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
