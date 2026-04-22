import React from 'react';
import styles from './Header.module.css';

// 👇 手册要求：定义组件接收的 Props 类型
interface HeaderProps {
  title: string; // 接收一个字符串类型的 title
}

// 👇 给组件加上 Props 类型
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      {/* 👇 把写死的标题改成动态接收的 title */}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;