export const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
export const number = value => new Intl.NumberFormat('en-US').format(value);
export const percent = value => `${Number(value).toFixed(1)}%`;

