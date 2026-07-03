const API_BASE = import.meta.env.VITE_API_URL || '/api';

const getToken = () => localStorage.getItem('token');

export const api = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

export const authApi = {
  login: (credentials) => api('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData) => api('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  getMe: () => api('/auth/me'),
};

export const noticesApi = {
  getAll: () => api('/notices'),
  create: (data) => api('/notices', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => api(`/notices/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => api(`/notices/${id}`, { method: 'DELETE' }),
};

export const newsApi = {
  getAll: (params = '') => api(`/news${params}`),
  create: (data) => api('/news', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => api(`/news/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => api(`/news/${id}`, { method: 'DELETE' }),
};

export const eventsApi = {
  getAll: (params = '') => api(`/events${params}`),
  create: (data) => api('/events', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => api(`/events/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => api(`/events/${id}`, { method: 'DELETE' }),
};

export const facultyApi = {
  getAll: () => api('/faculty'),
  create: (data) => api('/faculty', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => api(`/faculty/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => api(`/faculty/${id}`, { method: 'DELETE' }),
};

export const programsApi = {
  getAll: (params = '') => api(`/programs${params}`),
  create: (data) => api('/programs', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => api(`/programs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => api(`/programs/${id}`, { method: 'DELETE' }),
};
