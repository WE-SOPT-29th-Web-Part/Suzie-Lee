import React, { useEffect, useState } from "react";

const DateInput = (props) => {
  useEffect(() => {
    console.log(props.month);
  }, [props.year, props.month, props.date]);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };
  const makeDateToday = () => {
    const now = new Date();
    props.setYear(now.getFullYear());
    props.setMonth(now.getMonth() + 1);
    props.setDate(now.getDate());
  };
  return (
    <div>
      <button onClick={makeDateToday}>오늘</button>
      <div>
        <input
          type="text"
          className="dateInput__input"
          value={props.year}
          onChange={(e) => {
            handleChange(e, props.setYear);
          }}
          //   onClick, onScroll, onKeyPress
        />
        년
        <input
          type="text"
          className="dateInput__input"
          value={props.month}
          onChange={(e) => {
            handleChange(e, props.setMonth);
          }}
        />
        월
        <input
          type="text"
          className="dateInput__input"
          value={props.date}
          onChange={(e) => {
            handleChange(e, props.setDate);
          }}
        />
        일을 기준으로
      </div>
    </div>
  );
};

export default DateInput;
