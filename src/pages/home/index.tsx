import React, { useEffect } from 'react';
import { useRequest } from 'ice';
import userService from '@/services/user';

export default function HomePage() {
  // 调用 service
  const { data, error, loading, request } = useRequest(userService.getUser);

  useEffect(() => {
    // 触发数据请求
    request();
  }, []);

  return <>Home</>;
}
