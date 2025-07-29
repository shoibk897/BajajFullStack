export function isAlpha(ch) {
  return /^[a-zA-Z]$/.test(ch);
}

export function isNumeric(ch) {
  return /^\d+$/.test(ch);
}

export function isSpecialChar(ch) {
  return !isAlpha(ch) && !isNumeric(ch);
}
