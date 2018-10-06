import { helper } from '@ember/component/helper';

export default helper(function ([index, length]) {
  if (index === length - 1) {
    return '';
  } else if (length === 2) {
    return ' and ';
  } else if (index === length - 2){
    return ', and ';
  } else {
    return ', ';
  }
});
