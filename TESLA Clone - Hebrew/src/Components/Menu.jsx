import React from "react";
import "../Style/Menu.css";
import MenuItems from "../Components/MenuItems";

export default function Menu() {
  //email, name, pass, address
  const users = [
    { email: "Admin@tesla.com", name: "Admin", pass: "102030", address: "USA" },
    {
      email: "refael@gmail.com",
      name: "רפאל זריהן",
      pass: "123456",
      address: "הארז 21",
    },
    {
      email: "barak@gmail.com",
      name: "ברק שטיין",
      pass: "123456",
      address: "הצוללת דקר",
    },
  ];
  const testDrive = [
    {
      email: "avi@tesla.com",
      name: "Avi Cohen",
      phoneNumber: "0524257981",
      address: "הנביאים פרדס חנה",
    },
    {
      email: "fgk@tesla.com",
      name: "Golan Cohen",
      phoneNumber: "0554117981",
      address: "הדקלים ,נהריה",
    },
    {
      email: "plp@tesla.com",
      name: "Adi Cohen",
      phoneNumber: "0524257988",
      address: "המייסדים 4, חיפה",
    },
    {
      email: "jojo@tesla.com",
      name: "Zohar Cohen",
      phoneNumber: "054688847",
      address: "הרקפת 23 , לוד",
    },
  ];

  const ordersPayment = [
    {
      fullName: "רפאל זריהן",
      email: "refael@gmail.com",
      phoneNumber: "0524257981",
      address: "הארז 21",
      city: "בנימינה",
      ccNumber: "45806356789456",
      ccMonth: "12",
      ccYear: "2028",
      frontImg: "/static/media/m3_white_aero1.d874b6ced5482e3b88a8.jpeg",
      carColor: "לבן פנינה בציפוי רב-שכבתי כלול",
      tireType: '18" Aero',
      price: "174990",
      vin: "1J7KC23D0WN4D555Z",
      orderNumber: "kzxa5524",
    },
    {
      fullName: "ברק שטיין",
      email: "barak@gmail.com",
      phoneNumber: "0544357954",
      address: "הצוללת דקר",
      city: "חיפה",
      ccNumber: "4580136547920113",
      ccMonth: "06",
      ccYear: "2025",
      frontImg: "/static/media/m3_white_aero1.d874b6ced5482e3b88a8.jpeg",
      carColor: "לבן פנינה בציפוי רב-שכבתי כלול",
      tireType: '18" Aero',
      price: "174990",
      vin: "1B7KC22D0XN8N899F",
      orderNumber: "kzxa5222",
    },
  ];

  let usersArr = JSON.parse(localStorage.getItem(`users`));

  let testDriveArr = JSON.parse(localStorage.getItem(`testDrive`));

  let allOrdersArr = JSON.parse(localStorage.getItem(`allOrders`));

  const LoadTestDriveArr = () => {
    if (testDriveArr === null || testDriveArr.length === 0) {
      localStorage.testDrive = JSON.stringify(testDrive);
    }
  };

  const LoadUsers = () => {
    if (usersArr === null || usersArr.length === 0) {
      localStorage.users = JSON.stringify(users);
    }
  };

  const LoadAllOrders = () => {
    if (allOrdersArr === null || allOrdersArr.length === 0) {
      localStorage.allOrders = JSON.stringify(ordersPayment);
    }
  };

  return (
    <div className="menu">
      <MenuItems title="הרשמה" pathName="/register" />
      <MenuItems
        onClick={[LoadUsers(), LoadAllOrders()]}
        title="התחברות"
        pathName="/login"
      />
      <MenuItems
        onClick={LoadTestDriveArr()}
        title="נסיעת מבחן"
        pathName="/testdrive"
      />
    </div>
  );
}
