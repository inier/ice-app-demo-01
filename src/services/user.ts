import { request } from 'ice';

export default {
  // 简单场景
  async getUser() {
    return await request('/api/user');
  },
};
