import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function UserProfileDetails({ logedUser }) {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-read-only-input"
            label="שם מלא"
            defaultValue={logedUser.fullName}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="אימייל"
            defaultValue={logedUser.email}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-read-only-input"
            label="מספר טלפון"
            defaultValue={logedUser.phoneNumber}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="כתובת"
            defaultValue={logedUser.address}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-read-only-input"
            label="עיר"
            defaultValue={logedUser.city}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="מספר שלדה"
            defaultValue={logedUser.vin}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
      </Box>
    </div>
  );
}
