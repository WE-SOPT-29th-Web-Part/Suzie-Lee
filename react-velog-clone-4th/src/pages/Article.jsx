import React from "react";
import { useLocation } from "react-router";
import ArticleOptions from "../components/article/ArticleOptions";
import Header from "../components/common/Header";
import ImgWrapper from "../components/common/ImgWrapper";
import { StyledTag } from "../components/home/ArticleCard";
import Profile from "../components/home/Profile";

function Article(props) {
  //데이터를 넘기는 법 Link
  //데이터를 받는 방법 useLocation
  const location = useLocation();
  const { id, title, body, thumbnail, date, tags } = location.state;
  return (
    <div>
      {console.log("location :>> ", location.state)}
      <Header />
      <h1>{title}</h1>
      <ArticleOptions article={location.state} />
      <div>
        <span>이수진</span>
        <span>·</span>
        <span>{date}</span>
      </div>
      <StyledTag>
        {" "}
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </StyledTag>

      {thumbnail && (
        <ImgWrapper ratio="50%">
          <img src={thumbnail} alt="thumbnail" />
        </ImgWrapper>
      )}
      <div>{body}</div>
      <Profile />
    </div>
  );
}
export default Article;
