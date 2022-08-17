import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopupOrder({ row }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>
          {" "}
          <MoreVertIcon color="primary" />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              style={{ textDecoration: "underline", fontWeight: "bold" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              מספר הזמנה {row.orderNumber} #
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              שם: {row.fullName}
              <br />
              כתובת: {row.address} , {row.city}
              <br />
              אימייל: {row.email}
              <br />
              טלפון: {row.phoneNumber}
              <br />
              דגם: Model 3
              <br />
              צבע: {row.carColor}
              <br />
              גלגלים: {row.tireType}
              <br />
              מספר שלדה: {row.vin}
              <br />
              פרטי אמצעי תשלום: {row.ccNumber}
              <br />
              {row.ccYear} / {row.ccMonth}
              <br />
              מחיר לתשלום: {row.price} ₪
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
