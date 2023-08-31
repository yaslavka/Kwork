import axios from 'axios'
import Raven from 'raven-js'
import {createFormDataObj, getAccessToken} from '../utils'
import * as actions from '../actions/auth.actions'
import { store } from '../index'

export const baseInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

baseInstance.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        Raven.captureException(error)
        return Promise.reject(error)
    },
)

baseInstance.interceptors.response.use(
    (response) => response?.data,
    (error) => {
        Raven.captureException(error)
        if (error?.response?.status === 401) {
            const timer = localStorage.getItem('access_token')
            localStorage.clear()
            localStorage.setItem('access_token', timer)

            store.store.dispatch(actions.signOut())
        } else if (error?.response) {
            // Global path to error message
            throw new Error(error?.response?.data?.message)
        } else {
            throw new Error(error?.message)
        }
    },
)
export const categoryImage = 'http://127.0.0.1:80/api/category/images'
export const api = {
    listCategory(){
      return baseInstance.get('/list_category')
    },
    listCategoryPages(data){
        return baseInstance.post('/list_category_pages', data)
    },
    listSubCategoryPages(data){
        return baseInstance.post('/list_sub_category_pages', data)
    },
    signIn(credentials) {
        return baseInstance.post(
            '/user/login',
            createFormDataObj({ ...credentials, grant_type: 'password' }),
        )
    },
    getUserInfo() {
        return baseInstance.get('/user')
    },
}
