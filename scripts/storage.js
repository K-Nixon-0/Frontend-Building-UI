const KEY = 'vault:data';
export const load = () => JSON.parse(localStorage.getItem(KEY) ||  '[]');
export const save = d => localStorage.setItem(KEY, JSON.stringify(d));