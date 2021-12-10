import React from "react";
import styled from "styled-components";
import PendingResult from "./PendingResult";
import RejectedResult from "./RejectedResult";
import Result from "./Result";

const Result2 = ({ userInfo, setUserInfo }) => {
  switch (userInfo.status) {
    case "idle":
      return <>idle</>;
    case "pending":
      return <PendingResult />;
    case "resolved":
      return <Result userInfo={userInfo.data} setUserInfo={setUserInfo} />;
    case "rejected":
      return <RejectedResult />;
    default:
      return <></>;
  }
};

export default Result2;
