import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import { ThemeProvider } from './context/ThemeContext'; // 引入 Provider

function App() {
  return (
    <div className="App">
      {/* 👇 父组件 App 给子组件 Header 传 title 值 */}
      <Header title="我的个人博客" />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;