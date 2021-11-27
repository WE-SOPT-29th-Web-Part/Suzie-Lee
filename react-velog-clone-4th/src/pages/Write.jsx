import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTag from "../components/write/ArticleTag";
import ArticleTitle from "../components/write/ArticleTitle";
import PublishScreen from "../components/write/PublishScreen/index";
import { client } from "../libs/api";
import { colors } from "../libs/constants/colors";

const Write = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state;
  console.log("location :>> ", location.state);
  const [articleData, setArticleData] = useState(
    article ?? {
      title: "",
      body: "",
      summary: "",
      tags: [],
      thumbnail: "",
    }
  );

  const [isPublishScreen, setIsPublishScreen] = useState(false);

  const createArticle = async () => {
    if (article) {
      await client.patch(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", {
      ...articleData,
    });
  };

  const handleDataChange = (key, value) => {
    //key: title,body,summary,thumbnail
    //value: e.target.value
    // title, body, summary, series, thumbnail의 변화에 적용ㅐ
    const tempArticleData = { ...articleData };
    //객체 복사 => 상태는 불변성을 유지해야한다.
    tempArticleData[key] = value;
    setArticleData(tempArticleData);
  };
  const handleArrDataChange = (key, value) => {
    // tag의 변화에 적용
    const tempArticleData = { ...articleData };
    tempArticleData[key] = [...tempArticleData[key], value];
    setArticleData(tempArticleData);
  };
  const handleArrDataRemove = (key, innerText) => {
    const tempArticleData = { ...articleData };
    tempArticleData[key] = tempArticleData[key].filter(
      (el) => el !== innerText
    );
    setArticleData(tempArticleData);
  };

  return (
    <StyledRoot>
      {console.log("articleData :>> ", articleData)}
      <StyledTop>
        <ArticleTitle
          articleData={articleData}
          onDataChange={handleDataChange}
        />
        <StyledMiddleLine />
        <ArticleTag
          articleData={articleData}
          tags={articleData.tags}
          handleArrDataChange={handleArrDataChange}
          onArrDataRemove={handleArrDataRemove}
        />
      </StyledTop>
      <ArticleBody articleData={articleData} onDataChange={handleDataChange} />
      <ArticleFooter setIsPublishScreen={setIsPublishScreen} />
      <PublishScreen
        articleData={articleData}
        summary={articleData.summary}
        onDataChange={handleDataChange}
        createArticle={createArticle}
        isPublishScreen={isPublishScreen}
        setIsPublishScreen={setIsPublishScreen}
      />
    </StyledRoot>
  );
};

export default Write;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledTop = styled.div`
  padding: 32px 48px 0 48px;
  width: 50%;
`;

const StyledMiddleLine = styled.div`
  width: 64px;
  height: 6px;
  background-color: ${colors.lightGray};
  margin: 24px 0;
`;
