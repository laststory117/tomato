import { api } from './axios'

export const createTxt = params => api.post('/file/create', params)