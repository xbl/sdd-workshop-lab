const start = Date.UTC(2026, 10, 15, 8, 0);
const minute = 60_000;
const timeSelect = document.querySelector('#time');
const messages = {
  full: '报名已满。',
  closed: '报名已截止。',
  not_implemented: '报名功能待实现。',
};

let state = newActivity();
const clients = [...document.querySelectorAll('[data-user]')];

function newActivity() {
  return { capacity: 1, startsAt: start, registrations: [] };
}

function showRemaining(client) {
  client.querySelector('.remaining').textContent = state.capacity - state.registrations.length;
}

for (const client of clients) {
  client.querySelector('button').addEventListener('click', () => {
    const now = start - Number(timeSelect.value) * minute;
    const result = register(state, { userId: client.dataset.user, now });
    state = result.state;
    // 只刷新刚提交的页面，另一张页面仍持有旧名额。
    showRemaining(client);
    const receipt = result.receipt;
    client.querySelector('.receipt').textContent = receipt.code === 'registered'
      ? '报名成功，凭证 ' + receipt.registrationId
      : messages[receipt.code];
  });
}

document.querySelector('#reset').addEventListener('click', () => {
  state = newActivity();
  timeSelect.value = '31';
  for (const client of clients) {
    showRemaining(client);
    client.querySelector('.receipt').textContent = '';
  }
});
