import { helper } from '@ember/component/helper';

export default helper(function ([amount, currency]) {
  let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency });
  return formatter.format(amount / 100);
});
