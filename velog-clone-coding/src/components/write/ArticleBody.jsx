import React from 'react'

const ArticleBody = () => {
    const handleChange = ({ setArticleData }) => (
        setArticleData((articleData)=>({
            ...articleData,
            title:e.target.value
        }))
     
    return (
        <textarea onChange={handleChange}>
            
        </textarea>
    )
}

export default ArticleBody
