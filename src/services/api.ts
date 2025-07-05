import axios from 'axios';

const API_BASE_URL = 'https://mandala-nxgo.onrender.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials: { username: string; password: string }) =>
    api.post('/auth/login', credentials),
  
  register: (userData: { username: string; email: string; password: string }) =>
    api.post('/auth/register', userData),
  
  getCurrentUser: () => api.get('/auth/me'),
};

// Products API
export const productsAPI = {
  getAll: (params?: any) => api.get('/products', { params }),
  
  getById: (id: string) => api.get(`/products/${id}`),
  
  create: (productData: any) => api.post('/products', productData),
  
  update: (id: string, productData: any) => api.put(`/products/${id}`, productData),
  
  delete: (id: string) => api.delete(`/products/${id}`),
};

// Courses API
export const coursesAPI = {
  getAll: () => api.get('/courses'),
  
  getById: (id: string) => api.get(`/courses/${id}`),
  
  create: (courseData: any) => api.post('/courses', courseData),
  
  update: (id: string, courseData: any) => api.put(`/courses/${id}`, courseData),
  
  delete: (id: string) => api.delete(`/courses/${id}`),
};

// Upload API
export const uploadAPI = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  deleteImage: (filename: string) => api.delete(`/upload/image/${filename}`),
};

export default api;