export default class PaymentDetails {
  constructor(
    fullName,
    email,
    phoneNumber,
    address,
    city,
    ccNumber,
    ccMonth,
    ccYear,
    frontImg,
    carColor,
    tireType,
    price,
    vin,
    orderNumber
  ) {
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.city = city;
    this.ccNumber = ccNumber;
    this.ccMonth = ccMonth;
    this.ccYear = ccYear;
    this.frontImg = frontImg;
    this.carColor = carColor;
    this.tireType = tireType;
    this.price = price;
    this.vin = vin;
    this.orderNumber = orderNumber;
  }
}
