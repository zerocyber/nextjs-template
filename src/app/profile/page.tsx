'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from '../login/style.css';

interface UserInfo {
  name: string;
  email: string;
  createdAt: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('http://localhost:3080/api/auth/status', {
          credentials: 'include',
        });

        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          throw new Error(data.message || '상태 확인에 실패했습니다.');
        }
        
        setUserInfo(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : '상태 확인에 실패했습니다.');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3080/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('로그아웃에 실패했습니다.');
      }

      localStorage.removeItem('userInfo');
      router.push('/login');
    } catch (error) {
      alert(error instanceof Error ? error.message : '로그아웃에 실패했습니다.');
    }
  };

  if (loading) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <p>에러: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h1>프로필</h1>
        {userInfo && (
          <div>
            <div className={styles.inputGroup}>
              <label>이름</label>
              <p>{userInfo.name}</p>
            </div>
            <div className={styles.inputGroup}>
              <label>이메일</label>
              <p>{userInfo.email}</p>
            </div>
            <div className={styles.inputGroup}>
              <label>가입일시</label>
              <p>
                {new Date(userInfo.createdAt).toLocaleString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </div>
          </div>
        )}
        <button 
          onClick={handleLogout} 
          className={styles.button}
          style={{ marginTop: '20px' }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
} 