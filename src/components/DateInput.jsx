import React, { useEffect, useState } from "react";

export default function DateInput({
  year,
  month,
  date,
  setYear,
  setMonth,
  setDate,
}) {
  useEffect(() => {
    console.log(month);
  }, [year, month, date]);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };
  const makeDateToday = () => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
    setDate(now.getDate());
  };
  return (
    <div>
      <button onClick={makeDateToday}>오늘</button>
      <div>
        <input
          type="text"
          className="dateInput__input"
          value={year}
          onChange={(e) => {
            handleChange(e, setYear);
          }}
          //   onClick, onScroll, onKeyPress
        />
        년
        <input
          type="text"
          className="dateInput__input"
          value={month}
          onChange={(e) => {
            handleChange(e, setMonth);
          }}
        />
        월
        <input
          type="text"
          className="dateInput__input"
          value={date}
          onChange={(e) => {
            handleChange(e, setDate);
          }}
        />
        일을 기준으로
      </div>
    </div>
  );
}
