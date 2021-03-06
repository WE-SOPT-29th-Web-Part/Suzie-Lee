import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const ArticleTitle = ({ onDataChange, articleData }) => {
  return (
    <StyledTextarea
      placeholder="제목을 입력하세요."
      onChange={(e) => onDataChange("title", e.target.value)}
      value={articleData.title}
    />
  );
};

export default ArticleTitle;

const StyledTextarea = styled(TextareaAutosize)`
  /* react-textarea-autosize library 사용 */
  font-size: 36px;
  width: 100%;
  white-space: pre-wrap;
  height: auto;
`;
