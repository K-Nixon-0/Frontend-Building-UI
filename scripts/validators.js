export const vTitle = v => /^\S(?:.*\S)?$/.test(v);
export const vPages = v => /^(0|[1-9]\d*)$/.test(v);
export const vDate = v => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(v);
export const vTag = v => /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(v);
export const vAdv = v => /\b(\w+)\s+\1\b/.test(v);