import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const addBusiness = payload => api.post('/business', payload)
export const getAllBusinesses = () => api.get('/businesses')
export const updateBusinessById = (id, payload) => api.put('/business/${id}', payload)
export const deleteBusinessById = id => api.delete('/business/${id}')
export const getBusinessById = id => api.get('/business/${id}')

const apis = {
    addBusiness,
    getAllBusinesses,
    updateBusinessById,
    deleteBusinessById,
    getBusinessById
}

export default apis;