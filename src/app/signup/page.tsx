'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from '../login/style.css';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3080/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      const { statusCode, message } = await response.json();
      console.log(message);

      if (!response.ok || statusCode !== 201) {
        throw new Error(message);
      }

      alert('회원가입이 완료되었습니다.');
      router.push('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert(error || '회원가입에 실패했습니다.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            className={styles.input}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          가입하기
        </button>
      </form>
    </div>
  );
}
