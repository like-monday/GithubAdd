import mockRequest from '@/utils/mockRequest';
const state = {
  list: {}
};
const mutations = {
  GETDATA(state, list) {
    state.list = list;
  }
};
const actions = {
  //发请求获取首页的模拟的数据
  async getData({
    commit
  }) {
    let result = await mockRequest.get("/home/list");
    console.log(result); //11.19
    if (result.code == 20000 || 200) {
      commit("GETDATA", result.data)
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}
