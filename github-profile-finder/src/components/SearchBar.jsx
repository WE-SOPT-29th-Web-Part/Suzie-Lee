import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchBar = ({ setUserInfo }) => {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserInfo((currentUserInfo) => ({
      ...currentUserInfo,
      status: "pending",
      data: null,
    }));
    try {
      console.log("here");
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      console.log(data);
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: data,
        status: "resolved",
      }));
    } catch (error) {
      setUserInfo((currentUserInfo) => ({
        ...currentUserInfo,
        data: null,
        status: "rejected",
      }));
      console.log(error);
    }

    setUser("");
  };
  //상태를 정의 했을때 상황에 따라 어떤 화면을 보여줄 지 결정해준다.

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={user}
        onChange={handleChange}
        type="text"
        placeholder="Github 프로필을 검색해보세요"
      />
    </form>
  );
};

export default SearchBar;

const Input = styled.input`
  width: 320px;
  height: 57px;
  padding: 16px;
  color: rgb(229, 230, 231);
  background-color: rgb(36, 39, 43);
  outline: none;
  border: 8px solid rgba(105, 105, 105, 0.5);
  border-radius: 20px;
`;
