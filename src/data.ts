// src/data.ts
export interface Post {
    id: number;
    title: string;
    content: string;
  }
  
  export const posts: Post[] = [
    { id: 1, title: "第一篇博客", content: "这是从动态数据渲染的内容" },
    { id: 2, title: "第二篇博客", content: "React + TypeScript 真好用" }
  ];