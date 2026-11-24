# 项目指令与架构红线

本项目为《AI 增强的敏捷交付与 DevOps》课程中的 SDD 实操练习库。

## 架构红线（严禁违反）

1. **绝对禁止数据库**：严禁创建、安装、配置或建议使用 SQLite、MySQL、PostgreSQL、IndexedDB、Redis 等任何真实数据库。
2. **绝对禁止后端服务与外部依赖**：严禁引入 Express、Fastify、Next.js、Node HTTP 服务等任何后端框架；严禁安装任何 npm 依赖包（项目必须保持 0 第三方依赖）。
3. **模拟数据库契约**：
   - 唯一的“数据库”即为输入参数 `state`（纯内存 JavaScript 对象）：
     - `state.capacity`: 名额上限（数字）
     - `state.startsAt`: 活动开始时间戳（毫秒数）
     - `state.registrations`: 报名记录列表 `Array<{ userId: string, registrationId: string }>`
   - 唯一的修改文件为 `registration.js`，严格保持纯函数契约：
     `function register(state, { userId, now }) -> { state, receipt }`
   - 查询、去重、满员判断与写入全部通过对 `state` 内存对象的纯逻辑操作完成。
4. **运行与验证**：
   - 浏览器运行：直接双击 `index.html` 打开，开箱即用；
   - 自动化测试：仅使用 Node.js 原生测试工具：`node --test`。
