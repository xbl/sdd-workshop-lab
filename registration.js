// 【架构红线与模拟数据库契约】
// 1. 本项目严禁引入 SQLite、MySQL 等任何真实数据库，严禁引入后端服务或外部 npm 依赖。
// 2. 本函数的 state 对象即为“模拟数据库”，所有状态读取与写入均基于此对象：
//    - state 包含: { capacity: number, startsAt: number, registrations: Array<{ userId: string, registrationId: string }> }
//    - 返回结构: { state: nextState, receipt: { code: string, registrationId?: string } }
//    - receipt.code 可选值: 'registered' | 'full' | 'closed' | 'not_implemented'
// 3. 失败或拒绝时返回原 state（未改变）；成功时返回浅拷贝并追加新记录的新 state。
function register(state, { userId, now }) {
  // 在 Spec 评审完成后，实现本函数。先用测试观察这段占位逻辑的行为。
  return { state, receipt: { code: 'not_implemented' } };
}

if (typeof module !== 'undefined') {
  module.exports = { register };
}
