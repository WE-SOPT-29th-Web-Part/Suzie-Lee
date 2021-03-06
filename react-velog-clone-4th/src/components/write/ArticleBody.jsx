import React from "react";
import styled from "styled-components";

const ArticleBody = ({ articleData, onDataChange }) => {
  return (
    <StyledTextarea
      placeholder="당신의 이야기를 적어보세요..."
      value={articleData.body}
      onChange={(e) => onDataChange("body", e.target.value)}
    ></StyledTextarea>
  );
};

export default ArticleBody;

const StyledTextarea = styled.textarea`
  flex: 1;
  width: 50%;
  white-space: pre-wrap;
  padding: 0 48px;
  font-size: 18px;
`;
