import axios from 'axios'
import { URL_CMS } from './setting'
export const fetchInfoCompany = async () => {
  try {
    const response = await axios.get(`${URL_CMS}api/info-companies?populate=*`)
    return response.data.data[0] // clear het va chuyen ve obj
  } catch (error) {
    console.error('Error fetching related data:', error)
    return null
  }
}
export const fetchNavbar = async () => {
  try {
    const response = await axios.get(`${URL_CMS}api/navbars?populate=*`)
    return response.data.data[0] // clear het va chuyen ve obj
  } catch (error) {
    console.error('Error fetching related data:', error)
    return null
  }
}
export const fetchIndustriesCompany = async () => {
  try {
    const response = await axios.get(`${URL_CMS}api/industries-companies?populate=*`)
    return response.data.data[0] // clear het va chuyen ve obj
  } catch (error) {
    console.error('Error fetching related data:', error)
    return null
  }
}