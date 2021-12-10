import React, { useEffect, useState } from "react";
import { client } from "../components/libs/api";
import ArticleBody from "../components/write/ArticleBody";
import ArticleFooter from "../components/write/ArticleFooter";
import ArticleTags from "../components/write/ArticleTags";
import ArticleTitle from "../components/write/ArticleTitle";

const Write = () => {
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "",
    date: "",
  });
  useEffect(() => {}, [articleData]);

  const createArticle = async () => {
    const { data } = client.get("article");
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;
    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약입니다.",
      thumbnail: "",
    });
  };
  const handlePost = async () => {};
  return (
    <div>
      <button onClick={handlePost}>Post</button>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags tags={articleData.tags} setArticleData={setArticleData} />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter />
    </div>
  );
};

export default Write;
