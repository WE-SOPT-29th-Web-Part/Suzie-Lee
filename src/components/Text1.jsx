import React, { useCallback, useEffect, useState } from "react";

export default function Text1({ year, month, date }) {
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  const handleChange = (e) => {
    if (!e.target.value) {
      setInputValue("");
      setResultDate(`yyyy년 mm월 dd일`);
      return;
    }
    setInputValue(e.target.value);
    printDate(e.target.value);
  };
  const printDate = useCallback(
    (value) => {
      if (value === undefined || value === "") {
        setResultDate(`yyyy년 mm월 dd일`);
        return;
      }
      const tempDate = new Date();
      tempDate.setFullYear(year);
      tempDate.setMonth(Number(month) - 1);
      tempDate.setDate(Number(date) + Number(value) - 1);
      setResultDate(
        `${tempDate.getFullYear()}년 ${
          Number(tempDate.getMonth()) + 1
        }월 ${tempDate.getDate()}일`
      );
    },
    [year, month, date]
  );
  useEffect(() => {
    printDate(inputValue);
  }, [inputValue, printDate, year, month, date]);
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
