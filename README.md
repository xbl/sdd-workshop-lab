# SDD 课堂练习库

## 当前练习 · 限额活动报名

> 给培训活动页加一个报名功能。活动有名额限制，报名成功后发给用户一份凭证，报名失败时给出明确提示。

## 练习说明

1. **第一阶段 · 直推盲区体验**：直接把上述需求发给常用的 AI 工具（无需克隆代码），观察 AI 是否一口气全写完并遗漏了所有异常和边界。
2. **第二阶段 · 进入 SDD 规范澄清**：将本项目 Fork 到个人 GitHub 账号并克隆到本地，使用 Spec Kit 体验框架的主动提问与规范驱动开发。

## Fork 与克隆练习库

为了让每位学员在后续的 Harness 工程环节能够练习让 AI Skill 自动化处理真实缺陷，请**先将本仓库 Fork 到您的个人 GitHub 账号，再克隆您自己的仓库**：

1. 在浏览器打开练习仓库 [https://github.com/xbl/sdd-workshop-lab](https://github.com/xbl/sdd-workshop-lab)，点击右上角的 **Fork** 按钮，创建到您个人的 GitHub 命名空间下；
   - **重要提示**：GitHub Fork 出的仓库默认会关闭 **Issues** 功能，请在 Fork 后的个人仓库页面进入 **Settings → General → Features**，勾选开启 **Issues**；
2. 在本地终端进入存放练习项目的目录，克隆**您自己的 Fork 仓库**：

```sh
git clone https://github.com/<你的 GitHub 用户名>/sdd-workshop-lab.git
cd sdd-workshop-lab
```

> **后续联动说明**：后续当您在实操中发现 Bug 或进行报障演练时，可以直接在您的个人仓库中创建 **GitHub Issue**，并练习编写与调用 Bug 修复 Skill（实现让 AI 读取 Issue 目标、编写复现测试见红、自动化修复转绿、验证并闭环 Issue；建议提前确认本地已登录 `gh` CLI 或已配置 GitHub MCP）。

需要 Git、Bash、Node.js 20 或更新版本，以及能正常使用的 Claude Code 或 Codex。macOS 和 Linux 可以在终端操作。Windows 请在 Git Bash 或 WSL 中运行，并从同一环境进入项目。

从这个目录打开 Claude Code（`claude`）或 Codex（`codex`，也可以用 Codex 桌面应用打开此文件夹）。Spec Kit 1.4.4 的项目命令、模板、脚本和项目原则已经随仓库配置，克隆后就可以使用，省去安装 Specify CLI 和运行 `specify init` 的步骤。

可以用浏览器直接打开 `index.html`。页面上方为调试配置区（包含「报名名额」输入框及「设置名额」「截止报名」「重新开启报名」「清空报名」按钮），下方为活动报名区（统一展示当前剩余名额，并支持输入任意学员姓名提交报名）。

初始状态下，上述调试控制与报名逻辑均尚未实现（默认由 `registration.js` 与 `page.js` 承载）；若您采用纯前端内存方案，可在当前页面切换不同姓名测试名额、重复提交与截止状态；若希望通过打开多个浏览器窗口演示多用户争抢同一名额，请接入共享存储或后端服务。

## 课堂顺序

下表的命令在 **AI 工具的对话框**里输入。每位学员根据所使用的工具选择对应列，从上到下逐条运行。第一条命令后粘贴上面的业务题面，待每步结束后再发下一条。

| 课堂步骤 | Claude Code | Codex | 本步产出 |
| --- | --- | --- | --- |
| 起草规格 | `/speckit-specify` | `$speckit-specify` | 规格草稿 `spec.md` |
| 澄清与追问 | `/speckit-clarify` | `$speckit-clarify` | 观察 SDD 主动提问，把讲师确认的规则写回 `spec.md` |
| 生成方案 | `/speckit-plan` | `$speckit-plan` | 依据已确认的规格和仓库边界生成 `plan.md` |
| 拆出任务 | `/speckit-tasks` | `$speckit-tasks` | `tasks.md`，抽查一条规则能否追到实现与验证任务 |
| 启动实现 | `/speckit-implement` | `$speckit-implement` | 记录执行状态、会话和产物位置 |

执行 Clarify 时观察框架主动挖掘出的模糊点与规则冲突，向讲师确认后写入 Spec。启动实现后回到课堂继续听讲，稍后回看结果。回看时用启动执行时的 Spec 对照一个实际结果，说明预期、实际和证据。实现仍在运行或遇阻时，展示实际进度和卡点。

项目原则在 `.specify/memory/constitution.md`，学员生成的规格、方案和任务放在 `specs/`。Spec Kit 文件来源及许可证见 [GitHub Spec Kit v1.4.4](https://github.com/github/spec-kit/tree/v1.4.4) 和 [MIT 许可证](LICENSE-SPEC-KIT)。
