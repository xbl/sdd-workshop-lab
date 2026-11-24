// state 有 capacity、startsAt、registrations。startsAt 和 now 都是毫秒数。
// registrations 每项为 { userId, registrationId }。
// 返回 { state, receipt }。receipt.code 为 registered、full、closed 或 not_implemented。
// registered 的结果还包含 registrationId。失败时返回未改变的 state。
function register(state, { userId, now }) {
  // 在 Spec 评审完成后，实现本函数。先用测试观察这段占位逻辑的行为。
  return { state, receipt: { code: 'not_implemented' } };
}

if (typeof module !== 'undefined') {
  module.exports = { register };
}
