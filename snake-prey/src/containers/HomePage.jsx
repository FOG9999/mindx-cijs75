import { useState } from "react";
import * as utils from "../utils/index";

// functional component
const HomePage = () => {
  const [arrayNames, setArrayNames] = useState([
    {
      name: "name1",
    },
    {
      name: "name2",
    },
    {
      name: "name3",
    },
    {
      name: "name4",
    },
    {
      name: "name5",
    },
    {
      name: "name6",
    },
    {
      name: "name7",
    },
  ]);

  setTimeout(() => {
    // arrayNames = [1,3,535]; // mutate 1 state
    // immutable
    let cloneArrayNames = [...arrayNames];
    setArrayNames(cloneArrayNames);
  })
  const phoneNumber = "09457894561";
  const isValidPhoneNumber = utils.validatePhoneNumber(phoneNumber);

  const renderNames = () => {
    return arrayNames.map((name, index) => {
      return (
        <div key={index}>
          Name {index + 1}: {name.name}
        </div>
      );
    });
  };


  // cache lại các dữ liệu, các giá trị, các hàm để lần sau khi mà re-render thì react đừngcó làm lại những cái thao tác mà tốn tài nguyên như thế nữa

  return (
    <>
      <div
        className="homepage"
        style={{ backgroundColor: "white", zIndex: "100" }}
      >
        HomePage. Your phoneNumber is {phoneNumber},{" "}
        {isValidPhoneNumber
          ? "is a valid phone number"
          : "is not a valid phone number"}
      </div>
      <div>{renderNames()}</div>
    </>
  );
};

export default HomePage;
