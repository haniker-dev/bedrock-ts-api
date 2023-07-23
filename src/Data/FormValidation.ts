export function isPassword(v: string) {
  return v.length > 5;
}

export function isValidEmail(v: string) {
  return /\S+@\S+\.\S+/.test(v);
}
