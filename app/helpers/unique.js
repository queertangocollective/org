import { helper } from '@ember/component/helper';

export default helper(function ([list, key]) {
  let names = {};
  try {
  return list.reduce((E, item) => {
    let object = item[key];
    if (Array.isArray(object)) {
      object.forEach((value) => {
        if (!names[value.name]) {
          E.push(value);
          names[value.name] = true;
        }
      });
    } else if (!names[object.name]) {
      E.push(object);
      names[object.name] = true;
    }
    return E;
  }, []);
  } catch (e) {
    return [];
  }
});
