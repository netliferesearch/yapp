/**
 * Check if needle is aviable in object haystack.
 * Pass in object and all levels to check.
 * Example: const about = apiToValueChecker(userObject, 'user', 'username') ? userObject.user.username : null;
 * @returns boolean
 */
function apiToValueChecker(obj, level, ...rest) {
  if (obj === undefined) return false;
  if (rest.length === 0) return Object.prototype.hasOwnProperty.call(obj, level);
  return apiToValueChecker(obj[level], ...rest);
}

export default apiToValueChecker;
