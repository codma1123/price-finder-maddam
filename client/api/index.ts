import { AxiosRequestConfig } from 'axios'

export * from './requests'

export const DEFAULT_HEADERS: AxiosRequestConfig = {
}

export const GEOCODE_HEADERS = {
  headers: {    
    "X-NCP-APIGW-API-KEY-ID": import.meta.env.VITE_GEOCODING_CLIENT_KEY,
    "X-NCP-APIGW-API-KEY": import.meta.env.VITE_GEOCODING_SECRET,    
    'Access-Control-Allow-Origin': '*',
  },
}