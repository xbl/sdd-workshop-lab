// 默认的纯内存占位实现（保证克隆后直接打开 index.html 可运行、不报错）。
// - 若采用纯前端/纯内存方案：可直接在 register(state, { userId }) 中实现核心规则，并保持纯函数导出以便 node --test 测试。
// - 若采用前后端方案：可在服务端（如 Node.js HTTP 服务）复用本模块，或改为由 page.js 通过接口调用后端服务。
function register(state, { userId }) {
  // 在 Spec 评审完成后，按已确认规则实现报名逻辑。
  return { state, receipt: { code: 'not_implemented' } };
}

if (typeof module !== 'undefined') {
  module.exports = { register };
}
