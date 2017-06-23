import Axios from 'axios'

async function getResult (promise) {
  try {
    const res = await promise
    return res.data
  } catch (err) {
    const { config, status, data } = err.response
    console.log(`axiosHelper error fetching [${config.url}] \nstatus [${status}] \nmessage [${data}]`); // eslint-disable-line
    throw new Error(err.response)
  }
}

export default class AxiosHelper {
  constructor (baseURL, headers = {}) {
    this.axios = Axios.create({ baseURL, headers, paramsSerializer: JSON.stringify })
  }

  get (url, params = {}) {
    return getResult(this.axios.get(url, { params }))
  }

  post (url, params = {}, headers = {}) {
    Object.assign(this.axios.defaults.headers, headers)
    return getResult(this.axios.post(url, params))
  }

  put (url, params = {}, headers = {}) {
    Object.assign(this.axios.defaults.headers, headers)
    return getResult(this.axios.put(url, params))
  }

  delete (url, headers = {}) {
    Object.assign(this.axios.defaults.headers, headers)
    return getResult(this.axios.delete(url))
  }
}
