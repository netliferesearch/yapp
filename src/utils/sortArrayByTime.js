/* eslint-disable */
const schwartzianSort = (array, f, asc) => {
  for (let i = array.length; i; ) {
    const o = array[--i];
    array[i] = [].concat(f.call(o, o, i), o);
  }
  array.sort((a, b) => {
    for (let i = 0, len = a.length; i < len; ++i) {
      if (a[i] !== b[i]) return a[i] < b[i] ? (asc ? -1 : 1) : 1;
    }
    return 0;
  });
  for (let i = array.length; i; ) {
    array[--i] = array[i][array[i].length - 1];
  }
  return array;
};

export default schwartzianSort;
