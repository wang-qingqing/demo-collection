export default {
    namespace: 'products',//全局state上的key
    state: [],//初始值
    reducers: { //等同于redux里的reducer，接收action，同步更新state
        'delete'(state, { payload: id }){
            return state.filter(item => item.id !== id);
        }
    }
}
