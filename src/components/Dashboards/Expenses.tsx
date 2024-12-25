import React from "react";
import { BsThreeDots } from "react-icons/bs";
import expenseLogo1 from "../../../public/assests/expenseLogo1.png";
import expenseLogo2 from "../../../public/assests/expenseLogo2.png";
import expenseLogo3 from "../../../public/assests/expenseLogo3.png";
import expenseLogo4 from "../../../public/assests/expenseLogo4.png";
import expenseLogo5 from "../../../public/assests/expenseLogo5.png";
import expenseLogo6 from "../../../public/assests/expenseLogo6.png";
import expenseLogo7 from "../../../public/assests/expenseLogo7.png";
import Image from "next/image";

export default function Expenses() {
  const data = [
    {
      logo: expenseLogo1,
      name: "Amazon",
      price: "-$5K",
    },
    {
      logo: expenseLogo2,
      name: "Spotify",
      price: "-$50",
    },
    {
      logo: expenseLogo3,
      name: "Netflix",
      price: "-$200",
    },
    {
      logo: expenseLogo4,
      name: "Adobe",
      price: "-$20K",
    },
    {
      logo: expenseLogo5,
      name: "Apple",
      price: "-$30K",
    },
    {
      logo: expenseLogo6,
      name: "Airbnb",
      price: "-$7K",
    },
    {
      logo: expenseLogo7,
      name: "Google",
      price: "-$70",
    },
  ];
  return (
    <div className="expenses">
      <div className="expenses__info">
        <h4>Expenses</h4>
        <BsThreeDots />
      </div>
      <div className="expenses__container">
        {data.map((expense) => {
          return (
            <div className="expense">
              <Image src={expense.logo} alt="imagen" width={64} height={50} />
              <h4 className="expense__title">{expense.name}</h4>
              <h6 className="expense__price">{expense.price}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
