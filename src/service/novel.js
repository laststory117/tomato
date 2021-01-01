import { api } from './axios'

export const testApi = () => api.get('/hello')