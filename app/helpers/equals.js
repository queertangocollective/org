import { helper } from '@ember/component/helper';

export default helper(function ([lhs, rhs]) {
  return lhs === rhs;
});
