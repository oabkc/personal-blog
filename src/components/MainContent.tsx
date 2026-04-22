import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';

interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  contentSections: {
    title: string;
    text: string;
    code?: string;
  }[];
  tags: string[];
}

const MainContent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 1,
      title: "理解 JavaScript 闭包",
      date: "2030-08-10",
      author: "李铁蛋",
      contentSections: [
        {
          title: "什么是闭包",
          text: "闭包是指有权访问另一个函数作用域中变量的函数。",
          code: "function outer() { let x = 10; return function inner() { console.log(x); } }"
        }
      ],
      tags: ["JavaScript", "前端"]
    },
    {
      id: 2,
      title: "React Hooks 入门",
      date: "2030-08-11",
      author: "李四",
      contentSections: [
        {
          title: "useState 介绍",
          text: "useState 是 React 中最基础的 Hook，用于在函数组件中管理状态。"
        }
      ],
      tags: ["React", "前端"]
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setArticles(prevArticles => {
        const newArticles = [...prevArticles];
        if (newArticles.length > 0) {
          newArticles[0].contentSections[0].text = "自动更新时间：" + new Date().toLocaleTimeString();
        }
        return newArticles;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.mainContent}>
      {articles.map((article) => (
        <div key={article.id} className={styles.article}>
          <h3>{article.title}</h3>
          <p className={styles.meta}>
            {article.date} · {article.author}
          </p>
          {article.contentSections.map((section, idx) => (
            <div key={idx} className={styles.section}>
              <h4>{section.title}</h4>
              <p>{section.text}</p>
              {section.code && <pre><code>{section.code}</code></pre>}
            </div>
          ))}
          <div className={styles.tags}>
            {article.tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>#{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;