import { initGlobalState } from 'qiankun'

const initialState = {
  count: 0,
}
const actions = initGlobalState(initialState)
// 例子里只有 count 一个key，如果对象比较复杂建议使用状态管理工具进行管理
// 这代码看着很呆
// actions.getCount = () => initialState.count

actions.onGlobalStateChange(state => {
  // 这里得修改 initialState 我是有点不愿意的
  // 但是没有用状态管理，应该只能这么操作了
  initialState.count = state.count
})

export default actions
