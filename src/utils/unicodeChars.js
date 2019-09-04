// Usage convertUnicode('\uXXXX');
const convertUnicode = input => {
  return input.replace(/\\u(\w\w\w\w)/g, (a, b) => {
    const charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });
};

export default convertUnicode;
