let state = newActivity();
const remainingEl = document.querySelector('#remaining');
const userInput = document.querySelector('#user-input');
const receiptEl = document.querySelector('#receipt');
const capacityInput = document.querySelector('#capacity-input');
const configFeedback = document.querySelector('#config-feedback');

function newActivity() {
  return { capacity: 1, closed: false, registrations: [] };
}

function renderRemaining() {
  remainingEl.textContent = state.capacity - state.registrations.length;
}

function formatReceipt(receipt) {
  if (!receipt || !receipt.code || receipt.code === 'not_implemented') {
    return '报名功能待实现。';
  }
  if (receipt.code === 'registered') {
    return receipt.registrationId
      ? '报名成功，凭证 ' + receipt.registrationId
      : '报名成功。';
  }
  return receipt.message || receipt.code;
}

renderRemaining();

document.querySelector('#submit-registration').addEventListener('click', () => {
  const userId = userInput.value.trim();
  const result = register(state, { userId });
  state = result.state;
  renderRemaining();
  receiptEl.textContent = formatReceipt(result.receipt);
});

document.querySelector('#set-capacity').addEventListener('click', () => {
  // 待实现：读取 capacityInput.value 并完成名额限制与配置逻辑。
  void capacityInput;
  configFeedback.textContent = '设置名额功能待实现。';
});

document.querySelector('#close-registration').addEventListener('click', () => {
  // 待实现：完成截止报名逻辑与界面交互（例如是否禁用提交或提示已截止）。
  configFeedback.textContent = '截止报名功能待实现。';
});

document.querySelector('#reopen-registration').addEventListener('click', () => {
  // 待实现：完成重新开启报名逻辑与界面交互。
  configFeedback.textContent = '重新开启报名功能待实现。';
});

document.querySelector('#clear-registrations').addEventListener('click', () => {
  // 待实现：完成清空报名记录与重置页面状态逻辑。
  configFeedback.textContent = '清空报名功能待实现。';
});
