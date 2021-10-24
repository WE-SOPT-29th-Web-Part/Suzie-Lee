import React, { useEffect, useState } from "react";

export default function Text1({ year, month, date }) {
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const printDate = (value) => {
    const tempDate = new Date();
    tempDate.setFullYear(Number(year));
    tempDate.setMonth(Number(month) - 1);
    tempDate.setDate(Number(date) + Number(value) - 1);
    const result = `${tempDate.getFullYear()}년 ${
      tempDate.getMonth() + 1
    }월 ${tempDate.getDate()}일`;
    setResultDate(result);
  };
  useEffect(() => {
    printDate(inputValue);
  }, [year, month, date]);
  return (
    <div className="text">
      <div className="text__left">
        <input type="text" value={inputValue} onChange={handleChange} />
        일째 되는 날은?
      </div>
      <div>{resultDate}</div>
    </div>
  );
}
