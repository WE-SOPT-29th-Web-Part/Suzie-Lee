import React, { useState } from "react";

export default function Text2({ year, month, date }) {
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="text">
      <div className="text__left">
        D-
        <input type="text" value={inputValue} onChange={handleChange} />
        는?
      </div>
      <div>{resultDate}</div>
    </div>
  );
}
