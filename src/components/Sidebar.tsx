
import styles from './Sidebar.module.css';
import myAvatar from '../assets/tom1.png';
import partner1Img from '../assets/jerry1.png';
import partner2Img from '../assets/dog1.png';
import React, { useEffect, useState } from 'react';
// 注意：你需要准备自己的图片，或使用在线图片
// import pzPng from '../assets/peizheng.png';
// import baiduPng from '../assets/baidu.png';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {/* 作者简介（社交证明） */}
      <section className={styles.widget}>
        <h3>关于作者</h3>
        <div className={styles.authorInfo}>
          <img
            src={myAvatar}
            alt="玉米炸鸡蛋"
            className={styles.avatar}
          />
          <p>玉米炸鸡蛋，网络工程专业大三生，学习计算机第三年，这是我的个人博客</p>
        </div>
      </section>

      {/* 社交链接（信任元素） */}
      <section className={styles.widget}>
        <h3>关注我</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#" aria-label="GitHub">GitHub</a></li>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
        </ul>
      </section>

      {/* 订阅 CTA（行动号召） */}
      <section className={`${styles.widget} ${styles.ctaWidget}`}>
        <h3>订阅更新</h3>
        <p>获取最新的文章和技术干货，每周发送一次，随时退订。</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="你的邮箱" required />
          <button type="submit">订阅</button>
        </form>
      </section>

      {/* 合作伙伴 logo（社交证明） */}
      <section className={styles.widget}>
        <h3>合作伙伴</h3>
        <div className={styles.partners}>
          {/* 使用占位图片或自己的图片 */}
          <img src={partner1Img} alt="合作伙伴1" className={styles.partnerLogo} />
        <img src={partner2Img} alt="合作伙伴2" className={styles.partnerLogo} />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;