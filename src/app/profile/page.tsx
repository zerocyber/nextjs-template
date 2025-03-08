'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './style.css';

interface UserProfile {
  name: string;
  email: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3080/api/profile', {
          credentials: 'include', // 쿠키를 포함하기 위해 필요
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('프로필 조회에 실패했습니다');
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('프로필 조회 실패:', error);
        router.push('/login');
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3080/api/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('로그아웃 실패');
      }

      router.push('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  if (!profile) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      {/* Render your profile component here */}
    </div>
  );
} 