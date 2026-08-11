const API = import.meta.env.VITE_API_URL || '/api';
async function request(path) {
  const response = await fetch(`${API}${path}`);
  if (!response.ok) throw new Error(`API request failed (${response.status})`);
  return response.json();
}
export const api = {
  overview: () => request('/dashboard/overview'),
  customers: () => request('/customers'),
  churn: () => request('/churn'),
  retention: () => request('/retention'),
  cohorts: () => request('/cohorts')
};

