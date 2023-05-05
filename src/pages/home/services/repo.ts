import { request } from 'ice';

export default {
  // 参数场景
  async getRepo(id) {
    return await request(`/repo/${id}`);
  },

  // 格式化返回值
  async getDetail(params) {
    const data = await request({
      url: `/detail`,
      params,
    });

    return data.map((item) => {
      return {
        ...item,
        price: item.oldPrice,
        text: item.status === '1' ? '确定' : '取消',
      };
    });
  },
};
