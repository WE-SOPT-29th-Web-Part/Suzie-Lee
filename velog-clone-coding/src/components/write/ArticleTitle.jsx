import React from "react";

const ArticleTitle = ({ setArticleData }) => {
  const handleChange = ({ setArticleData }) => (
     setArticleData((articleData)=>({
         ...articleData,
         title:e.target.value
     }))
  
  return (
    <textarea
      placeholder="제목을 입력하세요."
      onChange={handleChange}
    ></textarea>
  );
)

export default ArticleTitle;
