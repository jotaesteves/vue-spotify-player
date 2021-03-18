import axios from 'axios'
import { defaultConfig } from './config'

const api = axios.create(defaultConfig)

export default class HttpService {
  static async get (endpoint, token) {
    const options = {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
      timeout: 60000
    };

    return api.get(`${endpoint}`, options)
  }
}
