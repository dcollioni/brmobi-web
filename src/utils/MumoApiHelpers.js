import config from './../config/index.js'
import AxiosHelper from './AxiosHelper'

export default class MumoApiHelpers {
  constructor () {
    this.axiosHelper = new AxiosHelper(config.mumoApi.baseUrl)
  }

  async checkPhoneNumber (phoneNumber) {
    try {
      const res = await this.axiosHelper.post('/', {
        query: 'query check ($carrier:String!, $phone:String!) {checkNumber(carrier: $carrier, phone: $phone)}',
        variables: {
          carrier: 'nextel',
          phone: `55${phoneNumber}`
        }
      })

      return { subscribed: !!res.data.checkNumber }
    } catch (err) {
      return { subscribed: false }
    }
  }

  async getStationsInfo () {
    try {
      const res = await this.axiosHelper.post('/', {
        query: 'query { stationsInfo { name, artwork } }'
      })

      return res.data.stationsInfo
    } catch (err) {
      return []
    }
  }
}
