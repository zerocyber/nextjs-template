'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './style.css';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다');
      }

      const userInfo = await response.json();

      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      
      router.push('/profile');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
    </div>
  );
}
