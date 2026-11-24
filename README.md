# SDD 课堂练习库

## 当前练习 · 限额活动报名

> 给培训活动页加一个报名功能。活动有名额限制，报名成功后发给用户一份凭证，报名失败时给出明确提示。

## 练习说明

1. **第一阶段 · 直推盲区体验**：直接把上述需求发给常用的 AI 工具（无需克隆代码），观察 AI 是否一口气全写完并遗漏了所有异常和边界。
2. **第二阶段 · 进入 SDD 规范澄清**：进入本项目目录，使用 Spec Kit 体验框架的主动提问与规范驱动开发。

## 克隆与打开练习库

需要 Git、Bash、Node.js 20 或更新版本，以及能正常使用的 Claude Code 或 Codex。macOS 和 Linux 可以在终端操作。Windows 请在 Git Bash 或 WSL 中运行，并从同一环境进入项目。

在终端进入存放练习项目的目录，执行：

```sh
git clone https://github.com/xbl/sdd-workshop-lab.git
cd sdd-workshop-lab
```

从这个目录打开 Claude Code（`claude`）或 Codex（`codex`，也可以用 Codex 桌面应用打开此文件夹）。Spec Kit 1.4.4 的项目命令、模板、脚本和项目原则已经随仓库配置，克隆后就可以使用，省去安装 Specify CLI 和运行 `specify init` 的步骤。

可以用浏览器直接打开 `index.html`。报名逻辑在 `registration.js`，初始页面会显示「报名功能待实现」。

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
